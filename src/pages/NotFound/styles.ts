import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  padding: 120px;
  h1 {
    margin: 0;
    font-size: 40px;
    color: ${(props) => props.theme['gray-900']};
  }
  h2 {
    margin: 20px 0;
    font-size: 90px;
    color: ${(props) => props.theme['green-500']};
  }
  p {
    margin: 20px 0;
  }
  a {
    margin: 20px 0;
    font-weight: 500;
    text-transform: uppercase;
    border-radius: 5px;
    cursor: pointer;
    text-decoration-line: none;
    transition: transform 0.3s ease;
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
    padding: 10px 35px;
    font-size: 0.9rem;
    background-color: ${(props) => props.theme['gray-700']};
    color: #fff;
    border: none;
  }
`

export const Title = styled.h2``
