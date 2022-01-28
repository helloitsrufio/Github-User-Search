import React from 'react'

export default function SearchResult(props){
    const {user} = props
    return(
        <section user={props.user}>
            <img src={user.avatar_url} alt='Avatar'/>
            <h1>{user.url}</h1>
            <a href={user.login}>{user.login}</a>
            <section className='stars'>
                <img alt='Star icon'></img>
                <span>{user.stars}</span>
            </section>
            <p>{user.gists_url}</p>
        </section>
    )
}