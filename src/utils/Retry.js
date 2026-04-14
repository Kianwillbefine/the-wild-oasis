async function Retry(url, maxRetry) {
  let count = 0;
  let lastError = null;
  while (count <= maxRetry) {
    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`HTTP error: ${res.status}`);
      }
      return await res.json();
    } catch (error) {
      lastError = error;
      if (count === maxRetry) {
        throw lastError;
      }
      count++;
    }
  }
}
export default Retry;
