### Question: Create a custom `useDebounce` hook in React and explain its implementation.

## Solution:

The `useDebounce` hook delays the execution of a function until after a specified amount of time has passed since it was last called. This is useful when you want to limit how often a function runs, especially with frequent events like typing or scrolling.

### Implementation:

```typescript
import { useCallback, useRef } from 'react';

function useDebounce void>(
  fn: T,
  delay: number,
  immediate: boolean = false
): T {
  // Store the timeout ID for cleanup
  const timerId = useRef();
  
  // Create a memoized debounced function
  const debounced = useCallback(
    function(this: any, ...args: any[]) {
      // Determine if the function should be called immediately
      const callNow = immediate && !timerId.current;
      
      // Clear existing timeout
      if (timerId.current) {
        clearTimeout(timerId.current);
      }
      
      // Set up new timeout
      timerId.current = setTimeout(() => {
        timerId.current = undefined;
        
        // If not immediate mode, execute the function after delay
        if (!immediate) {
          fn.apply(this, args);
        }
      }, delay);
      
      // If immediate mode and no current timeout, execute now
      if (callNow) {
        fn.apply(this, args);
      }
    },
    [fn, delay, immediate]
  ) as T;
  
  return debounced;
}

export default useDebounce;
```

### Example Usage:

```typescript
import React, { useState } from 'react';
import useDebounce from './useDebounce';

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  
  // Create debounced search function
  const debouncedSearch = useDebounce((term: string) => {
    console.log('Searching for:', term);
    // Simulate API call
    setResults([`Result for: ${term}`]);
  }, 500);
  
  const handleSearch = (e: React.ChangeEvent) => {
    const value = e.target.value;
    setSearchTerm(value);
    debouncedSearch(value);
  };
  
  return (
    
      
      
        {results.map((result, index) => (
          {result}
        ))}
      
    
  );
};

export default SearchComponent;
```

### Simple Explanation:

Think of debouncing like waiting for someone to finish speaking before you respond:

1. When a function is called, a timer starts
2. If the function is called again before the timer finishes, the timer restarts
3. The function only executes when the timer completes without interruption

### Common Use Cases:

1. **Search inputs**: Wait until the user stops typing before making API calls
2. **Window resizing**: Update layouts only after resizing is complete
3. **Button clicks**: Prevent accidental double submissions

### Debounce vs. Throttle:

- **Debounce**: Waits until activity stops before executing (like waiting for typing to stop)
- **Throttle**: Executes periodically during continuous activity (like updating during scrolling)

### Tips for Using This Hook:

1. Choose a delay that makes sense for your use case:
   - Shorter (300-500ms) for responsive UI feedback
   - Longer (1000ms+) for expensive operations

2. The `immediate` parameter:
   - When `true`: Function runs on the first call, then waits for inactivity
   - When `false`: Function only runs after the delay period of inactivity

3. Remember to clean up timeouts in useEffect if needed:

```typescript
useEffect(() => {
  const handleResize = useDebounce(() => {
    console.log('Window resized');
  }, 250);
  
  window.addEventListener('resize', handleResize);
  
  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);
```
