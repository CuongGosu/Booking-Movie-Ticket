const menuItems = [
  {
    title: "Lịch Chiếu",
    url: "/lich-chieu-phim",
  },
  {
    title: "Phim",
    url: "/",
    submenu: [
      { title: "Phim đang chiếu", url: "/phim-dang-chieu" },
      { title: "Phim sắp chiếu", url: "/phim-sap-chieu" },
    ],
  },
  {
    title: "Ưu Đãi",
    url: "/uu-dai",
  },
  {
    title: "Tin tức phim",
    url: "/tin-tuc-phim",
  },
  {
    title: "Quyền lợi",
    url: "/uu-dai-thanh-vien",
  },
];
export default menuItems;
