import React from "react";
import SlideHome from "@/components/home/SlideHome";
import SessionMovie from "@/components/home/SessionMovie";
interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <div className="h-3 mx-auto">
      <SlideHome />
      <SessionMovie />
    </div>
  );
};

export default Home;
