import { Film } from "../../types";
import FilmCard from "../FilmCard/FilmCard";
interface FilmLIstProps {
  filmLIst?: Film[];
}
const FilmLIst = ({ filmLIst }: FilmLIstProps) => {
  return (
    <div>
      {!!filmLIst?.length &&
        filmLIst.map((film) => <FilmCard key={film.id} filmData={film} />)}
    </div>
  );
};

export default FilmLIst;
