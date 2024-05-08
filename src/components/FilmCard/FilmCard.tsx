import { Film } from "../../types";
import {
  StyledFilmCardContainer,
  StyledFilmDescriptionContainer,
  StyledFilmOverview,
} from "./FilmCard.styles";

interface FilmCardProps {
  filmData: Film;
}
const FilmCard = ({ filmData }: FilmCardProps) => {
  return (
    <StyledFilmCardContainer>
      {filmData.poster_path && (
        <img
          src={`https://image.tmdb.org/t/p/w94_and_h141_bestv2/${filmData.poster_path}`}
          alt={filmData.poster_path}
        />
      )}
      <StyledFilmDescriptionContainer>
        <div>
          <h2>
            {filmData.title} <span>{filmData.original_title}</span>
          </h2>
          <span>{filmData.release_date}</span>
        </div>
        <StyledFilmOverview>
          {filmData.overview && <p>{filmData.overview}</p>}
        </StyledFilmOverview>
      </StyledFilmDescriptionContainer>
    </StyledFilmCardContainer>
  );
};

export default FilmCard;
