const React = require('react')

function New (props) {
    return(
        <div> 
            <h1> New Log Page</h1>
            <a href='/logs'>Return to Index Page</a>
            <form action={`/logs/${_id}?_method=PUT`} method="POST">
                title: <input type="text" title="title"/><br/>
                entry: <input type="text" entry="entry"/><br/>
                Is Ship Broken: {shipIsBroken? <input type="checkbox" name="shipIsBroken" defaultChecked />: <input type='checkbox' name="shipIsBroken"/>}<br/>
                <input type="submit" value="Update Log" />
            </form>
        </div>
    )
}

module.exports = New 