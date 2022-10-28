import firebase from 'firebase';
import firebaseApp from './firebase'
require('firebase/auth');
class AuthService{

    login(providerName){
        const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
        console.log(providerName);
        return firebaseApp.auth().signInWithPopup(authProvider);    
    }
}

export default AuthService;
