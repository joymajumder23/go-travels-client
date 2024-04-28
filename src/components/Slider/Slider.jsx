// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';



import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import bangladesh from "../../assets/image/bangladesh.jpg";
import thailand from "../../assets/image/thailand.jpg";
import malaysia from "../../assets/image/malaysia.jpg";
import vietnam from "../../assets/image/vietnam.jpg";
import cambodia from "../../assets/image/cambodia.jpg";

const Slider = () => {
    return (
        <Swiper
        spaceBetween={30}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={bangladesh} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={malaysia} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={thailand} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={vietnam} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={cambodia} />
        </SwiperSlide>
      </Swiper>
    );
};

export default Slider;