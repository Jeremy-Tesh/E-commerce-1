import React from 'react';
import product1 from '../../../Assets/Images/product1.jpg';
import product2 from '../../../Assets/Images/product2.jpg';
import product3 from '../../../Assets/Images/product3.jpg';
import product4 from '../../../Assets/Images/product4.jpg';
import HomeCard from '../../../components/HomeCard/homeCard';
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
    }
];

function Section6() {
    return (
        <>
            <div>
                <p>New Arrivals</p>
                <div className="flex flex-wrap ">
                    {cards.map((item) => (
                        <HomeCard image={item.image} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Section6;
