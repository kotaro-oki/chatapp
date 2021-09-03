import React, { useEffect, useState } from 'react'
import firebase from './config/firebase'

const AuthContext = React.createContext()

//　引数childrenは見えないだけで毎回コンポーネントに渡されるオブジェクトの中のプロパティの１つ
const AuthProvider = ({children}) => {
    // ここでのuserはfirebaseから取得した様々なそのユーザの情報のオブジェクト
    const [user,setUser] = useState(null)
    // 引数に渡した関数(オブザーバー)がユーザーのログイン時、ログアウト時に実行されます。
    // ユーザーに関するオブジェクトが引数としてオブザーバーに渡されます
    // このオブジェクトに、ユーザーのメールアドレス等、各情報が入っているため、今回はそのままstateuserに保持させています。
    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            setUser(user)
        })
    },[])

    return(
        <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider>
    )

}
export {
    AuthContext,
    AuthProvider
}