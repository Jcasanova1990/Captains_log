const React = require('react')

function Show(props){
    return(
        <div>
            <h1>{props.log.name}</h1>
            <a href='/logs'>Go back to Index Page</a>
            <p>
                The {props.log.title} is {props.log.entry} and 
                {props.fruit.shipIsBroken? 'It is not broken': 'It is broken'}
            </p>
              <form action={`/logs/${props.log._id}?_method=DELETE`} method="POST">
                <input type="submit" value={`Delete this ${props.log.name}`}/>
            </form>
            <div>
            <a href={`/logs/${props.log._id}/edit`}><button>{`Edit this ${props.log.title}`}</button><button>{`Edit this ${props.log.entry}`}</button></a>
            </div>
        </div>
    )
}

module.exports = Show