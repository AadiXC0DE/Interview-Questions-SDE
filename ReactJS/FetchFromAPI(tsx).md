### Question: Create a custom hook with TypeScript to fetch data from an API.

## Solution:

### Custom Hook (`useFetch.ts`):

```typescript
import { useState, useEffect } from "react";

interface FetchProps<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

const useFetch = <T,>(url: string): FetchProps<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch");
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
```

### Explanation:

- **Interface**:
  - `FetchProps<T>`: Defines the shape of the return value, with `data`, `loading`, and `error` properties.

- **Custom Hook**:
  - **useState**: Manages state for `data`, `loading`, and `error`.
  - **useEffect**: Executes the fetch operation whenever the `url` changes.
    - **fetchData Function**:
      - Sets `loading` to true and `error` to null initially.
      - Uses `fetch` to get data from the provided URL.
      - Updates `data` with the fetched data if successful.
      - Catches and sets the error message if the fetch fails.
      - Sets `loading` to false once the fetch operation is complete.

