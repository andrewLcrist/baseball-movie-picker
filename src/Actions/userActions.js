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
