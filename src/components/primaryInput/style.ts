import { styled } from "styled-components";

export const Input = styled.input`
  width: 352px;
  border: none;
  border-radius: 8px;
  padding: 10px 16px;
  background: var(--bg-secondary);
  font-family: inherit;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: var(--text-dark);
`;

export const InputContainer = styled.div`
  position: relative;
  width: 352px;

  svg {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
  }
`;
