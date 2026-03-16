document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('work-rhythm-grid');
  if (!grid) return;

  const today = new Date();
  const username = 'MinhTriTech';

  const last7Days = Array.from({ length: 7 }).map((_, indexFromEnd) => {
    const d = new Date(today);
    d.setDate(today.getDate() - (6 - indexFromEnd));
    return d;
  });

  const commitsByDate = {};
  last7Days.forEach((d) => {
    const key = formatDateKey(d);
    commitsByDate[key] = 0;
  });

  fetch(`https://api.github.com/users/${username}/events/public`)
    .then((response) => {
      if (!response.ok) return [];
      return response.json();
    })
    .then((events) => {
      if (!Array.isArray(events)) return [];

      events.forEach((event) => {
        if (!event || !event.created_at) return;

        const eventDate = new Date(event.created_at);
        const key = formatDateKey(eventDate);

        if (!Object.prototype.hasOwnProperty.call(commitsByDate, key)) return;

        if (event.type === 'PushEvent' && event.payload) {
          let commitCount = 0;

          if (typeof event.payload.size === 'number') {
            commitCount = event.payload.size;
          } else if (Array.isArray(event.payload.commits)) {
            commitCount = event.payload.commits.length;
          }

          commitsByDate[key] += commitCount;
        }
      });

      renderRhythm(last7Days, commitsByDate);
    })
    .catch(() => {
      renderRhythm(last7Days, commitsByDate);
    });

  function formatDateKey(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  function renderRhythm(days, commitsMap) {
    const labels = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'];

    const rhythm = days.map((d) => {
      const dayIndex = d.getDay();
      const dateKey = formatDateKey(d);

      const dateLabel = `${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}`;
      const commits = commitsMap[dateKey] || 0;

      return {
        weekday: labels[dayIndex],
        dateLabel,
        commits,
      };
    });

    const maxCommits = Math.max(...rhythm.map((item) => item.commits), 1);

    rhythm.forEach((item) => {
      const level = getCommitLevel(item.commits, maxCommits);

      const wrapper = document.createElement('article');
      wrapper.className = 'work-rhythm-item';
      wrapper.setAttribute('role', 'listitem');

      const cell = document.createElement('div');
      cell.className = `work-rhythm-cell work-rhythm-cell--level-${level}`;

      const tooltipText = `${item.commits} commit${item.commits !== 1 ? 's' : ''} ngày ${item.dateLabel}`;
      cell.title = tooltipText;
      cell.setAttribute('aria-label', tooltipText);

      const dayLabel = document.createElement('div');
      dayLabel.className = 'work-rhythm-day';
      dayLabel.textContent = item.weekday;

      wrapper.appendChild(cell);
      wrapper.appendChild(dayLabel);

      grid.appendChild(wrapper);
    });
  }

  function getCommitLevel(commits, max) {
    if (commits <= 0) return 0;

    const ratio = commits / max;
    if (ratio <= 0.25) return 1;
    if (ratio <= 0.5) return 2;
    if (ratio <= 0.75) return 3;
    return 4;
  }
});
