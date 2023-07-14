import React from 'react'

const RegisterContext = React.createContext({
  name: '',
  changeName: () => {},
  topic: '',
  changeTopic: () => {},
  registerError: false,
  updateRegisterError: () => {},
})

export default RegisterContext
