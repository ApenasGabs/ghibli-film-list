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
  const test = true;
  if (test) {
    return (
      <div className="card lg:card-side bg-base-100 shadow-xl">
        {filmData.poster_path && (
          <figure>
            <img
              src={`https://image.tmdb.org/t/p/w94_and_h141_bestv2/${filmData.poster_path}`}
              alt={filmData.poster_path}
            />
          </figure>
        )}
        <div className="card-body">
          <h2 className="card-title">
            {filmData.title} <span>{filmData.original_title}</span>
          </h2>
          <div>
            <h2>
              {filmData.title} <span>{filmData.original_title}</span>
            </h2>
            <span>{filmData.release_date}</span>
          </div>
          {/* {filmData.overview && <p>{filmData.overview}</p>} */}
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>
    );
  }
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
