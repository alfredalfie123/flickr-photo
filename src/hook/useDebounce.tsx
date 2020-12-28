import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { searchPhoto } from 'redux/action/photo.action';

// Our hook
export default function useDebounce(value: string, delay: number) {
  // State and setters for debounced value
  const [debouncedValue, setDebouncedValue] = useState(value);
  const dispatch = useDispatch();

  useEffect(() => {
    // Set debouncedValue to value (passed in) after the specified delay
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  useEffect(() => {
    if (debouncedValue !== '') {
      searchPhoto(dispatch, { tags: value });
    }
  }, [debouncedValue]);
}
