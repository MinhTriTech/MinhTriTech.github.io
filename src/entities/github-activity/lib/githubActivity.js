import { DAYS_BACK, EVENTS_LIMIT } from '../../../shared/config/constants';

export async function fetchGitHubEvents(username) {
  const response = await fetch(
    `https://api.github.com/users/${encodeURIComponent(username)}/events/public?per_page=${EVENTS_LIMIT}`
  );

  if (!response.ok) {
    throw new Error(`GitHub API trả về mã ${response.status}`);
  }

  return response.json();
}

export function formatRelativeTime(date) {
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

export function describeEvent(evt) {
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

export function buildActivityModel(events) {
  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - DAYS_BACK + 1);

  const dailyCounts = {};
  const recentEvents = [];

  events.forEach((evt) => {
    const created = new Date(evt.created_at);
    if (created < cutoff) return;

    const key = created.toISOString().slice(0, 10);
    dailyCounts[key] = (dailyCounts[key] || 0) + 1;
    recentEvents.push(evt);
  });

  return {
    heatmapCells: buildHeatmapCells(dailyCounts),
    recentEvents: recentEvents.slice(0, 5)
  };
}

function buildHeatmapCells(dailyCounts) {
  const today = new Date();
  const dates = [];

  for (let index = DAYS_BACK - 1; index >= 0; index -= 1) {
    const date = new Date(today);
    date.setDate(date.getDate() - index);
    dates.push(date.toISOString().slice(0, 10));
  }

  const values = dates.map((date) => dailyCounts[date] || 0);
  const max = values.reduce((accumulator, value) => (value > accumulator ? value : accumulator), 0);

  return dates.map((date) => {
    const count = dailyCounts[date] || 0;
    let level = 0;

    if (count > 0 && max > 0) {
      const ratio = count / max;
      if (ratio <= 0.33) level = 1;
      else if (ratio <= 0.66) level = 2;
      else level = 3;
    }

    return {
      date,
      count,
      level,
      title: `${date}: ${count} hoạt động`
    };
  });
}
