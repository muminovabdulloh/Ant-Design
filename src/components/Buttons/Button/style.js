import styled from "styled-components";
const CheckPX = (btnPx) => {
  return `${parseFloat(btnPx)}px`;
};

// const getColor = ({ btnColor }) => {
//   //   console.log(btnColor);
//   switch (btnColor) {
//     case "primary":
//       return {
//         background: "var(--primary)",
//         color: "var(--btnColor)",
//       };
//     case "danger":
//       return {
//         background: "var(--danger)",
//         color: "var(--btnColor)",
//       };
//     case "info":
//       return {
//         background: "var(--info)",
//         color: "var(--btnColor)",
//       };
//       case "warning":
//       return {
//         background: "var(--warning)",
//         color: "var(--btnColor)",
//       };
//     case "secondary":
//       return {
//         background: "var(--secondary)",
//         color: "var(--btnColor)",
//       };
//     case "default":
//       return {
//         border: "1px solid black",
//         background: "transparent",
//       };
//     case "text":
//       return {
//         background: "transparent",
//         border: "none",
//       };
//     case "link":
//       return {
//         background: "transparent",
//         color: "rgb(24, 144, 255)",
//         border: "none",
//       };

//     default:
//       return {
//         background: "transparent",
//       };
//   }
// };

const getColor = ({btnColor})=>{
  switch(btnColor){
    case "primary":
      return "var(--primary)";
    case "danger":
      return "var(--danger)";
      case "secondary":
      return "var(--secondary)";
      case "info":
      return "var(--info)";
      case "warning":
      return "var(--warning)";
      case "success":
      return "var(--success)";
      case "dashed":
      return "#000";
      default:
        return "transparent";
  }
}

const getType = ({ btnType }) => {
  switch (btnType) {
    case "block":
      return {
        width: "100%",
      };
    case "normal":
      return {
        width: "120px",
      };
      case "icon":
        return {
          width: "120px",
          display: "flex",
          "align-items": "center",
          "justify-content": "center",
          gap: "5px",
        }
        case "square-icon":
        return {
          width: "40px",
          height: "40px",
          display: "flex",
          "align-items": "center",
          "justify-content": "center",
        }
      default:
        return {
          width: "120px",
        }
  }
};


const Color = ({btnColor})=>{
  switch(btnColor){
    case "link":
      return "rgb(24, 144, 255)";
      case "text":
        return "#000"
      default:
        return "#fff";
  }
}

const getBorder = ({btnType})=>{
  switch(btnType){
    case "dashed":
      return "1px dashed"
      default : 
      return "1px solid";
  }
}


const Container = styled.button`
  ${getType};
  height: ${({ height }) => (height ? CheckPX(height) : "36px")};
  border: ${getBorder};
  border-radius: ${({borderRadius})=>(parseFloat(borderRadius))};
  border-color: ${getColor};
  background: ${({btnType})=>(btnType==="dashed"? "transparent":getColor)};
  
  border-radius: ${({ borderRadius }) =>
    borderRadius ? CheckPX(borderRadius) : "5px"};
  transition: 0.1s all linear;
  color: ${({btnType})=>(btnType==="dashed"?getColor:Color)};
  cursor: pointer;
  :active {
    transform: scale(0.95);
    outline: none;
  }
  :hover {
    background: ${({ btnColor }) => btnColor === "text" && "grey"};
    opacity: 0.7;
  }
  user-select: none;
  img{
    width: 20px;
    color: #fff;
    filter: grayscale(0) invert(1);
  }
.spinner{
  width: 20px;
  height: 20px;
  border: 1px solid white;
  border-left-color: var(--primary);
  background-color: transparent;
  border-radius: 50%;
}
:focus .spinner{
  animation: rotateSpinner 0.7s linear infinite;
}
.infinite{
  animation: rotateSpinner 0.7s linear infinite;

}


@keyframes rotateSpinner {
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
}
`;













export { Container };


