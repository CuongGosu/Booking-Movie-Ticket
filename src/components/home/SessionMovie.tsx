import { getApiMovies } from "@/services/apiMovies";
import { useEffect } from "react";
interface SessionMovieProps {}
const SessionMovie: React.FC<SessionMovieProps> = () => {
  useEffect(function () {
    getApiMovies().then((data) => console.log(data));
  }, []);
  return <div>asd</div>;
};
export default SessionMovie;
