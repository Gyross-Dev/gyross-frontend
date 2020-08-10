import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// const customer_config = {
//   apiKey: process.env.REACT_APP_apiKey,
//   authDomain: process.env.REACT_APP_authDomain,
//   databaseURL: process.env.REACT_APP_databaseURL,
//   projectId: process.env.REACT_APP_projectId,
//   storageBucket: process.env.REACT_APP_storageBucket,
//   messagingSenderId: process.env.REACT_APP_messagingSenderId,
//   appId: process.env.REACT_APP_appId,
//   measurementId: process.env.REACT_APP_measurementId,
// };
const vendor_Config = {
  apiKey: process.env.REACT_APP_vendor_apiKey,
  authDomain: process.env.REACT_APP_vendor_authDomain,
  databaseURL: process.env.REACT_APP_vendor_databaseURL,
  projectId: process.env.REACT_APP_vendor_projectId,
  storageBucket: process.env.REACT_APP_vendor_storageBucket,
  messagingSenderId: process.env.REACT_APP_vendor_messagingSenderId,
  appId: process.env.REACT_APP_vendor_appId,
  measurementId: process.env.REACT_APP_vendor_measurementId,
};

firebase.initializeApp(vendor_Config);
// firebase.analytics();

export const createVendorProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const vendorRef = firestore.doc(`vendors/${userAuth.uid}`);
  const snapShot = await vendorRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await vendorRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return vendorRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const googleProvider = new firebase.auth.GoogleAuthProvider();

export default firebase;
