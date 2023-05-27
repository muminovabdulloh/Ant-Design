import styled from "styled-components";




const getSize = ({inputSize})=>{
  switch(inputSize){
    case "large":
      return{
        height: "38px",
        "font-size": "18px",
      };
      case "medium":
      return{
        height: "32px",
        "font-size": "16px",
      };
      case "small":
      return{
        height: "24px",
        "font-size": "14px",
      };
  }  
}

const getColor = ({inputColor})=>{
  switch(inputColor){
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
      default: 
      return "var(--borderColor)";
  }
}

const Label = styled.label`
display: flex;
width: 100%;
align-items: center;
border: var(--border);
padding: 4px 11px;
border-radius: 6px;
img{
  width: 15px;
}

input{
  border: none;
  :focus{
    outline: none;
  }
}
`

const Container = styled.input`
${getSize}
width: 100%;
border: 1px solid black;
padding: 4px 11px;
/* font-size: 16px; */
border:1px solid ${getColor};
::placeholder{
  color: ${({inputColor})=>(inputColor && getColor)};
}
border-radius: 6px;
transition: 0.2s all;
:hover{
  outline: none;
  border-color: ${getColor};

}
:focus{
  border-color: ${getColor};
  outline: 1px solid ${getColor};
}
:disabled{
  background-color: rgba(0,0,0,0.09);
}
`;



export { Container, Label };


