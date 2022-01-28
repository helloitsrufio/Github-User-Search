import React,{ useEffect, useCallback, useState} from 'react'
import SearchResult from '../components/SearchResult'
import { useSearchParams } from 'react-router-dom';

export default function SearchResults(props){
    let [query] = useSearchParams();
    console.log(query.getAll('q'))
    let newQuery = query.getAll('q')
    const {user} = props
    const getData = useCallback(
        fetch(`https://api.github.com/search/users/${newQuery}`)
        .then((res)=>{
            setUsers(res.data)
            console.log(res.data)
        })  
        .catch((error) => {
            console.error('Error fetching data: ', error)
        })
    )

    useEffect(()=> 
    {}, [getData])

// for the h3 below, doesn't recognize 'user' despite destructuring. Maybe because it's out of the 'items' object in the api.
    const [users, setUsers] = useState([])
    return (
        <section user= {props.user}>

            <h3>Total count: {user.total_count}</h3>
            <div>
                {users.map(user=> <SearchResult user = {user} />)}
            </div>
        </section>
    )
}