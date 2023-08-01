import styled from "styled-components";
import backgroundImg from "../../assets/background.png";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 45px;
  height: 100vh;

  main {
    padding: 20px 30px;
    width: 80%;
    background-color: ${({ theme }) => theme.COLORS.WHITE_BACKGROUND};
    h2 {
      margin-top: 10px;
      margin-bottom: 10px;
    }
    .menu {
      display: flex;
      justify-content: space-between;

      > div {
        display: flex;
        gap: 10px;
      }
    }
    .musica {
      display: flex;
      justify-content: space-between;
      margin-top: 10px;

      > div {
        display: flex;
        gap: 10px;
      }

      .tempo {
        margin-left: auto;
      }
    }
    .album {
      > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }
    .novoAlbum {
      margin-top: 30px;
      border-top: 1px solid ${({ theme }) => theme.COLORS.GRAY};
      padding-top: 20px;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`;
