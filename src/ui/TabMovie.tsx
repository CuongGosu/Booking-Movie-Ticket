import React, { useState } from 'react';
import Button from './Button';

interface TabMovieProps {
  setActiveTab: React.Dispatch<React.SetStateAction<'nowPlaying' | 'upcoming'>>;
}

const TabMovie: React.FC<TabMovieProps> = ({ setActiveTab }) => {
  const flexBetween = 'flex items-center';
  const [activeTab, setActiveTabLocal] = useState<'nowPlaying' | 'upcoming'>(
    'nowPlaying',
  );

  const handleTabClick = (tab: 'nowPlaying' | 'upcoming') => {
    setActiveTabLocal(tab);
    setActiveTab(tab);
  };

  return (
    <div className="container mx-auto xl:w-1170">
      <ul className={`${flexBetween} justify-center gap-8 pb-10 pt-8`}>
        <li>
          <Button
            type="primary"
            isActive={activeTab === 'nowPlaying'}
            onClick={() => handleTabClick('nowPlaying')}
          >
            Phim đang chiếu
          </Button>
        </li>
        <li>
          <Button
            type="primary"
            isActive={activeTab === 'upcoming'}
            onClick={() => handleTabClick('upcoming')}
          >
            Phim sắp chiếu
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default TabMovie;
