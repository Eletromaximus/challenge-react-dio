import styled from 'styled-components'

export const CardStyle = styled.div`
  width: 204px;
  height: 350px;
  display: flex;
  flex-direction: column;

  border: 2px solid gray;

  .movie-image {
    width: 200px;
    height: 200px;
  }
`
export const LikeStyle = styled.div`
  position: absolute;
  margin-left: 155px;
  z-index: 1;
`
export const ContentStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 150px;
  width: auto;
  margin-top: 5px;

  justify-content: space-between;

  .infos {
    span {
      padding: 0 5px;
    }
  }

  /* img {
    padding: 0 6px;
  } */

  button {
    width: 100%;
    padding: 10px;
    border-radius: 2px;
  }
`
