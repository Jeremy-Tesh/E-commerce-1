import React from 'react';

import Section1 from './Section1/Section1';
import Section2 from './Section2/Section2';
import Section3 from './Section3/Section3';
import { Container } from './style';
// import './style.css';

function Home() {
    return (
        <Container>
            <Section1 />
            <Section2 />
            <Section3 />
        </Container>
    );
}

export default Home;
