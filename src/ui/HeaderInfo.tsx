import React from "react";

interface PropsHeaderInfo {}

const HeaderInfo: React.FC<PropsHeaderInfo> = () => {
  return (
    <div className="text-sm h-14 w-full text-right pt-7 uppercase">
      <div className="xl:w-1170 mx-auto container">
        <div className="mr-4 inline-block">
          Hotline: <a href="tel:0236 3630 689">0236 3630 689</a>
        </div>
        <div className="inline-block">Giờ mở cửa: 9:00 - 22:00</div>
      </div>
    </div>
  );
};

export default HeaderInfo;
