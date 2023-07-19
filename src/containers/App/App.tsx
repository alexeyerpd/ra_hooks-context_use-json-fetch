import {useJsonFetch} from 'ui/hooks/useJsonFetch';
import {cn} from 'utils/classname';

import '../../styles/root.scss';
import './App.scss';

const block = cn('app');

export function App() {
    const [data, loading, error] = useJsonFetch('http://localhost:7070/data');
    const [data2, loading2, error2] = useJsonFetch('http://localhost:7070/error');
    const [data3, loading3, error3] = useJsonFetch('http://localhost:7070/loading');

    return (
        <div className={block()}>
            <div>
                <h2>Data</h2>
                {loading ? <div>Загрузка...</div> : null}
                {data ? <div>{JSON.stringify(data, null, 4)}</div> : null}
                {error ? <div>{error}</div> : null}
            </div>
            <div>
                <h2>Error</h2>
                {loading2 ? <div>Загрузка...</div> : null}
                {data2 ? <div>{JSON.stringify(data2, null, 4)}</div> : null}
                {error2 ? <div>{error2}</div> : null}
            </div>
            <div>
                <h2>Loading</h2>
                {loading3 ? <div>Загрузка...</div> : null}
                {data3 ? <div>{JSON.stringify(data3, null, 4)}</div> : null}
                {error ? <div>{error3}</div> : null}
            </div>
        </div>
    );
}
