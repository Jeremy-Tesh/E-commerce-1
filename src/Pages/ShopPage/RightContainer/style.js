import { style } from '@mui/system';
import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto;
    border: 1px solid black;
    padding: 10px;
    height: 100%;
`;
export const Content = styled.div`
    border: 1px solid rgba(0, 0, 0, 0.8);
    margin: 5px 5px;
    text-align: center;
    background-color: 'red';
`;
export const ParentContainer = styled.div`
    flex: 2;
    height: 100vh;
`;
