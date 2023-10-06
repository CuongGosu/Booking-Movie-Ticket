import React from 'react';

interface PropsHeaderInfo {}

const HeaderInfo: React.FC<PropsHeaderInfo> = () => {
  return (
    <div className="h-14 w-full pt-7 text-right text-sm uppercase">
      <div className="container mx-auto xl:w-1170">
        <div className="mr-4 inline-block">
          Hotline: <a href="tel:0236 3630 689">0236 3630 689</a>
        </div>
        <div className="inline-block">Giờ mở cửa: 9:00 - 22:00</div>
      </div>
    </div>
  );
};

export default HeaderInfo;
