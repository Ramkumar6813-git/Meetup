import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 80vh;
  font-family: 'Roboto';
  @media (min-width: 768px) {
    padding-right: 30px;
  }
`
export const RegistrationDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-family: 'Roboto';
  @media (min-width: 768px) {
    flex-direction: row;
  }
`
export const RegistrationImage = styled.img`
  width: 250px;
  align-self: center;
  @media (min-width: 768px) {
    width: 300px;
  }
`
export const RegistrationForm = styled.form`
  display: flex;
  flex-direction: column;
  text-align: left;
  align-items: flex-start;
`
export const FormHeading = styled.h1`
  margin-bottom: 5px;
  color: #334155;
  font-size: 32px;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin: 10px 0;
`
export const FormLabel = styled.label`
  font-size: 12px;
  margin-bottom: 5px;
`
export const FormInput = styled.input`
  padding: 8px;
  width: 250px;
  outline: none;
`
export const DropdownOptions = styled.select`
  padding: 9px;
  width: 250px;
  outline: none;
  font-weight: 600;
  color: #334155;
`
export const DropdownOption = styled.option``
export const RegisterNowButton = styled.button`
  padding: 10px 20px;
  font-weight: 600;
  border: none;
  border-radius: 6px;
  background-color: #3b82f6;
  color: #ffffff;
  margin-top: 20px;
`

export const ErrorMsg = styled.p`
  margin-top: 4px;
  color: red;
  font-size: 13px;
  font-weight: 600;
`
