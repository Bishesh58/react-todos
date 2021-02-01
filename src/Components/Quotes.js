import React, { useCallback } from 'react';
import './Quotes.css';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import IconButton from '@material-ui/core/IconButton';
import useFetch from '../hooks/useFetch';
import axios from 'axios';
import { useEffect, useState } from 'react';


function Quotes() {

    //using useFetch hook get the data & call it quote
    // const { data: quote , isLoading } = useFetch('https://type.fit/api/quotes')

    const[quotes, setQuotes] = useState([]);
    const[isLoading, setIsLoading] = useState(true);
    
    const getQuotes =()=>{
        const url = "https://type.fit/api/quotes";
        axios.get(url)
        .then(res =>{
           const data = res.data;
          // console.log(data);
           setQuotes(data[Math.floor(Math.random() * data.length)]);
           setIsLoading(false);
        })
    }

    //renders only once at when app first loads
    useEffect(() => {
      getQuotes();
    }, [])

    //get the data on buttonClick, callback will act as memoization, prevents useless rendering
    const generateRandomQuote = useCallback(() => {
        getQuotes();
    }, []);

    return (
        <div className="quotes">
            {isLoading ? (
                <p>Loading..</p>
            ):(
                <div className="quotes__title">
                <h2>{`"${quotes?.text}"`}</h2>
                <p>{`- ${quotes?.author} `}</p>
               </div>
            )}
            <IconButton onClick={generateRandomQuote}>
                <NavigateNextIcon />
            </IconButton>
        </div>
    )
}

export default Quotes
