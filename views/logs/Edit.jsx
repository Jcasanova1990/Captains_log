const React = require('react')

function Edit (props) {
    const {_id, title, entry, shipIsBroken} = props.log
    return(
        <div>
            <h1>{title}{entry}Edit Page</h1>
            <a href='/logs'>Go back to Index Page</a>
            <form action={`/logs/${_id}?_method=PUT`} method="POST">
                title: <input type="text" title="title"/><br/>
                entry: <input type="textarea" entry="entry"/><br/>
                Is Ship Is Broken: {shipIsBroken? <input type="checkbox" name="shipIsBroken" defaultChecked />: <input type='checkbox' name="shipIsBroken"/>}<br/>
                <input type="submit" value="Update Log" />
            </form>
        </div>
    )
}

module.exports = Edit