import { createContext, useState,useEffect } from 'react'
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut,GoogleAuthProvider,signInWithPopup,sendPasswordResetEmail } from "firebase/auth"
//import {getDoc,doc,updateDoc, arrayUnion, getDocs, collection} from "firebase/firestore";
//import db from '../firebase'

export const AuthContext = createContext([])

const AuthProvider = ({children}) =>{
    const auth = getAuth()
    const [user,setUser] = useState({})

    const sigup = (email,password) => createUserWithEmailAndPassword(auth, email, password)
    const login = (email,password) => signInWithEmailAndPassword(auth,email,password)
    const logout = () => signOut(auth)
    const loginWithGoogle = () => signInWithPopup(auth, new GoogleAuthProvider())
    const resetPassword = async (email) => sendPasswordResetEmail(auth, email)
    
    useEffect(() => {
        const unsubuscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser)
        })
        return () => unsubuscribe()
      }, [])

    return  <AuthContext.Provider value={[user,sigup,login,logout,loginWithGoogle,resetPassword]}>
                {children}
            </AuthContext.Provider>

}
export default AuthProvider