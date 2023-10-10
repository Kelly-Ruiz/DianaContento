import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import{getAuth} from 'firebase/auth';
import{
    getStorage,
    ref,
    uploadBytes,
    getDownloadURL,
    getBytes
} from 'firebase/storage';
import{
    getFirestore,
    collection,
    addDoc,
    getDocs,
    doc,
    getDoc,
    query,
    where,
    setDoc,
    deleteDoc
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
  measurementId: process.env.REACT_APP_MEASUREMENTID
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

//VERIFICAR QUE EL USUARIO EXISTA
export async function userExist(uid){
/* FUNCIONAMIENTO A TRAVES DE REFERENCIAS
1 DONDE SE QUIERE BUSCAR
2 FUNCION QUE LLAMA A LA REFERECIA
*/

const docRef = doc(db,'users',uid)
const res = await getDoc(docRef);
console.log("res" , res)
return res.exists()
}