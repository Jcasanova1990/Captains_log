const React = require('react')

function New (props) {
    return(
        <div> 
            <h1> New Log Page</h1>
            <a href='/logs'>Return to Index Page</a>
            <form action={`/logs`} method="POST">
                title: <input type="text" name="title"/><br/>
                entry: <input type="textarea" name="entry"/><br/>
                Is Ship Broken: <input type="checkbox" name="shipIsBroken" defaultChecked /><br/>
                <input type="submit" value="Create Log" />
            </form>
        </div>
    )
}

module.exports = New