import { Film } from "../../types";
import {
  StyledFilmCardContainer,
  StyledFilmDescriptionContainer,
  StyledFilmOverview,
} from "./FilmCard.styles";

interface FilmCardProps {
  filmData: Film;
  viewMode?: "list" | "card";
  isListView?: boolean;
}

const FilmCard = ({ filmData, isListView }: FilmCardProps) => {
  return isListView ? (
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
  ) : (
    <div className="card card-side bg-base-100">
      {filmData.poster_path && (
        <figure>
          <img
            src={`https://image.tmdb.org/t/p/w200/${filmData.poster_path}`}
            alt={filmData.poster_path}
          />
        </figure>
      )}
      <div className="card-body">
        <div className="flex flex-col">
          <h3 className="card-title flex flex-col">
            {filmData.title} <span>{filmData.original_title}</span>
          </h3>
          <span>{filmData.release_date}</span>
        </div>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Watch</button>
        </div>
      </div>
    </div>
  );
};
export default FilmCard;
