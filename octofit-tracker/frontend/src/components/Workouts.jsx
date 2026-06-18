import CollectionPage from './CollectionPage';
import { getResourceEndpoint } from '../api';

export default function Workouts() {
  const workoutsEndpoint = getResourceEndpoint('workouts');

  return (
    <CollectionPage
      title="Workouts"
      endpoint={workoutsEndpoint}
      emptyMessage="No workouts are available yet."
      renderItem={(workout) => (
        <article className="card border-0 h-100 shadow-sm">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-start gap-3 mb-3">
              <h3 className="h5 card-title mb-0">{workout.name ?? 'Workout'}</h3>
              <span className="badge text-bg-danger">{workout.difficulty ?? 'unknown'}</span>
            </div>
            <p className="text-secondary mb-3">{workout.description ?? 'No workout description provided.'}</p>
            <div className="d-flex gap-2 flex-wrap">
              <span className="badge text-bg-light border">Duration: {workout.duration ?? 0} min</span>
              <span className="badge text-bg-light border">Exercises: {workout.exercises?.length ?? 0}</span>
            </div>
          </div>
        </article>
      )}
    />
  );
}
