import styled from "styled-components";




const getSide = ({side})=>{
  switch(side){
    case "top":
      return {
        top: "-80px",
      };
  }
}



const Container = styled.div`
padding: 20px;
position: relative;
display: flex;
gap: 10px;
transition: 1s all linear;

:hover img{
  transform: rotate(0deg);
}
:hover div{
  opacity: 1;
}
img{
  width: 20px;
  transition: 0.2s all linear;
  transform: rotate(180deg);
}
div{
  width: 100%;
  position: absolute;
  ${getSide};
  z-index: 999;
  border-radius: 6px;
  display: flex;
  opacity: 0;
  flex-direction: column;
  padding: 5px 8px;
  background-color: #fff;
  box-shadow: 0px 10px 18px 0px rgba(0,0,0,0.2);
  transition: 0.2s all linear;
  p{
    width: 100%;
    font-size: 14px;
    padding: 5px;
    cursor: pointer;
    border-radius: 4px;
    transition: 0.2s all linear;
    :hover{
      background-color: rgba(0,0,0,0.08);
    }
  }
}
`
export { Container };


