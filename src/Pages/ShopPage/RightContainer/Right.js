import React from 'react';
import { Container, Content, ParentContainer } from './style';
const Data = [1, 3, 4, 4, 6, 5, 5, 6, 8, 9];

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
