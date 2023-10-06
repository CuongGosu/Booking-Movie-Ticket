import { useState } from 'react';
import Box from '@/ui/Box';
import Row from '@/ui/Row';
import React from 'react';
import showMore from '@/assets/showMore.png';
import showMoreHover from '@/assets/showMore_hover.png';
import { Link } from 'react-router-dom';

interface NewsProps {}

const News: React.FC<NewsProps> = () => {
  const [isHoveredShow, setIsHoveredShow] = useState(false);
  const handleMouseEnter = () => {
    setIsHoveredShow(true);
  };

  const handleMouseLeave = () => {
    setIsHoveredShow(false);
  };
  return (
    <div className=" bg-white py-10">
      <div className="container mx-auto xl:w-1170">
        <h1 className="mb-7 text-center text-3xl font-bold">
          KHUYẾN MÃI & ƯU ĐÃI
        </h1>
        <Row col="col4">
          <div className="col-span-2">
            <Box
              title="KHUYẾN MÃI HẤP DẪN"
              content="Khám phá ngay hàng trăm lợi ích dành cho bạn trong chuyên mục Khuyến mãi & Ưu đãi hấp dẫn của Metiz Cinema."
            />
          </div>
          <div className="h-56">
            <img
              className="h-full bg-cover"
              src="https://metiz.vn/media/new_offer/uu-dai-thanh-toan-vnpay-tai-rap-chieu-phim-metiz-cinema-da-nang.png"
            />
          </div>
          <div className="h-56">
            <img
              className="h-full bg-cover"
              src="https://metiz.vn/media/new_offer/uu-dai-thanh-toan-vnpay-tai-rap-chieu-phim-metiz-cinema-da-nang.png"
            />
          </div>
        </Row>
        <Row col="col4">
          <div className="h-56">
            <img
              className="h-full bg-cover"
              src="https://metiz.vn/media/new_offer/uu-dai-thanh-toan-vnpay-tai-rap-chieu-phim-metiz-cinema-da-nang.png"
            />
          </div>
          <div className="h-56">
            <img
              className="h-full bg-cover"
              src="https://metiz.vn/media/new_offer/uu-dai-thanh-toan-vnpay-tai-rap-chieu-phim-metiz-cinema-da-nang.png"
            />
          </div>
          <div className="h-56">
            <img
              className="h-full bg-cover"
              src="https://metiz.vn/media/new_offer/uu-dai-thanh-toan-vnpay-tai-rap-chieu-phim-metiz-cinema-da-nang.png"
            />
          </div>
          <div
            className="h-56 w-56"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {isHoveredShow ? (
              <Link to="/uu-dai">
                <img src={showMoreHover} />
              </Link>
            ) : (
              <img src={showMore} />
            )}
          </div>
        </Row>
      </div>
    </div>
  );
};

export default News;
