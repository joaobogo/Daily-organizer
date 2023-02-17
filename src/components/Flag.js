import React from 'react'
import greenflag from '../assets/greenflag.jpg'
import redflag from '../assets/redflag.jpg'
import yellowflag from '../assets/yellowflag.jpg'

const flags = {
    'Low Priority': greenflag,
    'Medium Priority': yellowflag,
    'High Priority': redflag,
}

function Flag({priority}) {


    return (
        <img className='image' src={flags[priority]}></img>
    )
}

export default Flag