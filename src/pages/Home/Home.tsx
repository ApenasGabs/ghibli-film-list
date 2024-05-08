import { useEffect, useState } from "react";
import axios from "axios";

import { message } from "antd";
import { Film, ListResultProps } from "../../types";
import FilmLIst from "../../components/FilmLIst/FilmLIst";

const Home = () => {
  const [filmLIst, setFilmList] = useState<Film[]>();
  const urlParams = "language=pt-BR&include_image_language=pt";
  const baseUrl = `https://api.themoviedb.org/3/company/10342/movies?${urlParams}`;

  const token = import.meta.env.VITE_API_KEY;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get<ListResultProps>(baseUrl, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (result.status === 200) {
          setFilmList(result.data.results);
          console.log("result: ", result);
        }
      } catch (error) {
        message.error(`${error}`);
      }
    };

    fetchData();
  }, [baseUrl, token]);

  return <FilmLIst filmLIst={filmLIst} />;
};

export default Home;
