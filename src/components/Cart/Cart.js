import { ArrowCircleRightSharp } from '@mui/icons-material';
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
    Wrapper,
    CheckOut,
    Title,
    Content,
    ProductImg,
    SubTitle,
    InputField,
    ArrowButton
} from './style';
function Cart() {
    return (
        <Container>
            <TopContainer>
                <Typography variant="h4">Shopping Cart</Typography>
                <Typography color="brown" variant="h6"></Typography>
            </TopContainer>
            <Wrapper>
                <TitleContainer>
                    <LeftContainer>
                        <Title>Products</Title>
                        <Content>
                            <ProductImg />
                            <Typography
                                style={{
                                    fontSize: '14px'
                                }}
                            >
                                Beige ring handle circle cross body bag
                            </Typography>
                        </Content>
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                width: '100%',
                                justifyContent: 'center',
                                marginLeft: '20px'
                            }}
                        >
                            <InputField placeholder="cupone code" />
                            <ArrowButton>
                                <ArrowCircleRightSharp />
                            </ArrowButton>
                        </div>
                    </LeftContainer>
                    <RightContainer>
                        <Price>
                            <Title>Price</Title>
                            <SubTitle>$55</SubTitle>
                        </Price>
                        <Quantity>
                            <Title>Quantity</Title>
                            <SubTitle>4</SubTitle>
                        </Quantity>
                        <Total>
                            <Title>Total</Title>

                            <SubTitle>$220</SubTitle>
                        </Total>
                    </RightContainer>
                </TitleContainer>
                <CheckOut />
            </Wrapper>
        </Container>
    );
}

export default Cart;
