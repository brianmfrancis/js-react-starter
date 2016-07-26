import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBFwEx1lWsjBc5vaXMzWR3VCi6c-W7Dcb4',
  authDomain: 'notepad-2328e.firebaseapp.com',
  databaseURL: 'https://notepad-2328e.firebaseio.com',
  storageBucket: '',
};
firebase.initializeApp(config);

// Get a reference to the database service
const db = firebase.database();

export function fetchNotes(callback) {
  db.ref('notes').on('value', (snapshot) => {
    callback(snapshot.val());
  });
}

// help from https://www.firebase.com/docs/web/api/firebase/ for child psuh remove and update
export function addNote(note) {
  db.ref('notes').push(note);
}

export function deleteNote(id) {
  db.ref('notes').child(id).remove();
}

export function updateNote(id, fields) {
  db.ref('notes').child(id).update(fields);
}
