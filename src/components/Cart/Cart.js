import { Typography } from '@mui/material';
import React from 'react';
import {
    TopContainer,
    Container,
    TitleContainer,
    LeftContainer,
    RightContainer,
    Price,
    Quantity,
    Total,
    CheckOutConainer
} from './style';
function Cart() {
    return (
        <Container>
            <TopContainer>
                <Typography variant="h4">Shopping Cart</Typography>
                <Typography color="brown" variant="h6"></Typography>
            </TopContainer>
            <TitleContainer>
                <LeftContainer>LeftContainer</LeftContainer>
                <RightContainer>
                    <Price>Price</Price>
                    <Quantity>Quantity</Quantity>
                    <Total>Total</Total>
                </RightContainer>
            </TitleContainer>
            <CheckOutConainer>CheckOutConainer</CheckOutConainer>
        </Container>
    );
}

export default Cart;
