import { useState, useEffect } from 'react';

const fetchPosts = async (url) => {
    const response = await fetch(url);
    const json = await response.json();
    return json;
};

function useRequest(url, proccessingFn) {
    const [data, setData] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchResource() {
            try {
                setLoading(true);
                const response = await fetchPosts(url);
                const { results } = response;
                setData(proccessingFn ? proccessingFn(results) : results);
            } catch (e) {
                setError(e.toString());
            } finally {
                setLoading(false);
            }
        }

        fetchResource();
    }, [url, proccessingFn]);

    return [data, loading, error];
}

export default useRequest;
