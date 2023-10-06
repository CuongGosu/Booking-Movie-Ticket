import React from 'react';

interface PropsBenefit {}

const Benefit: React.FC<PropsBenefit> = () => {
  return (
    <div className="mx-auto h-full bg-white">
      <div className="container mx-auto xl:w-1170">
        <h1 className="py-10 text-center text-2xl font-bold uppercase">
          Quyền lợi thành viên
        </h1>
        <div className="mx-10 flex w-56 flex-col gap-1 pb-20">
          <img
            src="https://metiz.vn/media/new_offer/gia-ve-u22.jpg"
            alt="quyen loi thanh vien"
            className="h-56 w-56"
          />
          <p className="text-center text-sm text-gray-600">
            01/01/2022 - 31/12/2023
          </p>
          <h2 className="text-center text-base font-bold">
            KHUYẾN MÃI GIÁ VÉ U22
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Benefit;
