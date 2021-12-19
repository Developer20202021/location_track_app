import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase";


export const initialization = ()=>{
   initializeApp(firebaseConfig);
}
