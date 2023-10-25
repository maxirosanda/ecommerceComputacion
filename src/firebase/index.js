
import { initializeApp, } from "firebase/app"
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyDeHx8LcAwTXskTiNzNEGcCGhh7evn1_4k",
  authDomain: "ecommercecomputacion.firebaseapp.com",
  projectId: "ecommercecomputacion",
  storageBucket: "ecommercecomputacion.appspot.com",
  messagingSenderId: "153109163105",
  appId: "1:153109163105:web:d3877e4686b6caf0aa0e20"
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default db