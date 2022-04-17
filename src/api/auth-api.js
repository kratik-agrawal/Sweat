import firebase from 'firebase/app'
import 'firebase/auth'

export const logoutUser = () => {
  firebase.auth().signOut()
}

export const signUpUser = async ({ name, email, password }) => {
  try {
    const user = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        const uid = response.user.uid
        const path = '/users/' + uid;
        firebase.database().ref(path).set({
            //id: uid,
            email,
            name,
            number
        })
      })
    firebase.auth().currentUser.updateProfile({
      displayName: name,
    })
    return { user }
  } catch (error) {
    return {
      error: error.message,
    }
  }
}

export const loginUser = async ({ email, password }) => {
  try {
    const user = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
    return { user }
  } catch (error) {
    return {
      error: error.message,
    }
  }
}

export const sendEmailWithPassword = async (email) => {
  try {
    await firebase.auth().sendPasswordResetEmail(email)
    return {}
  } catch (error) {
    return {
      error: error.message,
    }
  }
}
