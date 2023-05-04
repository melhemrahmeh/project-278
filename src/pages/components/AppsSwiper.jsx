import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router";
import "../../assets/styles/appsSwiper.css";

const AppsSwiper = ({ genre, elements }) => {
  const navigate = useNavigate();

  function handleSubPage(event) {
    navigate('/details');
  }

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
              <a href={handleSubPage}>
                <div class="card">
                  <img
                    className="card-img"
                    src={element.logo}
                    alt="app media"
                  />
                  <p class="text-title">{element.app_name}</p>
                  <span class="text-title">{element.rating}&#9733;</span>
                </div>
              </a>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default AppsSwiper;
