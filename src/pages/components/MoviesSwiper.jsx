import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../assets/styles/movieSwiper.css";

const MoviesSwiper = ({ genre, elements }) => {
  return (
    <div className="swiper">
      <h1 className="genre">{genre}</h1>

      <Swiper
        effect={"coverflow"}
        slidesPerView={4}
        grabCursor={true}
        centeredSlides={false}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 20,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        className="mySwiper"
      >
        {elements.map((element) => {
          return (
            <SwiperSlide>
              <a>
                <div class="card">
                  <img
                    className="card-img"
                    src={element.media}
                    alt="game media"
                  />

                  <div class="card-info">
                    <p class="text-title">{element.name}</p>
                  </div>
                  <div class="card-footer">
                    <div className="info">
                      <span class="text-title">{element.price}$</span>
                    </div>
                  </div>
                </div>
              </a>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default MoviesSwiper;
