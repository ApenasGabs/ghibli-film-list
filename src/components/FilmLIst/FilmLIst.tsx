import { Film } from "../../types";
import FilmCard from "../FilmCard/FilmCard";
import { StyledFilmLIstContainer } from "./FilmLIst.styles";
interface FilmLIstProps {
  filmLIst?: Film[];
  isListView?: boolean;
  onSaveFavorite: (filmData: Film) => void;
}
const FilmLIst = ({ filmLIst, isListView, onSaveFavorite }: FilmLIstProps) => {
  return (
    <StyledFilmLIstContainer>
      {!!filmLIst?.length &&
        filmLIst.map((film) => (
          <FilmCard
            key={film.id}
            filmData={film}
            isListView={isListView}
            onSaveFavorite={onSaveFavorite}
          />
        ))}
    </StyledFilmLIstContainer>
  );
};

export default FilmLIst;
