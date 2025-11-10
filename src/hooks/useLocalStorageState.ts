import { useEffect, useState } from "react";

export default function useLocalStorageState(
  key: string,
  initialState: number
) {
  const [value, setValue] = useState(() => {
    if (localStorage.getItem(key) === null) return initialState;
    else return Number(localStorage.getItem(key));
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as [number, typeof setValue];
}
