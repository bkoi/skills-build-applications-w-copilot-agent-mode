import CollectionPage from './CollectionPage';

export default function Leaderboard() {
  return (
    <CollectionPage
      title="Leaderboard"
      resource="leaderboard"
      emptyMessage="Leaderboard entries will appear after activities are scored."
      renderItem={(entry) => (
        <article className="card border-0 h-100 shadow-sm">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-start gap-3 mb-3">
              <h3 className="h5 card-title mb-0">{entry.username ?? 'Competitor'}</h3>
              <span className="badge text-bg-warning">Rank #{entry.rank ?? '-'}</span>
            </div>
            <div className="d-flex gap-2 flex-wrap">
              <span className="badge text-bg-dark">Points: {entry.points ?? 0}</span>
              <span className="badge text-bg-light border">Activities: {entry.totalActivities ?? 0}</span>
            </div>
          </div>
        </article>
      )}
    />
  );
}
