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

export const ButtonModal = styled.button`
  padding: 3px 10px;
  border-radius: 50px;
  border: none;
  display: flex;
  flex-direction: row;
  color: ${({ theme }) => theme.COLORS.WHITE};
  &.add {
    background: ${({ theme }) => theme.COLORS.BUTTON_GREEN};
  }

  &.cancel {
    background: ${({ theme }) => theme.COLORS.RED};
  }
`;

export const DivButton = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
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
