(function () {
  const activityContainer = document.querySelector('.activity-grid');
  if (!activityContainer) return;

  const username = activityContainer.getAttribute('data-github-username') || 'MinhTriTech';
  const heatmapRow = document.getElementById('activity-heatmap-row');
  const activityList = document.getElementById('activity-list');

  if (!heatmapRow || !activityList) return;

  const DAYS_BACK = 30;
  const EVENTS_LIMIT = 60;

  function formatRelativeTime(date) {
    const now = new Date();
    const diffMs = now - date;
    const diffSec = Math.floor(diffMs / 1000);
    const diffMin = Math.floor(diffSec / 60);
    const diffHours = Math.floor(diffMin / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (diffSec < 60) return 'Vừa xong';
    if (diffMin < 60) return `${diffMin} phút trước`;
    if (diffHours < 24) return `${diffHours} giờ trước`;
    if (diffDays < 7) return `${diffDays} ngày trước`;

    const weeks = Math.floor(diffDays / 7);
    return weeks === 1 ? '1 tuần trước' : `${weeks} tuần trước`;
  }

  function describeEvent(evt) {
    const { type, repo, payload } = evt;
    const repoName = repo ? repo.name : '';

    switch (type) {
      case 'PushEvent': {
        const commits = payload && Array.isArray(payload.commits) ? payload.commits.length : 1;
        return `Đẩy ${commits} commit lên ${repoName}`;
      }
      case 'CreateEvent':
        if (payload && payload.ref_type === 'repository') {
          return `Tạo repository mới ${repoName}`;
        }
        return `Tạo ${payload && payload.ref_type ? payload.ref_type : 'resource'} trong ${repoName}`;
      case 'IssuesEvent':
        if (payload && payload.action) {
          return `${payload.action === 'opened' ? 'Mở' : 'Cập nhật'} issue trên ${repoName}`;
        }
        return `Hoạt động với issue trên ${repoName}`;
      case 'PullRequestEvent':
        if (payload && payload.action) {
          return `${payload.action === 'opened' ? 'Mở' : 'Cập nhật'} pull request trên ${repoName}`;
        }
        return `Hoạt động với pull request trên ${repoName}`;
      case 'WatchEvent':
        return `Star một repo: ${repoName}`;
      case 'ForkEvent':
        return `Fork repo ${repoName}`;
      default:
        return `Hoạt động trên ${repoName}`;
    }
  }

  function buildHeatmap(dailyCounts) {
    heatmapRow.innerHTML = '';

    const today = new Date();
    const dates = [];
    for (let i = DAYS_BACK - 1; i >= 0; i -= 1) {
      const d = new Date(today);
      d.setDate(d.getDate() - i);
      const key = d.toISOString().slice(0, 10);
      dates.push(key);
    }

    const values = dates.map((d) => dailyCounts[d] || 0);
    const max = values.reduce((acc, v) => (v > acc ? v : acc), 0);

    dates.forEach((dateStr) => {
      const count = dailyCounts[dateStr] || 0;
      let level = 0;
      if (count > 0 && max > 0) {
        const ratio = count / max;
        if (ratio <= 0.33) level = 1;
        else if (ratio <= 0.66) level = 2;
        else level = 3;
      }

      const cell = document.createElement('div');
      cell.className = `activity-cell level-${level}`;
      cell.title = `${dateStr}: ${count} hoạt động`;
      heatmapRow.appendChild(cell);
    });
  }

  function buildActivityList(events) {
    activityList.setAttribute('aria-busy', 'false');
    activityList.innerHTML = '';

    if (!events.length) {
      const p = document.createElement('p');
      p.className = 'activity-status';
      p.textContent = 'Chưa có hoạt động công khai nào gần đây trên GitHub. Có thể mình đang nghiên cứu offline hoặc thử ý tưởng mới.';
      activityList.appendChild(p);
      return;
    }

    events.slice(0, 5).forEach((evt) => {
      const wrapper = document.createElement('article');
      wrapper.className = 'activity-item';

      const title = document.createElement('p');
      title.className = 'activity-item-title';
      title.textContent = describeEvent(evt);

      const meta = document.createElement('p');
      meta.className = 'activity-item-meta';
      const time = new Date(evt.created_at);
      meta.textContent = `${evt.repo ? evt.repo.name : ''} • ${formatRelativeTime(time)}`;

      wrapper.appendChild(title);
      wrapper.appendChild(meta);
      activityList.appendChild(wrapper);
    });
  }

  async function fetchActivity() {
    try {
      const res = await fetch(`https://api.github.com/users/${encodeURIComponent(username)}/events/public?per_page=${EVENTS_LIMIT}`);
      if (!res.ok) {
        throw new Error(`GitHub API trả về mã ${res.status}`);
      }
      const data = await res.json();

      const cutoff = new Date();
      cutoff.setDate(cutoff.getDate() - DAYS_BACK + 1);

      const dailyCounts = {};
      const recentEvents = [];

      data.forEach((evt) => {
        const created = new Date(evt.created_at);
        if (created < cutoff) return;

        const key = created.toISOString().slice(0, 10);
        dailyCounts[key] = (dailyCounts[key] || 0) + 1;
        recentEvents.push(evt);
      });

      buildHeatmap(dailyCounts);
      buildActivityList(recentEvents);
    } catch (err) {
      console.error('Lỗi khi lấy hoạt động GitHub:', err);
      activityList.setAttribute('aria-busy', 'false');
      activityList.innerHTML = '';
      const p = document.createElement('p');
      p.className = 'activity-status';
      p.textContent = 'Không tải được hoạt động từ GitHub lúc này (có thể do giới hạn API hoặc lỗi mạng). Thử tải lại trang sau một chút nhé.';
      activityList.appendChild(p);
    }
  }

  fetchActivity();
})();
