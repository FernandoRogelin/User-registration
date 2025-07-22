export default async function fetchData(url, options = {}) {
  return fetch(`${import.meta.env.VITE_BASE_URL}${url}`, {
    method: options.method || 'GET',
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    body: options.body ? JSON.stringify(options.body) : null,
  })
  .then(response => { return response.json() })
  .catch(error => { throw error })
}
