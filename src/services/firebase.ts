import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDoMwUYhFB8_bqhLDUQ6lBXich1Tbrp-Jk",
  authDomain: "gen-project-16a1f.firebaseapp.com",
  projectId: "gen-project-16a1f",
  storageBucket: "gen-project-16a1f.appspot.com",
  messagingSenderId: "208806574100",
  appId: "1:208806574100:web:9827700f54e229af620f01",
  measurementId: "G-R1BWTJN9DY",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)