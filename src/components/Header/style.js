import { Typography } from '@mui/material';
import styled from 'styled-components';

export const Container = styled.div`
    height: 70px;

    display: flex;
    align-items: center;
    color: white;
    top: 0;
    position: sticky;
    transition: all 1s ease;
    z-index: 3;
`;
export const Navs = styled(Typography)`
    display: flex;
    position: relative;
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
    position: relative;
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
// export const HoverBox = styled.div`
//     height: 400px;
//     width: 200px;
//     border: 1px solid white;
//     position: absolute;
//     margin-top: 450px;
//     margin-left: 180px;
//     opacity: 1;
// `;
