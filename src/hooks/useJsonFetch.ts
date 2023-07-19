import * as React from 'react';

interface JsonFetchOptions {
    [k: string]: any;
}

export function useJsonFetch(url: string, opt?: JsonFetchOptions) {
    const [data, setData] = React.useState();
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState('');

    const getData = async () => {
        try {
            setLoading(true);
            const response = await fetch(url, opt);
            if (!response.ok) {
                throw new Error('Invalid status');
            }
            const responseData = await response.json();
            setData(responseData);
        } catch (e) {
            if (typeof e === 'object' && e && 'message' in e) {
                setError(e.message as string);
            }
        } finally {
            setLoading(false);
        }
    };

    React.useEffect(() => {
        getData();
    }, []);

    return [data, loading, error];
}
