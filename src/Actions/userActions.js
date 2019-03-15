export const setUser = (userEmail) => {
  return {
    type: 'SET_USER',
    userEmail: userEmail
  }
}

export const removeUser = () => {
  return {
    type: 'REMOVE_USER'
  }
}

export const handleUserSignIn = (email, password) => {
  return {
    type: 'HANDLE_USER_SIGN_IN',
    email: email,
    password: password
  }
}
