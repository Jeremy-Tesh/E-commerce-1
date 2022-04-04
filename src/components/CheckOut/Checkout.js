import { Link } from 'react-router-dom';
import { Button, TextField, Typography } from '@mui/material';
import React from 'react';
import { CartTitle } from '../Cart/style';
import {
    Container,
    TopContainer,
    Coupon,
    Form,
    CheckOutCard,
    Wrapper
} from './style';

function CheckOut() {
    return (
        <Container>
            <TopContainer>
                <Typography variant="h3">CheckOut</Typography>
                <Typography color="coral">Shop</Typography>
            </TopContainer>
            <Coupon
                placeholder="Have a coupon? Click here to enter your code
"
            />
            <Wrapper>
                <Form>
                    <div
                        style={{
                            width: '100%',
                            display: 'flex'
                        }}
                    >
                        <TextField fullWidth placeholder="name" />
                        <TextField fullWidth placeholder="lastname" />
                    </div>
                    <TextField placeholder="companyname" />
                    <TextField placeholder="Country" />
                    <TextField placeholder="Street/Adress" />
                    <div
                        style={{
                            width: '100%',
                            display: 'flex'
                        }}
                    >
                        <TextField fullWidth placeholder="name" />
                        <TextField fullWidth placeholder="lastname" />
                    </div>
                    <div
                        style={{
                            width: '100%',
                            display: 'flex'
                        }}
                    >
                        <TextField fullWidth placeholder="name" />
                        <TextField fullWidth placeholder="lastname" />
                    </div>
                </Form>
                <CheckOutCard>
                    <CartTitle>Your Order</CartTitle>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            padding: '20px 20px'
                        }}
                    >
                        <Typography>Product</Typography>
                        <Typography>Total</Typography>
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            padding: '10px 10px'
                        }}
                    >
                        <Typography>black Shoe</Typography>
                        <Typography>$300</Typography>
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            padding: '20px 20px'
                        }}
                    >
                        <Typography>Sub-Total</Typography>
                        <Typography>$300</Typography>
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            padding: '20px 20px'
                        }}
                    >
                        <Typography>Sipping</Typography>
                        <Typography>Free</Typography>
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            padding: '20px 20px'
                        }}
                    >
                        <Typography>Total</Typography>
                        <Typography>$300</Typography>
                    </div>
                    <Button>Place Order</Button>
                    <Button>
                        <Link to="/cart"> Go Back to Cart</Link>
                    </Button>
                </CheckOutCard>
            </Wrapper>
        </Container>
    );
}
export default CheckOut;
