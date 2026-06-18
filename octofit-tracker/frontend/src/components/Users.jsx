import CollectionPage from './CollectionPage';

export default function Users() {
  return (
    <CollectionPage
      title="Users"
      resource="users"
      emptyMessage="No users are available yet. Seed the backend or create users through the API."
      renderItem={(user) => (
        <article className="card border-0 h-100 shadow-sm">
          <div className="card-body">
            <h3 className="h5 card-title mb-1">{user.username ?? user.name ?? 'Unnamed user'}</h3>
            <p className="text-secondary mb-3">{user.email ?? 'No email provided'}</p>
            <div className="d-flex gap-2 flex-wrap">
              <span className="badge text-bg-primary">Activities: {user.totalActivities ?? 0}</span>
              <span className="badge text-bg-light border">Distance: {user.totalDistance ?? 0}</span>
            </div>
          </div>
        </article>
      )}
    />
  );
}
