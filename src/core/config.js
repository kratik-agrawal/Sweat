// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBKt5VHO5f3Ewvn1W8KNyzZsNYYeMsnFCc",
//   authDomain: "bump-63819.firebaseapp.com",
//   projectId: "bump-63819",
//   storageBucket: "bump-63819.appspot.com",
//   messagingSenderId: "503634399906",
//   appId: "1:503634399906:web:a7318e842e8babc225fdfb",
//   measurementId: "G-JXGN5ZZGCT"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

// Replace with your own firebase config!e
export const FIREBASE_CONFIG = {
  apiKey: "AIzaSyBKt5VHO5f3Ewvn1W8KNyzZsNYYeMsnFCc",
  authDomain: "bump-63819.firebaseapp.com",
  projectId: "bump-63819",
  storageBucket: "bump-63819.appspot.com",
  messagingSenderId: "503634399906",
  appId: "1:503634399906:web:a7318e842e8babc225fdfb",
  measurementId: "G-JXGN5ZZGCT"
}

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }

// export { firebase };

//const database = getDatabase(app);
// Replace with your own IDs! follow the guides here:
// https://docs.expo.io/versions/latest/sdk/google/#using-it-inside-of-the-expo-app
export const ANDROID_GOOGLE_CLIENT_ID =
  '878215484396-4pbcf3tghqe9sa0pvq3fifb5etnn4q6s.apps.googleusercontent.com'
export const IOS_GOOGLE_CLIENT_ID =
  '878215484396-5hiqfjetgvbdck03l0jepdgku6u64erm.apps.googleusercontent.com'

// Replace with your own facebook app ID.
// You can find more information how to generate one here:
// https://docs.expo.io/versions/latest/sdk/facebook/#registering-your-app-with-facebook
export const FACEBOOK_APP_ID = '820370405209413'
