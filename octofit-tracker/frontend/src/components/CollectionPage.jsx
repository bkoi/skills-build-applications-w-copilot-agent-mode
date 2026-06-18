import { useEffect, useState } from 'react';
import { fetchCollection, getApiBaseUrl } from '../api';

export default function CollectionPage({
  title,
  endpoint,
  emptyMessage,
  renderItem,
}) {
  const [items, setItems] = useState([]);
  const [count, setCount] = useState(0);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const loadItems = async () => {
      setLoading(true);
      setError('');

      try {
        const result = await fetchCollection(endpoint);

        if (!isMounted) {
          return;
        }

        setItems(result.items);
        setCount(result.count);
      } catch (loadError) {
        if (!isMounted) {
          return;
        }

        setError(loadError instanceof Error ? loadError.message : 'Unable to load data.');
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadItems();

    return () => {
      isMounted = false;
    };
  }, [endpoint]);

  const usingCodespaces = Boolean(import.meta.env.VITE_CODESPACE_NAME?.trim());

  return (
    <section className="resource-page rounded-4 bg-white p-4 shadow-sm">
      <div className="d-flex flex-column flex-lg-row justify-content-between gap-3 mb-4">
        <div>
          <p className="eyebrow mb-2">Presentation Tier</p>
          <h2 className="h3 mb-2">{title}</h2>
          <p className="text-secondary mb-0">
            Data source: <code>{endpoint}</code>
          </p>
        </div>

        <div className="status-panel rounded-4 p-3">
          <div className="small text-uppercase text-secondary">API Base URL</div>
          <div className="fw-semibold break-all">{getApiBaseUrl()}</div>
          <div className={`small mt-2 ${usingCodespaces ? 'text-success' : 'text-warning'}`}>
            {usingCodespaces
              ? 'Using VITE_CODESPACE_NAME for Codespaces API routing.'
              : 'Using localhost fallback because VITE_CODESPACE_NAME is not set.'}
          </div>
        </div>
      </div>

      {loading ? <div className="alert alert-light border">Loading {title.toLowerCase()}...</div> : null}
      {error ? <div className="alert alert-danger">{error}</div> : null}

      {!loading && !error ? (
        <>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <span className="badge text-bg-dark-subtle border">Count: {count}</span>
            <span className="text-secondary small">Supports array and paginated API responses.</span>
          </div>

          {items.length > 0 ? (
            <div className="row g-3">
              {items.map((item, index) => (
                <div className="col-12 col-md-6" key={item._id ?? item.id ?? `${title}-${index}`}>
                  {renderItem(item)}
                </div>
              ))}
            </div>
          ) : (
            <div className="alert alert-secondary mb-0">{emptyMessage}</div>
          )}
        </>
      ) : null}
    </section>
  );
}
