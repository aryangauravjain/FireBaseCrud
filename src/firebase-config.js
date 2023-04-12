import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBgqd7QzFb1-ZInf4EclRq76IfFOD1E4M4",
    authDomain: "fir-crud-5324e.firebaseapp.com",
    projectId: "fir-crud-5324e",
    storageBucket: "fir-crud-5324e.appspot.com",
    messagingSenderId: "454991758569",
    appId: "1:454991758569:web:b70523440fa2cb4a9f9c78",
    measurementId: "G-3P9V10FGLY"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);