import {Component} from 'react'
import './App.css'

import {Switch, Route, Redirect} from 'react-router-dom'
import Home from './components/Home'
import NotFound from './components/NotFound'
import RegisterForm from './components/RegisterForm'

import RegisterContext from './context/RegisterContext'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

class App extends Component {
  state = {
    name: '',
    topic: topicsList[0].id,
    registerError: false,
  }

  changeName = updateName => {
    this.setState({
      name: updateName,
    })
  }

  changeTopic = updateTopic => {
    this.setState({
      topic: updateTopic,
    })
  }

  updateRegisterError = value => {
    this.setState({
      registerError: value,
    })
  }

  render() {
    const {name, topic, registerError} = this.state
    return (
      <RegisterContext.Provider
        value={{
          name,
          changeName: this.changeName,
          topic,
          changeTopic: this.changeTopic,
          updateRegisterError: this.updateRegisterError,
          registerError,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={RegisterForm} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </RegisterContext.Provider>
    )
  }
}

export default App
