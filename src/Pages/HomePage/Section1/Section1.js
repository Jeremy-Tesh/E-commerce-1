import React from 'react';
import Image2 from '../../../Assets/Images/2.png';
import Image3 from '../../../Assets/Images/2.png';
import Image4 from '../../../Assets/Images/3.png';
import Image5 from '../../../Assets/Images/4.png';
import Image6 from '../../../Assets/Images/5.png';
import Image7 from '../../../Assets/Images/6.png';
import { Container } from './style';

const brandLogos = [Image2, Image3, Image4, Image5, Image6, Image7];

function Section1() {
    return (
        <>
            <Container className="flex flex-col justify-center items-center text-white -mt-20 ">
                <div className="text-center">
                    <h1 className="text-lg">Don't Miss</h1>
                    <h1 className="text-6xl m-4">Mystery Deals</h1>
                    <h3 className="text-lg">Online Only</h3>
                    {/* <button>Discover Now</button> */}
                </div>
            </Container>
            <div className="flex justify-center overflow-auto hover:overflow-scroll">
                {brandLogos.map((logo, id) => (
                    <div
                        className="brand-images-row "
                        key={id}
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            minWidth: '271px',
                            height: '99px',
                            border: 'solid grey 1px'
                        }}
                    >
                        <img src={logo} alt="image1" />
                    </div>
                ))}
            </div>
        </>
    );
}

export default Section1;
