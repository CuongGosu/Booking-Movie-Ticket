import React from 'react';
import SlideHome from '@/components/home/SlideHome';
import SessionMovie from '@/components/home/SessionMovie';
import News from '@/components/home/News';
interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <div className="mx-auto h-full">
      <SlideHome />
      <SessionMovie />
      <News />
    </div>
  );
};

export default Home;
