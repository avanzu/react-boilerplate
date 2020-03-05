import React from 'react'
import './PostImage.scss'
export default  ({ color, initial }) => (
   <div className="card-image" style={{backgroundColor: color}}>
            <svg viewBox="0 0 100 100">
            <text x="-25" y="50" textAnchor="left" alignmentBaseline="central" fontSize="350" fontFamily="cursive" fontWeight="bold" opacity="0.4" >
          {initial}
        </text>
        
      </svg>
    </div>
)

