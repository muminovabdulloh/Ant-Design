import styled from "styled-components";

const getColor = ({ type }) => {
  switch (type) {
    case "success":
      return {
        backgroundColor: "var(--success)",
        border: "1px solid #b7eb8fff",
        color: "#fff",
      };
    case "warning":
      return {
        backgroundColor: "var(--warning)",
        border: "1px solid #FFE58FFF",
        color: "#fff",
      };
    case "danger":
      return {
        backgroundColor: "var(--danger)",
        border: "1px solid #FFCCC7FF",
        color: "#fff",
      };
    case "primary":
      return {
        backgroundColor: "var(--primary)",
        border: "1px solid #91D5FFFF",
        color: "#fff",
      };

    default: {
    }
  }
};

export const PlainAlert = styled.div`
  ${getColor}
  padding: 10px;
  border-radius: 4px;
  width: 100%;
`;

export const AlertInnerTitle = styled.div`
  font-size: 16px;
`;

export const AlertDesc = styled.div`
  margin-top: ${({ desc }) => (desc ? "10px" : null)};
  font-size: 14px;
`;

export const AlertInner = styled.div`
  display: flex;
`;

export const AlertInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 15px;
`;

export const AlertIcons = styled.img`
  width: 20px;
`;

export const AlertBtnWrapper = styled.div`
  margin-left: auto;
`;

export const AlertBtnCloseImg = styled.img`
  width: 100%;
`;

export const CloseBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  border: none;
  background: none;
  transition: opacity 0.3s ease;
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
  :active {
    transform: translateY(2px);
  }
`;

export const CloseBtnText = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  border: none;
  background: none;
  transition: opacity 0.3s ease;
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
  :active {
    transform: translateY(2px);
  }
`;
