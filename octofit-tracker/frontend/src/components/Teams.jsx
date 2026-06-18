import CollectionPage from './CollectionPage';
import { getResourceEndpoint } from '../api';

export default function Teams() {
  const teamsEndpoint = getResourceEndpoint('teams');

  return (
    <CollectionPage
      title="Teams"
      endpoint={teamsEndpoint}
      emptyMessage="No teams have been created yet."
      renderItem={(team) => (
        <article className="card border-0 h-100 shadow-sm">
          <div className="card-body">
            <h3 className="h5 card-title mb-2">{team.name ?? 'Unnamed team'}</h3>
            <p className="text-secondary mb-3">{team.description ?? 'No team description yet.'}</p>
            <div className="d-flex gap-2 flex-wrap">
              <span className="badge text-bg-info">Score: {team.teamScore ?? 0}</span>
              <span className="badge text-bg-light border">Activities: {team.totalActivities ?? 0}</span>
            </div>
          </div>
        </article>
      )}
    />
  );
}
