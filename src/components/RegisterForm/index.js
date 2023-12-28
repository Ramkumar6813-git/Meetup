import RegisterContext from '../../context/RegisterContext'

import Header from '../Header'

import {
  BgContainer,
  RegistrationDiv,
  RegistrationImage,
  RegistrationForm,
  FormHeading,
  InputContainer,
  DropdownOptions,
  FormLabel,
  FormInput,
  DropdownOption,
  RegisterNowButton,
  ErrorMsg,
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

const RegisterForm = props => (
  <RegisterContext.Consumer>
    {value => {
      const {
        name,
        changeName,
        topic,
        changeTopic,
        updateRegisterError,
        registerError,
      } = value

      const navigationRoute = () => {
        const {history} = props
        history.replace('/')
      }

      const onChangeName = event => {
        changeName(event.target.value)
      }
      const onChangeTopic = event => {
        changeTopic(event.target.value)
      }
      const onSubmitForm = event => {
        event.preventDefault()
        if (name === '') {
          updateRegisterError(true)
        } else {
          navigationRoute()
        }
      }
      return (
        <>
          <Header />
          <BgContainer>
            <RegistrationDiv>
              <RegistrationImage
                src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                alt="website register"
              />
              <RegistrationForm onSubmit={onSubmitForm}>
                <FormHeading>Let us join</FormHeading>
                <InputContainer>
                  <FormLabel htmlFor="name">NAME</FormLabel>
                  <FormInput
                    type="text"
                    id="name"
                    placeholder="Your name"
                    value={name}
                    onChange={onChangeName}
                  />
                </InputContainer>
                <InputContainer>
                  <FormLabel htmlFor="topic">TOPICS</FormLabel>
                  <DropdownOptions
                    id="topic"
                    onChange={onChangeTopic}
                    value={topic}
                  >
                    {topicsList.map(eachTopic => (
                      <DropdownOption key={eachTopic.id} value={eachTopic.id}>
                        {eachTopic.displayText}
                      </DropdownOption>
                    ))}
                  </DropdownOptions>
                </InputContainer>
                <RegisterNowButton type="submit">
                  Register Now
                </RegisterNowButton>
                {registerError ? (
                  <ErrorMsg>Please enter your name</ErrorMsg>
                ) : null}
              </RegistrationForm>
            </RegistrationDiv>
          </BgContainer>
        </>
      )
    }}
  </RegisterContext.Consumer>
)

export default RegisterForm
