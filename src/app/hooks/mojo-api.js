import apiFetch from '@wordpress/api-fetch';
import {useState, useEffect} from '@wordpress/element';

export default function useMojoApi(initialType = 'themes', initialParams = {}) {

    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [type, setType] = useState(initialType);
    const [params, setParams] = useState(initialParams);
    const [payload, setPayload] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            setIsError(false);
            setIsLoading(true);
            try {
                const urlParams = new URLSearchParams('');
                for (let [name, value] of Object.entries(params)) {
                    urlParams.append(name, value);
                }
                const response = await apiFetch({path: '/mojo/v1/' + type + '?' + urlParams.toString()});
                setPayload(response);
            } catch (error) {
                setIsError(true);
                setPayload(error);
            }
            setIsLoading(false);
        };
        fetchData();
    }, [type, params]);

    return [{isError, isLoading, params, payload}, {setType, setParams}];
}