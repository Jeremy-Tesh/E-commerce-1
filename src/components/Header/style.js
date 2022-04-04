import { Typography } from '@mui/material';
import styled from 'styled-components';

export const Container = styled.div`
    height: 70px;
    border: 1px solid black;
    display: flex;
    align-items: center;
    background-color: #333;
    color: white;
    top: 0;
    position: sticky;
    transition: all 1s ease;
    z-index: 3;
`;
export const Navs = styled(Typography)`
    display: flex;
    align-items: center;
    font-weight: 200;
    cursor: pointer;
    padding: 10px 10px;
    transition: all 1s ease;
    &:hover {
        text-decoration: underline;
    }
`;
export const NavContainer = styled.div`
    display: flex;
    flex: 1.5;
    align-items: center;
`;
export const Logo = styled.div`
    display: flex;
    flex: 0.5;
    margin-left: 10px;
`;
export const SearchContainer = styled.div`
    display: flex;
    flex: 1;
    color: white;
    justify-content: space-around;
    align-items: center;
`;
