import styled from 'styled-components';
import img from '../../../Assets/Images/slide-1.jpg';

export const Container = styled.div`
    background-image: url(${img});
    height: 90vh;

    display: flex;
    flex: 1;
    justify-content: center; /* align horizontal */
    align-items: center;
`;

export const BrandLogo = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-evenly;
`;
