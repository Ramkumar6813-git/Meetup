import {Link} from 'react-router-dom'
import RegisterContext from '../../context/RegisterContext'
import Header from '../Header'

import {
  BgContainer,
  Heading,
  UserName,
  Text,
  WelcomeText,
  Button,
  DisplayImage,
} from './styledComponents'

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

const Home = () => (
  <RegisterContext.Consumer>
    {value => {
      const {name, topic} = value
      const nameValueEmpty = name === ''
      const getTopicText = topicsList.filter(each => each.id === topic)
      return (
        <>
          <Header />
          <BgContainer>
            {nameValueEmpty ? (
              <Heading>Welcome to Meetup</Heading>
            ) : (
              <UserName>Hello {name}</UserName>
            )}
            {nameValueEmpty ? (
              <Text>Please register for the topic</Text>
            ) : (
              <WelcomeText>
                Welcome to {getTopicText[0].displayText}
              </WelcomeText>
            )}
            {nameValueEmpty ? (
              <Link to="/register">
                <Button type="button">Register</Button>
              </Link>
            ) : null}

            <DisplayImage
              src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
              alt="meetup"
            />
          </BgContainer>
        </>
      )
    }}
  </RegisterContext.Consumer>
)

export default Home
