import React from 'react';
import image1 from '../../../Assets/Images/product1.jpg';
import image2 from '../../../Assets/Images/product2.jpg';

function Section5() {
    return (
        <>
            <div className="flex ...">
                <div className="col-1">
                    <div className="flex flex-col ...">
                        <p>SPECIAL</p>
                        <h1>Refine Your Style</h1>
                        <p>
                            Get on our exclusive emial list and be the first to
                            hear
                        </p>
                        <br></br>
                        <p>about sales,coupones,new arrivals and more!!</p>
                    </div>
                    <div className="flex ...">
                        <div className="flex flex-col ...">
                            <img className="w-40" src={image1} alt="" />
                            <span>Boots,Shoes,Women</span>
                            <span>Sandals Cool</span>
                            <span>Now $337.00</span>
                            <span>Now $337.00</span>
                        </div>
                        <div className="flex flex-col ...">
                            <img className="w-40" src={image2} alt="" />
                            <span>Boots,Shoes,Women</span>
                            <span>Sandals Cool</span>
                            <span>Now $337.00</span>
                            <span>Now $337.00</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Section5;
