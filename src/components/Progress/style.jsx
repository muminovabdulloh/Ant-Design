import styled from "styled-components";


export const BasicWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;

export const BtnsWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 10px;
`;

export const PlusBtn = styled.button`
  width: 80px;
  height: 25px;
  background-color: var(--primary);
  border: 0;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  transition: 0.3s all linear;
  :active {
    transform: scale(0.94);
  }
  :hover {
    opacity: 0.7;
  }
`;

export const MinusBtn = styled.button`
  width: 80px;
  height: 25px;
  background-color: var(--primary);
  border: 0;
  border-radius: 4px;
  margin-left: 20px;
  color: #fff;
  cursor: pointer;
  opacity: 1;
  transition: 0.3s all linear;
  :active {
    transform: scale(0.94);
  }
  :hover {
    opacity: 0.7;
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

