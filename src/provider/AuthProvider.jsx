import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setloading] = useState(true);

    const googleProvider = new GoogleAuthProvider();

    // create user
    const createUser = (email, password) => {
        setloading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    //update user 
    const updateUser = (name, image) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image
        });
    }
    // login user
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // google login
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    }

    //observer
   useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
        console.log(currentUser);
        setUser(currentUser);
        setloading(false);
    })
    return () => {
        unSubscribe();
    }
   }, [])

    // logout
    const logout = () => {
        return signOut(auth);
    }

    const authInfo = { user, createUser, loginUser, updateUser, loading, logout, googleLogin };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;