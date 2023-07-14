import {
  FailureDiv,
  FailureImage,
  FailureHeading,
  FailureText,
} from './styledComponents'

const NotFound = () => (
  <FailureDiv>
    <FailureImage
      src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png"
      alt="not found"
    />
    <FailureHeading>Page Not Found</FailureHeading>
    <FailureText>
      We are sorry, the page you requested could not be found
    </FailureText>
  </FailureDiv>
)

export default NotFound
