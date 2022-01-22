import styled from 'styled-components'

export const StyleForm = styled.form`
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
`
