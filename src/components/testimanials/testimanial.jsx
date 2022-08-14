import React from "react";
import "./testimanial.css";
import ava1 from "../../assets/avatar1.jpg";
import ava2 from "../../assets/avatar2.jpg";
import ava3 from "../../assets/avatar3.jpg";
import ava4 from "../../assets/avatar4.jpg";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Testimanial = () => {
  const data = [
    {
      avatar: ava1,
      name: "Tina Snow",
      review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
      deleniti nemo obcaecati sit tempore corporis adipisci, quo fuga
      dignissimos dolores, provident veritatis nulla alias similique in!
      Voluptatem dignissimos quasi quisquam`,
    },
    {
      avatar: ava2,
      name: "Shatta Wale",
      review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
      deleniti nemo obcaecati sit tempore corporis adipisci, quo fuga
      dignissimos dolores, provident veritatis nulla alias similique in!
      Voluptatem dignissimos quasi quisquam`,
    },
    {
      avatar: ava3,
      name: "Kwame Despite",
      review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
      deleniti nemo obcaecati sit tempore corporis adipisci, quo fuga
      dignissimos dolores, provident veritatis nulla alias similique in!
      Voluptatem dignissimos quasi quisquam`,
    },
    {
      avatar: ava4,
      name: "Nana Ama McBrown",
      review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
      deleniti nemo obcaecati sit tempore corporis adipisci, quo fuga
      dignissimos dolores, provident veritatis nulla alias similique in!
      Voluptatem dignissimos quasi quisquam`,
    },
  ];
  return (
    <section id="testimanials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map((item, index) => {
          return (
            <SwiperSlide className="testimonial" key={index}>
              <div className="client__avatar">
                <img src={item.avatar} alt="" />
              </div>
              <h5 className="client__name">{item.name}</h5>
              <small className="client__review">{item.review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimanial;
