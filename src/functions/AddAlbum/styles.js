import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 3px 10px;
  border-radius: 50px;
  border: none;
  background: ${({ theme }) => theme.COLORS.BUTTON_GREEN};
  color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const InputModal = styled.input`
  border-radius: 5px;
  border-style: solid;
  padding: 5px;
`;

export const DivInput = styled.div`
  display: flex;
  gap: 5px;
  margin-bottom: 5px;
`;
