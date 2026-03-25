import { GITHUB_USERNAME } from '../../../shared/config/constants';
import { describeEvent, formatRelativeTime } from '../../../entities/github-activity/lib/githubActivity';
import useGitHubActivity from '../../../entities/github-activity/model/useGitHubActivity';
import styles from './Activity.module.css';

export default function Activity() {
  const { loading, events, heatmapCells, statusMessage } = useGitHubActivity(GITHUB_USERNAME);
  const levelClassMap = [styles.level0, styles.level1, styles.level2, styles.level3];

  return (
    <section className={styles.section} id="hoat-dong" aria-labelledby="activity-title">
      <h2 id="activity-title" className={styles.title}>
        Nhịp học tập và kỷ luật code mỗi ngày
      </h2>
      <p className={styles.sub}>
        Theo dõi hoạt động GitHub giúp bạn nhìn thấy tiến bộ thật thay vì cảm giác mơ hồ khi học.
      </p>

      <div className={styles.grid} data-github-username={GITHUB_USERNAME}>
        <div className={styles.heatmap} aria-label="Tần suất hoạt động theo ngày trên GitHub" role="img">
          <div className={styles.heatmapRow} id="activity-heatmap-row">
            {heatmapCells.map((cell) => (
              <div
                key={cell.date}
                className={`${styles.cell} ${levelClassMap[cell.level]}`}
                title={cell.title}
                aria-label={cell.title}
              />
            ))}
          </div>
          <div className={styles.legend}>
            Ít
            <span className={`${styles.cell} ${styles.level0}`} aria-hidden="true" />
            <span className={`${styles.cell} ${styles.level1}`} aria-hidden="true" />
            <span className={`${styles.cell} ${styles.level2}`} aria-hidden="true" />
            <span className={`${styles.cell} ${styles.level3}`} aria-hidden="true" />
            Nhiều
          </div>
        </div>

        <div className={styles.list} aria-live="polite" aria-busy={loading} id="activity-list">
          {statusMessage ? (
            <p className={styles.status}>{statusMessage}</p>
          ) : (
            events.map((event) => (
              <article className={styles.item} key={event.id}>
                <p className={styles.itemTitle}>{describeEvent(event)}</p>
                <p className={styles.itemMeta}>
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
