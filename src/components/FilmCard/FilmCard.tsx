import { Card } from "antd";
import { Film } from "../../types";
import { StyledCardProps } from "../../pages/Home/Home.styles";

interface FilmCardProps {
  filmData: Film;
}
const FilmCard = ({ filmData }: FilmCardProps) => {
  return (
    <Card
      title={<>{filmData.title && <p>{filmData.title}</p>}</>}
      bordered={false}
      style={StyledCardProps}
    >
      {filmData.poster_path && (
        <img
          src={`https://image.tmdb.org/t/p/w94_and_h141_bestv2/${filmData.poster_path}`}
          alt={filmData.poster_path}
        />
      )}
      {filmData.overview && <p>{filmData.overview}</p>}
    </Card>
  );
};

export default FilmCard;
