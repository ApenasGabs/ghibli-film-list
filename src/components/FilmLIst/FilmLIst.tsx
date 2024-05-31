import { Film } from "../../types";
import FilmCard from "../FilmCard/FilmCard";
import { StyledFilmLIstContainer } from "./FilmLIst.styles";
interface FilmLIstProps {
  filmLIst?: Film[];
  isListView?: boolean;
}
const FilmLIst = ({ filmLIst, isListView }: FilmLIstProps) => {
  return (
    <StyledFilmLIstContainer>
      {!!filmLIst?.length &&
        filmLIst.map((film) => (
          <FilmCard key={film.id} filmData={film} isListView={isListView} />
        ))}
    </StyledFilmLIstContainer>
  );
};

export default FilmLIst;
