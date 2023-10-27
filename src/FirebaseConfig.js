import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBoLEgxz-EUkRtDsQIuDjogYmE60jUcTw4",
    authDomain: "e-shop-mdarwaz.firebaseapp.com",
    projectId: "e-shop-mdarwaz",
    storageBucket: "e-shop-mdarwaz.appspot.com",
    messagingSenderId: "214198700301",
    appId: "1:214198700301:web:668ebbfce78978d3e00844",
    measurementId: "G-YTEN4VBZLT"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;