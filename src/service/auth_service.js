import firebase from 'firebase';
import firebaseApp from './firebase'
require('firebase/auth');
class AuthService{

    login(providerName){
        const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
        console.log(providerName);
        return firebaseApp.auth().signInWithPopup(authProvider);    
    }

    onAuthChange(onUserChanged) {
        firebase.auth().onAuthStateChanged(user=>{
            onUserChanged(user);
        })
    }

    logOut(){
        firebase.auth().signOut();
    }
}

export default AuthService;
