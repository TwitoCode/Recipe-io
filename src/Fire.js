import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyDTKWDzpuZs0WU7a8waZ_dhkUfa7D4ceak',
	authDomain: 'twitocode-projects.firebaseapp.com',
	databaseURL: 'https://twitocode-projects.firebaseio.com',
	projectId: 'twitocode-projects',
	storageBucket: 'twitocode-projects.appspot.com',
	messagingSenderId: '93850862272',
	appId: '1:93850862272:web:2debe6ae35a75fd7026325',
	measurementId: 'G-B5PQ3GW4PB',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const db = firebase.firestore();
