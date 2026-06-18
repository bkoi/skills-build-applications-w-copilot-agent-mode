export const getApiBaseUrl = () => {
  const codespaceName = import.meta.env.VITE_CODESPACE_NAME?.trim();

  if (codespaceName) {
    return `https://${codespaceName}-8000.app.github.dev/api`;
  }

  return 'http://localhost:8000/api';
};

export const getEndpointUrl = (resource) => `${getApiBaseUrl()}/${resource}/`;

export const normalizeCollectionResponse = (payload) => {
  if (Array.isArray(payload)) {
    return { items: payload, count: payload.length };
  }

  if (Array.isArray(payload?.results)) {
    return {
      items: payload.results,
      count: payload.count ?? payload.results.length,
    };
  }

  if (Array.isArray(payload?.data)) {
    return {
      items: payload.data,
      count: payload.count ?? payload.data.length,
    };
  }

  if (Array.isArray(payload?.items)) {
    return {
      items: payload.items,
      count: payload.count ?? payload.items.length,
    };
  }

  return { items: [], count: 0 };
};

export const fetchCollection = async (resource) => {
  const response = await fetch(getEndpointUrl(resource));

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  const payload = await response.json();
  return normalizeCollectionResponse(payload);
};
