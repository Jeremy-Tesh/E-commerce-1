import React from 'react';
import { Container, Content, ParentContainer } from './style';
const Data = [
    { id: 1, name: 't-shirt', imgUrl: '' },
    { id: 2, name: 'jacket', imgUrl: '' },
    { id: 3, name: 'Hoodie', imgUrl: '' },
    { id: 4, name: 'sweater', imgUrl: '' },
    { id: 5, name: 'dress', imgUrl: '' },
    { id: 6, name: 'mini-Skirt', imgUrl: '' },
    { id: 7, name: 'children ', imgUrl: '' },
    { id: 8, name: '', imgUrl: '' },
    { id: 9, name: '', imgUrl: '' },
    { id: 10, name: '', imgUrl: '' },
    { id: 11, name: '', imgUrl: '' },
    { id: 12, name: '', imgUrl: '' }
];

function Right() {
    return (
        <ParentContainer>
            <Container>
                {Data.map((data) => (
                    <Content>
                        <p>{data}</p>
                    </Content>
                ))}
            </Container>
        </ParentContainer>
    );
}

export default Right;
