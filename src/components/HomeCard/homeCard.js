import React from 'react';

function HomeCard(props) {
    return (
        <div
            className="m-4"
            style={{
                backgroundImage: `url(${props.image})`,
                backgroundRepeat: 'no-repeat',
                border: 'solid',
                height: '50vh',
                width: '280px'
            }}
        >
            <p className="bg-[#a6c76c] text-white  w-10">New</p>

            <p className="bg-[#ef837b] text-white w-10">Sale</p>
        </div>
    );
}

export default HomeCard;
