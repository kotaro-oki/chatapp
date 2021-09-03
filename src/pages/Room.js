import React, { useContext, useEffect, useState } from 'react'
import firebase from '../config/firebase'
import Message from '../Message'
import { nanoid } from 'nanoid'
import { AuthContext } from '../AuthService'

const Room = () => {
    const [messages, setMessages] = useState([])
    const [value, setValue] = useState('')
    
    //on---は指定のアクションがあるときに呼び出されるよ
    // この場合は、messagesコレクションが変更されるたびに以下の処理が行われるね
    // snapshotオブジェクトのdocsプロパティを参照
    useEffect(() => {
        firebase.firestore().collection('messages')
            .onSnapshot((snapshot) => {
                const messages = snapshot.docs.map(doc => {
                    return doc.data()
                })
                setMessages(messages)
                console.log(messages)
            })
    },[])

    const user = useContext(AuthContext)

    const handleSubmit = e => {
        e.preventDefault()
        firebase.firestore().collection('messages').add({
            content: value,
            user: user.displayName
        })
    }

    return (
        <>
            <h1>Room</h1>
            <ul>
                {
                    messages.map(message=>{
                        return<Message content={message.content} user={message.user} key={nanoid()}/>
                    })
                }
                <li>
                    sample user : sample message
                </li>
            </ul>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
                <button type="submit">送信</button>
            </form>
            <button onClick={() => firebase.auth().signOut()}>Logout</button>
        </>
    )
}

export default Room

