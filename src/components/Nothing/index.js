import React from 'react'

const Nothing = message => () => (
    <div className="card-panel teal">
        
            <div className="valign-wrapper">
            <div className="col s2 center-align">
                <i className="material-icons medium">warning</i>
            </div>
        <div className="col s10">{ message }</div>
        </div>
        
    </div>
)

export default Nothing