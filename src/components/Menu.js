import React from 'react'
import { StyledMenu } from './styles/Menu.styled'
const toppedmenu = ['Search', 'Updates', "All Teamspaces", "Settings",]
const spaces = ["General", "Meeting", "Docs", "Homework"]

function Menu() {
    return (
        <StyledMenu>
            <span>Username</span>

            <div className='column'>
                {toppedmenu.map((button) => (
                    <button key={button} >{button}</button>
                ))}
            </div>

            <h5>Favorites</h5>
            <button>My tasks</button>
            <h5>Spaces</h5>

            <div className='column'>
                {spaces.map((button) => (
                    <button key={button}>{button}</button>
                ))}
            </div>

        </StyledMenu>
    )
}

export default Menu