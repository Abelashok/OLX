import firebase  from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBPGcGmw-mz2E5Yqd2PnEg-HRUqQpfpiLE",
    authDomain: "olx-clone-66656.firebaseapp.com",
    projectId: "olx-clone-66656",
    storageBucket: "olx-clone-66656.appspot.com",
    messagingSenderId: "1051596695147",
    appId: "1:1051596695147:web:e0700fa8f7d5fba86f332e",
    measurementId: "G-YGYQ1QQ3R4"
  };

  export default firebase.initializeApp(firebaseConfig)