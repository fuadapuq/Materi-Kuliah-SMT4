import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDHJQ_fGu53e13UUJzS0kSFFgctTCP73Wk",//current_key
    authDomain: "restaurant-booking-eabba.firebaseapp.com",//project_id + ".firebaseapp.com"
    projectId: "restaurant-booking-eabba", //project_id
    storageBucket: "restaurant-booking-eabba.firebasestorage.appspot.com", //project_id + ".firebasestorage.googleapis.com"
    messagingSenderId: "726078189704", //project_number
    appId: "1:726078189704:android:b18c145c395940fd006f3d", //app_id
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { app, db };
