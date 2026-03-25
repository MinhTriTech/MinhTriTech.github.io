import { useEffect, useMemo, useState } from 'react';
import { ACTIVITY_MESSAGES } from '../../../shared/config/constants';
import { buildActivityModel, fetchGitHubEvents } from '../lib/githubActivity';

export default function useGitHubActivity(username) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [events, setEvents] = useState([]);
  const [heatmapCells, setHeatmapCells] = useState([]);

  useEffect(() => {
    let ignore = false;

    async function load() {
      try {
        setLoading(true);
        setError('');

        const apiEvents = await fetchGitHubEvents(username);
        if (ignore) return;

        const model = buildActivityModel(apiEvents);
        setEvents(model.recentEvents);
        setHeatmapCells(model.heatmapCells);
      } catch (loadError) {
        if (ignore) return;
        setEvents([]);
        setHeatmapCells([]);
        setError(loadError instanceof Error ? loadError.message : 'Không thể tải dữ liệu GitHub.');
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    }

    load();

    return () => {
      ignore = true;
    };
  }, [username]);

  const statusMessage = useMemo(() => {
    if (loading) return ACTIVITY_MESSAGES.loading;
    if (error) return ACTIVITY_MESSAGES.error;
    if (!events.length) return ACTIVITY_MESSAGES.empty;
    return '';
  }, [loading, error, events.length]);

  return {
    loading,
    error,
    events,
    heatmapCells,
    statusMessage
  };
}
