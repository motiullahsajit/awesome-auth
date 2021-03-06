import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from './firebase.config';

export const initializeLoginFramework = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    } else {
        firebase.app();
    }
}

export const googleSingIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            const { displayName, email, photoURL } = result.user;
            const singnedInUser = { name: displayName, email: email, image: photoURL }
            console.log(singnedInUser)
            return (singnedInUser)

        }).catch((error) => {
            const errorMessage = error.message;
            return (errorMessage)
        });
}
export const facebookSingIn = () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    return firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            const { displayName, email, photoURL } = result.user;
            const singnedInUser = { name: displayName, email: email, image: photoURL }
            return (singnedInUser)

        }).catch((error) => {
            const errorMessage = error.message;
            return (errorMessage)
        });
}
export const gitHubSingIn = () => {
    const provider = new firebase.auth.GithubAuthProvider();
    return firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            const { displayName, email, photoURL } = result.user;
            const singnedInUser = { name: displayName, email: email, image: photoURL }
            return (singnedInUser)

        }).catch((error) => {
            const errorMessage = error.message;
            return (errorMessage)
        });
}

export const createUserWithEmailAndPassword = (email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((res) => {
            const user = res.user;
            return user;
        })
        .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
            return errorMessage;
        });
}

export const signInWithEmailAndPassword = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
        .then((res) => {
            const user = res.user;
            return user
        })
        .catch((error) => {
            const errorMessage = error.message;
            return (errorMessage)
        });
}

export const handleSignOut = () => {
    return firebase.auth().signOut()
        .then(result => {
            const singnedOutUser = {}
            return singnedOutUser;
        }).catch((error) => {
            const errorMessage = error.message;
            return (errorMessage)
        });
}

