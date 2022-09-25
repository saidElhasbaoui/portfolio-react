import React from 'react';
import './testimonials.css';
import avtr1 from '../../assets/avatar1.jpg'
import avtr2 from '../../assets/avatar2.jpg'
import avtr3 from '../../assets/avatar3.jpg'
import avtr4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data =[
  {
    avatar : avtr1 ,
    name : 'said elhasbaoui' ,
    review : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae corrupti, neque, dicta aliquam est voluptas minus officiis non pariatur saepe facilis vel unde deserunt a quos. Molestias a dolor molestiae.'
  },
  {
    avatar : avtr2 ,
    name : 'said elhasbaoui' ,
    review : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae corrupti, neque, dicta aliquam est voluptas minus officiis non pariatur saepe facilis vel unde deserunt a quos. Molestias a dolor molestiae.'
  },
  {
    avatar : avtr3 ,
    name : 'said elhasbaoui' ,
    review : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae corrupti, neque, dicta aliquam est voluptas minus officiis non pariatur saepe facilis vel unde deserunt a quos. Molestias a dolor molestiae.'
  },
  {
    avatar : avtr4 ,
    name : 'said elhasbaoui' ,
    review : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae corrupti, neque, dicta aliquam est voluptas minus officiis non pariatur saepe facilis vel unde deserunt a quos. Molestias a dolor molestiae.'
  },
  
];

export const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper 
      className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {
          data.map(({avatar , name , review}) =>{
            return (
            <SwiperSlide className='testimonial'>
              <div className="client__avatar">
                <img src={avatar} alt="Avatar one" />
              </div>
              <h5 className='cliant__name'>{name}</h5>
              <small className="clinet__review">
                {review}
              </small>
        
        </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )


}
export default Testimonials