import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDgWNoKZkahwo-6daXnLwLaCG9ppUKXWmQ",
    authDomain: "pokemonteam-51501.firebaseapp.com",
    projectId: "pokemonteam-51501",
    storageBucket: "pokemonteam-51501.firebasestorage.app",
    messagingSenderId: "616342467048",
    appId: "1:616342467048:web:dc2f42e88fea052229745d"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };
