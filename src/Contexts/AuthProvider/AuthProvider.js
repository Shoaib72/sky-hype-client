import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import app from '../../Firebase/firebase.config';



export const AuthContext = createContext();
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);


    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    };
    const googleLogin = (provider) => {
        return signInWithPopup(auth, provider);
    };
    const logOut = () => {
        return signOut(auth);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser);
            setUser(currentUser);
        });
        return () => {
            return unsubscribe();
        }
    }, [])
    const authInfo = {
        user,
        setUser,
        loading,
        setLoading,
        createUser,
        error,
        setError,
        signIn,
        googleLogin,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;