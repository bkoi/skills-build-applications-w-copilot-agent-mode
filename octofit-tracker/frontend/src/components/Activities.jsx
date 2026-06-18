import CollectionPage from './CollectionPage';
import { getResourceEndpoint } from '../api';

export default function Activities() {
  const activitiesEndpoint = getResourceEndpoint('activities');

  return (
    <CollectionPage
      title="Activities"
      endpoint={activitiesEndpoint}
      emptyMessage="No activities have been logged yet."
      renderItem={(activity) => (
        <article className="card border-0 h-100 shadow-sm">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-start gap-3 mb-3">
              <h3 className="h5 card-title mb-0">{activity.activityType ?? 'Activity'}</h3>
              <span className="badge text-bg-success">{activity.calories ?? 0} cal</span>
            </div>
            <p className="text-secondary mb-3">{activity.description ?? 'No description provided.'}</p>
            <div className="d-flex gap-2 flex-wrap">
              <span className="badge text-bg-light border">Distance: {activity.distance ?? 0}</span>
              <span className="badge text-bg-light border">Duration: {activity.duration ?? 0}</span>
            </div>
          </div>
        </article>
      )}
    />
  );
}
