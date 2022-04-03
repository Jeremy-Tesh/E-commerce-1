import React from 'react';
import Image2 from '../../../Assets/Images/2.png';
import Image3 from '../../../Assets/Images/2.png';
import Image4 from '../../../Assets/Images/3.png';
import Image5 from '../../../Assets/Images/4.png';
import Image6 from '../../../Assets/Images/5.png';
import Image7 from '../../../Assets/Images/6.png';
import { Container, BrandLogo } from './style';

const BrandLogos = [Image2, Image3, Image4, Image5, Image6, Image7];

function Section1() {
    return (
        <>
            <Container>
                <div
                    className="motto-text"
                    style={{ color: 'white', textAlign: 'center' }}
                >
                    <h3>Don't Miss</h3>
                    <h1>Mystery Deals!!!!</h1>
                    <h3>Online Only</h3>
                    {/* <button>Discover Now</button> */}
                </div>
            </Container>
            <BrandLogo>
                {BrandLogos.map((logo) => (
                    <div
                        className="brand-images-row"
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '100px'
                        }}
                    >
                        <img src={logo} alt="image1" />
                    </div>
                ))}
            </BrandLogo>
        </>
    );
}

export default Section1;
