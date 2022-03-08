import styled from 'styled-components';

export const Container = styled.div`
width:100%,
height:70vh,
display:flex;
flex-direction:column;


`;
export const CardContainer = styled.div`
    display: flex;
    height: 70vh;
    border: 2px, red;
    justify-content: center;
`;
export const Card = styled.div`
    background: url(${(props) => props.bg});
    display: flex;
    justify-content: space-between;
    width: 15%;
    height: 70%;
    margin: 10px;
`;
export const Stock = styled.div`
    margin: 20px;
`;
export const Icons = styled.div``;
