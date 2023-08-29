import { useEffect, useState } from "react";

export function useLocalStorage<T>(item: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    if (typeof window === "undefined") return initialValue;
    let storedValue = localStorage.getItem(item);
    return storedValue ? JSON.parse(storedValue) : initialValue;
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    localStorage.setItem(item, JSON.stringify(value));
  }, [item, value]);

  const updateLocalStorage = (newValue: T) => {
    setValue(newValue);
  };

  return {
    value,
    updateLocalStorage,
  };
}
