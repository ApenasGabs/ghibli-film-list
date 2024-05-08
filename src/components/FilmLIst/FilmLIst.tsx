import { Film } from "../../types";
import FilmCard from "../FilmCard/FilmCard";
import { StyledFilmLIstContainer } from "./FilmLIst.styles";
interface FilmLIstProps {
  filmLIst?: Film[];
  isCard?: boolean;
}
const FilmLIst = ({ filmLIst }: FilmLIstProps) => {
  return (
    <StyledFilmLIstContainer>
      {!!filmLIst?.length &&
        filmLIst.map((film) => <FilmCard key={film.id} filmData={film} />)}
    </StyledFilmLIstContainer>
  );
};

export default FilmLIst;
