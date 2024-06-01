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
      <StyledFilmDescriptionContainer className="flex flex-col p-4">
        <div>
          <h2 className="text-xl md:text-2xl font-bold">
            {filmData.title}
            <span className="text-base font-normal">
              {filmData.original_title}
            </span>
          </h2>
          <span className="text-sm md:text-base">{filmData.release_date}</span>
        </div>
        <StyledFilmOverview className="mt-2">
          {filmData.overview && (
            <p className="text-sm md:text-base">{filmData.overview}</p>
          )}
        </StyledFilmOverview>
      </StyledFilmDescriptionContainer>
    </StyledFilmCardContainer>
  ) : (
    <div className="card card-side bg-base-100 w-full sm:w-96 min-w-64 sm:min-w-96 h-auto sm:h-64 m-4 flex justify-between">
      {filmData.poster_path && (
        <figure className="flex flex-start overflow-hidden">
          <img
            className="object-cover w-full sm:w-72 h-48 sm:h-full"
            src={`https://image.tmdb.org/t/p/w400/${filmData.poster_path}`}
            alt={filmData.poster_path}
          />
        </figure>
      )}
      <div className="card-body p-1 w-5/6 justify-start">
        <div className="flex flex-col">
          <h3 className="card-title text-lg md:text-xl flex flex-col">
            {filmData.title}
          </h3>
          <span className="text-sm md:text-base ">
            {filmData.original_title}
          </span>
          <span className="text-sm md:text-base">{filmData.release_date}</span>
        </div>
        <div className="card-actions justify-end mt-4">
          <button className="btn btn-primary">Ver informações</button>
        </div>
      </div>
    </div>
  );
};

export default FilmCard;
