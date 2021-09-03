import firebase from 'firebase/app'

import 'firebase/auth'
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyCsEjbnPbIfYLLUv1x4NwKjI4L26Hq1WDA",
    authDomain: "newchatapp-241b4.firebaseapp.com",
    projectId: "newchatapp-241b4",
    storageBucket: "newchatapp-241b4.appspot.com",
    messagingSenderId: "490578817571",
    appId: "1:490578817571:web:f05453becc35cf59e0f796"
}

firebase.initializeApp(firebaseConfig)
// 初期化が完了したFirebase Appをエクスポートしています。

export default firebase

