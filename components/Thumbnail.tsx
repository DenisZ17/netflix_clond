import Image from "next/image";
import { baseUrl } from "../constans/movie";
import { Movie } from "../typings";

interface Props {
  movie: Movie;
}
const Thumbnail = ({ movie }: Props) => {
  return (
    <div className="relative h-28 min-w-[180px] cursor-pointer md:h-36 md:min-w-[260px] transition duration-200 ease-out md:hover:scale-105">
      <Image
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        className="rounded-sm object-cover md:rounded"
        layout="fill"
      />
    </div>
  );
};

export default Thumbnail;
