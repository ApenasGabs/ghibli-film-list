import axios from "axios";
import { useEffect, useState } from "react";

import { message } from "antd";
import FilmLIst from "../../components/FilmLIst/FilmLIst";
import { Film, ListResultProps } from "../../types";

const Home = () => {
  const [filmList, setFilmList] = useState<Film[]>([]);
  const urlParams = "language=pt-BR";
  const baseUrl = `https://api.themoviedb.org/3/company/10342/movies`;

  const token = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const fetchData = async () => {
      try {
        let allFilms: Film[] = [];
        let page = 1;
        let totalPages = 1;

        while (page <= totalPages) {
          const result = await axios.get<ListResultProps>(
            `${baseUrl}?page=${page}&${urlParams}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          if (result.status === 200) {
            allFilms = allFilms.concat(result.data.results);
            totalPages = result.data.total_pages;
            page++;
          }
        }
        setFilmList(allFilms);
      } catch (error) {
        message.error(`${error}`);
      }
    };

    fetchData();
  }, [baseUrl, token]);

  return <FilmLIst filmLIst={filmList} />;
};

export default Home;
