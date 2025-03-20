// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Importa getAuth para la autenticación

const firebaseConfig = {
  apiKey: "AIzaSyDvxt-SlR4cBXDvIR9ZBD8HaobMdMHDjPI",
  authDomain: "deitana-proyecto-pass.firebaseapp.com",
  projectId: "deitana-proyecto-pass",
  storageBucket: "deitana-proyecto-pass.appspot.com",
  messagingSenderId: "642096361813",
  appId: "1:642096361813:web:09d15629504014181b3fdc",
  measurementId: "G-JET3QFP0RN"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Obtén la instancia de autenticación
const auth = getAuth(app);

// Exporta auth para usarlo en otros archivos
export { auth };