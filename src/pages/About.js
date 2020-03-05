import React, { useEffect } from 'react'

const About = () => {

    useEffect(() => { document.title = 'About' })

    return (
        <div className="container">
            <div className="row">
                <div className="col s12">
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                            <span className="card-title">About</span>
                            <p>Sed libero ipsum, auctor ac volutpat ac, adipiscing a enim. Nulla convallis quam eget tortor dictum lobortis. Aenean tincidunt arcu id lectus facilisis imperdiet. Curabitur in orci nisl. Nullam vitae arcu in tellus malesuada sollicitudin ut in sem. Ut eu nunc lacus, sit amet venenatis mauris. Donec dui neque, cursus sed molestie sit amet, tempor quis nibh. Proin nec ligula non lacus fermentum tincidunt. Nam tempus lectus ut dolor imperdiet quis commodo odio porttitor. Fusce blandit placerat posuere. Pellentesque risus leo, tempor sit amet consequat tempus, dictum vel magna. Nulla dolor turpis, dignissim a sodales quis, molestie molestie magna. Vivamus imperdiet vestibulum tellus, quis rutrum magna eleifend quis. Pellentesque convallis metus nisl. Sed eu dolor massa, sit amet luctus nulla. Mauris sit amet diam urna, eget volutpat nunc. </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
