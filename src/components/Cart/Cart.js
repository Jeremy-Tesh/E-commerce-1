import { ArrowCircleRightSharp } from '@mui/icons-material';
import { Button, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
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
    ArrowButton,
    FirstRow,
    SecondRow,
    CartTitle,
    ThirdRow,
    CartButton
} from './style';
let Data = [
    {
        name: 'freeShipping',
        price: '$0'
    },
    {
        name: 'Standard',
        price: '$10'
    },
    {
        name: 'Express',
        price: '$20'
    }
];
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
                            <SubTitle>$3000</SubTitle>
                        </Total>
                    </RightContainer>
                </TitleContainer>
                <CheckOut>
                    <CartTitle>Cart Total</CartTitle>
                    <FirstRow>
                        <Typography>Sub Total</Typography>
                        <Typography>$385.00</Typography>
                    </FirstRow>
                    {Data.map((data) => (
                        <SecondRow>
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center'
                                }}
                            >
                                <input type="radio" />
                                <p>{data.name}</p>
                            </div>
                            <p>{data.price}</p>
                        </SecondRow>
                    ))}
                    <Typography>Estimate for your contry</Typography>
                    <TextField placeholder="Change Address" />
                    <ThirdRow>
                        <Typography>Total</Typography>
                        <Typography>$405.00</Typography>
                    </ThirdRow>

                    <Button>
                        <Link to="/checkout">Procced to CheckOut </Link>
                    </Button>

                    <Button>
                        <Link to="/"> Continue Shopping</Link>
                    </Button>
                </CheckOut>
                {/* <CartButton color={'red'}>hello</CartButton> */}
            </Wrapper>
        </Container>
    );
}

export default Cart;
