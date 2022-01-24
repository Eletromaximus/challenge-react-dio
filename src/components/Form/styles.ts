import styled, { css } from 'styled-components'

export const StyleForm = styled.form`
  
  p {
    color: black;
  }

  input {
    height: 40px;
    border-radius: 5px;
  }

  .name,
  .email {
    width: 100%;
    padding: 0 10px;
  }

  .cpf {
    text-align: center;
    width: 100%;
    margin-right: 10px;
  }
  
  .cel {
    text-align: center;
    width: 100%;
  }
  
  .state,
  .cep {
    text-align: center;
    width: 30%;
  }

  .address {
    margin-left: 10px;
    width: 70%;
  }

  .city{
    width: 70%;
    margin-right: 10px;
  }

  @media only screen and (max-width: 480px) {
    .city,
    .address,
    .cep,
    .state {
      width: 100%;
      margin-top: 20px;
      margin-left: 0px;
    }

    .cel {
      margin-top: 20px;
    }
  }
`
interface IModal {
  isOpen: boolean
}

export const Modal = styled.div<IModal>`
  display: flex;
  flex-direction: column;
  position: absolute;
  justify-content: center;
  align-items: center;
  z-index: 2;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);

  ${({ isOpen }) => {
    if (isOpen) {
      return css`
        opacity: 1;
        pointer-events: all;
        overflow: hidden;
      `
    } else {
      return css`
        display: none;
        opacity: 0;
        pointer-events: none;
        overflow: hidden;
      `
    }
  }}
`
