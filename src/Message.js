import React from 'react'

const Message = ({ content,user }) => {
    return(
        <>
            <li>
                {user}:{content}
            </li>
        </>
    )
}


export default Message