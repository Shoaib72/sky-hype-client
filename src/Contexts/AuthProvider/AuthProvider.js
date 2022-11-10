import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import app from '../../Firebase/firebase.config';



export const AuthContext = createContext();
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState("");
    const [name, setName] = useState("");
    const [loading, setLoading] = useState(true);


    const createUser = (email, password) => {
        setLoading(true)
        if (loading) {
            return <button className="btn loading">loading</button>;
        }
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const signIn = (email, password) => {
        setLoading(true)
        if (loading) {
            return <button className="btn loading">loading</button>;
        }
        return signInWithEmailAndPassword(auth, email, password)
    };
    const googleLogin = (provider) => {
        setLoading(true)
        if (loading) {
            return <button className="btn loading">loading</button>;
        }
        return signInWithPopup(auth, provider);
    };
    const logOut = () => {
        setLoading(true)
        if (loading) {
            return <button className="btn loading">loading</button>;
        }
        return signOut(auth);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser);
            setUser(currentUser);
            setLoading(false)
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
        logOut,
        setName,
        name
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;