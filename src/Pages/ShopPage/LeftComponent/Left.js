import { Typography } from '@mui/material';
import React from 'react';
import { Container, Wrapper, P } from './style';

const Data = [
    {
        name: 'Furniture',
        quantity: 8
    },
    {
        name: 'Coffee & Tables',
        quantity: 1
    },
    {
        name: 'Lighting',
        quantity: 3
    },
    {
        name: 'Decoretion',
        quantity: 5
    },
    {
        name: 'Electronics',
        quantity: 4
    },
    {
        name: 'Beds',
        quantity: 4
    },
    {
        name: 'ArmChair & Chaises',
        quantity: 5
    },
    {
        name: 'Sofa',
        quantity: 6
    }
];

function Left() {
    return (
        <Container>
            <Wrapper>
                <Typography underline variant="h5">
                    Categorys
                </Typography>
                {Data.map((data) => (
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}
                    >
                        <P>{data.name}</P>
                        <P>{data.quantity}</P>
                    </div>
                ))}
            </Wrapper>
            <Wrapper>
                <Typography underline variant="h5">
                    Categorys
                </Typography>
                {Data.map((data) => (
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}
                    >
                        <P>{data.name}</P>
                        <P>{data.quantity}</P>
                    </div>
                ))}
            </Wrapper>{' '}
            <Wrapper>
                <Typography underline variant="h5">
                    Categorys
                </Typography>
                {Data.map((data) => (
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}
                    >
                        <P>{data.name}</P>
                        <P>{data.quantity}</P>
                    </div>
                ))}
            </Wrapper>
        </Container>
    );
}

export default Left;
