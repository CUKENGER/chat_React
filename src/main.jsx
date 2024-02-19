import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// import * as firebase from 'firebase/app';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { createContext } from 'react';

// import { getAnalytics } from "firebase/analytics";

// https://firebase.google.com/docs/web/setup#available-libraries

// Initialize Firebase
const app = initializeApp(
  {
    apiKey: "AIzaSyBcCS12KLqXd4cC1dGMWGFWh7yJbnJelno",
    authDomain: "chat-react-a313c.firebaseapp.com",
    projectId: "chat-react-a313c",
    storageBucket: "chat-react-a313c.appspot.com",
    messagingSenderId: "78832450638",
    appId: "1:78832450638:web:31ba92fe6b4ebfa013171f",
    measurementId: "G-SJBRJP1HYB"
  }
);
// const analytics = getAnalytics(app);

export const Context = createContext(null)

// const auth = firebase.auth()
// const firestore = firebase.firestore()

const auth = getAuth(app);
const firestore = getFirestore(app);


ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Context.Provider value={{
		auth,
		firestore,
		//  firebase
		}}
		>
			<App/>
		</Context.Provider>
	</React.StrictMode>
)
