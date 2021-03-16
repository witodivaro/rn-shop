import * as firebase from 'firebase';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBOMeye2YPhXnmfcNXnHPJWlJhYdU3W8Q4',
  authDomain: 'wd-rn-shop.firebaseapp.com',
  projectId: 'wd-rn-shop',
  storageBucket: 'wd-rn-shop.appspot.com',
  messagingSenderId: '528270997779',
  appId: '1:528270997779:web:1a10400773e843ee2342e6',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

firebase.firestore().settings({experimentalForceLongPolling: true});

export default firebase;
