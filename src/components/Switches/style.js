import styled from "styled-components";

export const DisabledBtn = styled.button`
  padding: 5px 10px;
  font-size: 16px;
  color: #fff;
  background-color: var(--primary);
  user-select: none;
  cursor: pointer;
  border: 0;
  border-radius: 4px;
  transition: 0.2s all linear;
  :hover{
    opacity: 0.8;
  }
  :active {
    transform: scale(0.94);
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  gap: 25px;
`;

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  width: 50%;
  gap: 25px;
`;
