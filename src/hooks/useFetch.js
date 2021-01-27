import React, { useEffect, useState } from 'react';



const useFetch =(url)=>{

    const[data, setData] = useState([]);
    const[isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(url)
        .then((res)=>{
            return res.json()
        })
        .then((data) =>{
            //get the random index
            setData(data[Math.floor(Math.random() * data.length)]);
            setIsLoading(false);
        })
        .catch(err =>{
            console.log(err.message);
        })
    }, [url])

    //or   [data, isLoading]
    return {data, isLoading}
}

export default useFetch;