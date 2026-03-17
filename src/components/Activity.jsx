import { GITHUB_USERNAME } from '../lib/constants';
import { describeEvent, formatRelativeTime } from '../lib/githubActivity';
import useGitHubActivity from '../hooks/useGitHubActivity';

export default function Activity() {
  const { loading, events, heatmapCells, statusMessage } = useGitHubActivity(GITHUB_USERNAME);

  return (
    <section className="panel" id="hoat-dong" aria-labelledby="activity-title">
      <h2 id="activity-title" className="section-title">
        Nhịp độ làm việc gần đây
      </h2>
      <p className="section-sub">
        Dữ liệu lấy trực tiếp từ GitHub cá nhân để thể hiện nhịp triển khai liên tục qua từng ngày.
      </p>

      <div className="activity-grid" data-github-username={GITHUB_USERNAME}>
        <div className="activity-heatmap" aria-label="Tần suất hoạt động theo ngày trên GitHub" role="img">
          <div className="activity-heatmap-row" id="activity-heatmap-row">
            {heatmapCells.map((cell) => (
              <div
                key={cell.date}
                className={`activity-cell level-${cell.level}`}
                title={cell.title}
                aria-label={cell.title}
              />
            ))}
          </div>
          <div className="activity-legend">
            Ít
            <span className="activity-cell level-0" aria-hidden="true" />
            <span className="activity-cell level-1" aria-hidden="true" />
            <span className="activity-cell level-2" aria-hidden="true" />
            <span className="activity-cell level-3" aria-hidden="true" />
            Nhiều
          </div>
        </div>

        <div className="activity-list" aria-live="polite" aria-busy={loading} id="activity-list">
          {statusMessage ? (
            <p className="activity-status">{statusMessage}</p>
          ) : (
            events.map((event) => (
              <article className="activity-item" key={event.id}>
                <p className="activity-item-title">{describeEvent(event)}</p>
                <p className="activity-item-meta">
                  {event.repo ? event.repo.name : ''} • {formatRelativeTime(new Date(event.created_at))}
                </p>
              </article>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
