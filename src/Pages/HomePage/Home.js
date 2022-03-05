import React from 'react';
import Image1 from '../../Assets/Images/slide-1.jpg';
import Image2 from '../../Assets/Images/1.png';
import Image3 from '../../Assets/Images/2.png';
import Image4 from '../../Assets/Images/3.png';
import Image5 from '../../Assets/Images/4.png';
import Image6 from '../../Assets/Images/5.png';
import Image7 from '../../Assets/Images/6.png';
import './style.css';
function Home() {
    return (
        <div>
            <div className="motto">
                <div className="motto-text">
                    <h3>Don't Miss</h3>
                    <h1>Mystery Deals</h1>
                    <h3>Online Only</h3>
                    {/* <button>Discover Now</button> */}
                </div>
            </div>
            <div className="brand-images">
                <div className="brand-images-row">
                    <img src={Image2} alt="image1" />
                </div>
                <div className="brand-images-row">
                    <img src={Image3} alt="image2" />
                </div>
                <div className="brand-images-row">
                    <img src={Image4} alt="image3" />
                </div>
                <div className="brand-images-row">
                    <img src={Image5} alt="image4" />
                </div>
                <div className="brand-images-row">
                    <img src={Image6} alt="image5" />
                </div>
                <div className="brand-images-row">
                    <img src={Image6} alt="image6" />
                </div>
            </div>
            <div className="card-container">
                <div className="card-row-1">
                    <div className="sub-card">
                        <div>
                            <h3>Trending now</h3>
                            <h1>This Week's/n Most Wanted</h1>
                            <h3>Discover Now</h3>
                        </div>
                    </div>
                </div>
                <div className="card-row-2">
                    <div className="card-row-2-bg">
                        <div className="sub-card">
                            <h3>Limited time only</h3>
                            <h1>Trainers & Sportwear</h1>
                            <h3>SHOP NOW</h3>
                        </div>
                    </div>
                    <div>
                        <div className="sub-card">
                            <h3>Limited time only</h3>
                            <h1>Trainers & Sportwear</h1>
                            <h3>SHOP NOW</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
