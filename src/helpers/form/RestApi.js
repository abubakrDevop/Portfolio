const firebaseConfig = {
  apiKey: "AIzaSyDV5DaJ6C77WV10EcoiYTm3MF00-xmiZpw",
  authDomain: "kendal-88b09.firebaseapp.com",
  databaseURL: "https://kendal-88b09-default-rtdb.firebaseio.com",
  projectId: "kendal-88b09",
  storageBucket: "kendal-88b09.appspot.com",
  messagingSenderId: "862823593582",
  appId: "1:862823593582:web:e31323381ccb741f9bd87f",
  measurementId: "G-3SWBMYCJFC"
};

export const signIn = `
  https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${firebaseConfig.apiKey}
`

export const signUp = `
  https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${firebaseConfig.apiKey}
`

export const usersDB = `
  https://todo-96e28-default-rtdb.asia-southeast1.firebasedatabase.app/users.json
`
