import React from 'react'

const ErrorMessage = ({ error }) => (
    <div className="card-panel red">
        <div className="valign-wrapper">
            <div className="col s2 center-align">
                <i className="material-icons medium">error</i>
            </div>
            <div className="col s10">{error}</div>
        </div>

    </div>
)

export default ErrorMessage