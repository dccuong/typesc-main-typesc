import React from 'react'
import { Carousel } from 'antd';

const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};


type Props = {}

const Slide = (props: Props) => {
    return (
        <Carousel autoplay>
            <div>
                <img className='h-[500px] w-[100%]' src="https://i.pinimg.com/originals/67/88/f9/6788f98de13c01facde32cad4ff6c693.jpg" alt="" />

            </div >
            <div>
                <img className='h-[500px] w-[100%]' src="https://i.pinimg.com/originals/67/88/f9/6788f98de13c01facde32cad4ff6c693.jpg" alt="" />

            </div >
        </Carousel>
    )
}

export default Slide