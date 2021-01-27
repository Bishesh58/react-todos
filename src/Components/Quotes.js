import React from 'react';
import './Quotes.css';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import IconButton from '@material-ui/core/IconButton';
import useFetch from '../hooks/useFetch';


function Quotes() {

    //get the data & call it quote
    const { data: quote , isLoading } = useFetch('https://type.fit/api/quotes')
    
    const generateNewQuote = e =>{
        e.preventDefault()
        //logic
    }

    return (
        <div className="quotes">
            {isLoading ? (
                <p>Loading..</p>
            ):(
                <div>
                <h2>{`"${quote?.text}"`}</h2>
                <p>{`- ${quote?.author} `}</p>
               </div>
            )}
            <IconButton onClick={generateNewQuote}>
                <NavigateNextIcon />
            </IconButton>
        </div>
    )
}

export default Quotes
