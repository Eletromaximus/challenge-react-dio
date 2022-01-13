import styled from 'styled-components'

export const CardStyle = styled.div`
  width: 302px;
  height: 455px;
  display: flex;
  flex-direction: column;
  margin: 30px auto;
  border: 2px solid gray;

  .movie-image {
    width: 300px;
    height: 300px;
    overflow: hidden;
  }
  `
export const LikeStyle = styled.div`
  position: absolute;
  margin-left: 265px;
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

  .infos-of-movie {
    display: flex;
    align-items: center;

    img {
      padding: 0 5px;
    }

    .genres-of-movie {
      padding: 0 0 0 10px;

      span {
        visibility: hidden;
        background-color: black;
        text-align: center;
        border-radius: 6px;
        color: #fff;
        padding: 5px;

        position: absolute;
        z-index: 1;
      }
    }

    .genres-of-movie:hover span {
      visibility: visible;
    }
  }

  button {
    width: 100%;
    padding: 10px;
    border-radius: 2px;
  }
`
