import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, sendPasswordResetEmail, updateProfile, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../LoginPage/Firebase/firebase.init";

initializeAuthentication();
const googleProvider = new GoogleAuthProvider();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const [admin, setAdmin] = useState(false);

    const auth = getAuth();
    //Create New User
    const registerNewUser = (email, password, name, photo, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setError('');
                const newUser = { email, displayName: name, photoURL: photo };
                setUser(newUser);
                // save user to the database
                saveUser(email, name, 'POST');
                // update name 
                updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL: photo
                })
                    .then(() => {
                    })
                    .catch((error) => {
                    });
                history.replace('/');
            })
            .catch((error) => {
                setError(error.message)
            })
            .finally(() => {
                setIsLoading(false);
            });
    }
    //Login Email and password
    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setError('');
            })
            .catch((error) => {
                setError(error.message)
            })
            .finally(() => {
                setIsLoading(false);
            });
    }
    //Sign in using google
    const signInUsingGoogle = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                saveUser(user.email, user.displayName, 'PUT');
                setError('');
                const destination = location?.state?.from || '/';
                history.replace(destination);
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                setIsLoading(false)
            });
    }
    //save user
    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('https://aqueous-headland-20812.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })

    }

    //PassWord Reset
    const resetPassword = (email) => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert('Password Reset Email Sent To Your Mail')
            })
            .catch((error) => {
                setError(error.message)
            });
    }
    //logOut
    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {

        })
            .catch((error) => {
                setError(error.message)
            })
            .finally(() => {
                setIsLoading(false);
            });
    }
    // observe user 
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth]);

    //Set Admin
    useEffect(() => {
        fetch(`https://aqueous-headland-20812.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

    return { user, isLoading, error, admin, registerNewUser, loginUser, signInUsingGoogle, resetPassword, logOut }

}
export default useFirebase;