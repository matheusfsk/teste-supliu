import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
  border-radius: 10px;
  margin-top: 10px;

  > div {
    margin-top: 10px;
    display: flex;

    align-items: center;
    > input {
      height: 56px;
      width: 100%;

      padding: 12px;

      color: ${({ theme }) => theme.COLORS.BLACK_2};
      background: ${({ theme }) => theme.COLORS.WHITE_BACKGROUND};

      border-radius: 50px;
      border: hidden;
      margin-right: 20px;

      &::placeholder {
        color: ${({ theme }) => theme.COLORS.WHITE_2};
      }
    }
    > button {
      width: 250px;
      height: 50px;
      background: ${({ theme }) => theme.COLORS.BUTTON_BLUE};
      color: ${({ theme }) => theme.COLORS.WHITE};
      border-radius: 50px;
      border: hidden;
    }
  }
`;
