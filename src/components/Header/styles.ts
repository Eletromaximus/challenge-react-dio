import styled, { css } from 'styled-components'
import breakpointsMedia from '../../utils/breakpointsMedia'

export const HeaderStyle = styled.header`
  height: 64px;
  display: flex;
  align-items: center;
  background-color: #8DD7CF;
  padding: 10px 20px;
  flex-wrap: wrap;
  justify-content: space-between;

  height: 150px;
  flex-direction: column;
    


@media only screen and (min-width: 520px) {
  flex-direction: row;
  height: 64px;
}
`

export const LeftSide = styled.div`
 padding-right: 20px;
 display: flex;
 align-items: center;

 img {
   width: 32px;
   height: 32px;
 }

`

export const MiddleSide = styled.div`
  display: flex;
  justify-content: center;
  
  #search{
    border-radius: 4px;
    border: 1px solid gray;
    display: flex;
    background-color: #FFFFFF;
    
    ${breakpointsMedia({
      sm: css`
        width: auto;
        `,
      md: css`
        width: 500px
        `
      })
    }
    
    input {
      border-radius: 5px;
      border: 0;
      outline: 0;
      width: 95%;
    }
  }
`

export const RightSide = styled.div`
  .number-of-items  {
    border-radius: 50%;
    background-color: #FBE191;
    width: 17px;
    height: 17px;
    text-align: center;
    position: absolute;
    margin-left: 60px;
  }

  .number-of-wishs  {
    border-radius: 50%;
    background-color: #FBE191;
    width: 17px;
    height: 17px;
    text-align: center;
    position: absolute;
    margin-left: 20px;
  }
`
