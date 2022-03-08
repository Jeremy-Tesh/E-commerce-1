import React from 'react';
import { Container, CardContainer, Card, Stock, Icons } from './style';
import product1 from '../../../Assets/Images/product1.jpg';
import product2 from '../../../Assets/Images/product2.jpg';
import product3 from '../../../Assets/Images/product3.jpg';
import product4 from '../../../Assets/Images/product4.jpg';
import product5 from '../../../Assets/Images/product5.jpg';
const cards = [
    {
        image: product1,
        catagory: 'Boots,Shoes,Women',
        type: 'Scandals Cool',
        now: '$337.00',
        was: '$449.00'
    },
    {
        image: product2,
        catagory: 'Boots,Shoes,Women',
        type: 'Scandals Cool',
        now: '$337.00',
        was: '$449.00'
    },
    {
        image: product3,
        catagory: 'Boots,Shoes,Women',
        type: 'Scandals Cool',
        now: '$337.00',
        was: '$449.00'
    },
    {
        image: product4,
        catagory: 'Boots,Shoes,Women',
        type: 'Scandals Cool',
        now: '$337.00',
        was: '$449.00'
    },
    {
        image: product5,
        catagory: 'Boots,Shoes,Women',
        type: 'Scandals Cool',
        now: '$337.00',
        was: '$449.00'
    }
];

function Section3() {
    return (
        <>
            <Container>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}
                >
                    <h1>Trendy Products</h1>
                    <ul style={{ display: 'flex' }}>
                        <li>ALL</li>
                        <li>WOMEN</li>
                        <li>MEN</li>
                        <li>ACCESSORIES</li>
                    </ul>
                </div>
                <CardContainer>
                    {cards.map((card) => (
                        <Card bg={card.image}>
                            <Stock>
                                <div
                                    style={{
                                        backgroundColor: '#a6c76c',
                                        color: 'white',
                                        textAlign: 'center',
                                        width: '50px',
                                        height: '20px',
                                        fontSize: '15px'
                                    }}
                                >
                                    <p>New</p>
                                </div>
                                <div
                                    style={{
                                        backgroundColor: '#ef837b',
                                        color: 'white',
                                        textAlign: 'center',
                                        width: '50px',
                                        height: '20px',
                                        fontSize: '15px'
                                    }}
                                >
                                    <p>Sale</p>
                                </div>
                            </Stock>
                            <Icons>
                                <div>{/* <h1>fav</h1> */}</div>
                            </Icons>
                        </Card>
                    ))}
                </CardContainer>
            </Container>
        </>
    );
}

export default Section3;
