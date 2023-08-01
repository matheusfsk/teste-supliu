import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  background-color: ${({ theme }) => theme.COLORS.WHITE_BACKGROUND};
`;
