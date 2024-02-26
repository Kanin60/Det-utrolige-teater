//Koden Har jeg taget fra Hotel Overlook Prøven: https://github.com/Kanin60/Hotel_Overlook/blob/main/src/hooks/useFetch.jsx

import { useEffect, useState } from "react";


// tager imod en url, fetcher med GET, gemmer data i states og retunere states. 
// Fetcher hver gang url'en ændres (i dependency array'et). 
export const useFetch = (url) => {
    const [data, setData] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch((err) => setError(err));
    }, [url]);

    return { data, error };
};