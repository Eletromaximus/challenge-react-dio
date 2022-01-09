import styled from 'styled-components'

export const HeaderStyle = styled.header`
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #8DD7CF;
  padding: 10px 20px;
`

export const LeftSide = styled.div`

`

export const MiddleSide = styled.div`
  display: flex;
  justify-content: center;

  #search{
    width: 500px;
    border-radius: 4px;
    border: 1px solid gray;
    display: flex;
    background-color: #FFFFFF;

    input {
      border-radius: 5px;
      border: 0;
      outline: 0;
      width: 95%;
    }
  }
`

export const RightSide = styled.div`
  display: inline-block;
`
