const React = require('react')

function Show(props){
    return(
        <div>
            <h1>{props.log.title}</h1>
            <a href='/logs'>Go back to Index Page</a>
            <p>
                The {props.log.title} is {props.log.entry} and 
                {props.log.shipIsBroken? 'It is broken': 'It is not broken'}
            </p>
              <form action={`/logs/${props.log._id}?_method=DELETE`} method="POST">
                <input type="submit" value={`Delete this ${props.log.title}`}/>
            </form>
            <div>
            <a href={`/logs/${props.log._id}/edit`}><button>{`Edit this ${props.log.title}`}</button><button>{`Edit this ${props.log.entry}`}</button></a>
            </div>
        </div>
    )
}

module.exports = Show