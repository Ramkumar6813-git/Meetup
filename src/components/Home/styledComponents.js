import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-top: 40px;
  height: 80vh;
`

export const Heading = styled.h1`
  margin-bottom: 5px;
  color: #334155;
  font-size: 36px;
`
export const UserName = styled.h1`
  font-size: 36px;
  margin-bottom: 5px;
  color: #2563eb;
  @media (min-width: 768px) {
    font-size: 40px;
  }
`

export const Text = styled.p`
  color: #475569;
  font-weight: 600;
  font-size: 25px;
  margin-top: 5px;
`

export const WelcomeText = styled.p`
  font-size: 28px;
  font-weight: bold;
  color: #334155;
  margin-top: 5px;
`
export const Button = styled.button`
  padding: 10px 20px;
  font-size: 20px;
  font-weight: 600;
  border: none;
  border-radius: 6px;
  background-color: #3b82f6;
  color: #ffffff;
  margin-bottom: 30px;
`
export const DisplayImage = styled.img`
  width: 280px;
  @media (min-width: 768px) {
    width: 400px;
  }
`
