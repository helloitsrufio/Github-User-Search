import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'

export default function Search(){
    const [myState, setMyState] = useState('')
    const queryString = 'q=' + encodeURIComponent((`${myState}in:name`) || (`${myState}in:login`) || (`user:${myState}`))
    let navigate = useNavigate()
    return (
        <form onSubmit= 
         {(e)=>{
            e.preventDefault()
            navigate(`/searchResultsPage?${queryString}`)
        }}>
            <input type='text' placeholder='Search Github' value={myState} onChange={e => setMyState(e.target.value)}/>
            <button type='submit' >Search</button>
        </form> 
    )
}


