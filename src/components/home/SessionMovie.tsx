import React, { useState } from 'react';
import { useMovies } from '@/hooks/useMovies';
import TabMovie from '@/ui/TabMovie';
import ListMovieTab from '@/ui/ListMovieTab';

interface SessionMovieProps {}

const SessionMovie: React.FC<SessionMovieProps> = () => {
  const { isLoading, movies } = useMovies();
  const [activeTab, setActiveTab] = useState<'nowPlaying' | 'upcoming'>(
    'nowPlaying',
  );
  return (
    <div className="session-movie">
      <TabMovie setActiveTab={setActiveTab} />
      <ListMovieTab
        movies={movies}
        isLoading={isLoading}
        activeTab={activeTab}
      />
    </div>
  );
};

export default SessionMovie;
