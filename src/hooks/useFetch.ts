import {useSafeState, useEffect} from 'react';

export function useFetch<T>(url: string) {
    const [data, setData] = useSafeState<T | null>(null);
    const [loading, setLoading] = useSafeState(true);
    const [error, setError] = useSafeState<Error | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const result = await response.json();
                setData(result);
            } catch (err) {
                setError(err instanceof Error ? err : new Error(String(err)));
            }
            setLoading(false);
        };
