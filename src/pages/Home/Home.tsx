import axios from "axios";
import { useEffect, useState } from "react";

import { useAuth0 } from "@auth0/auth0-react";
import { message } from "antd";
import FilmLIst from "../../components/FilmLIst/FilmLIst";
import Navbar from "../../components/Navbar/Navbar";
import { Film, ListResultProps } from "../../types";
import Login from "../Login/Login";

const Home = () => {
  const [filmList, setFilmList] = useState<Film[]>([]);
  const urlParams = "language=pt-BR";
  const baseUrl = `https://api.themoviedb.org/3/company/10342/movies`;
  const [viewMode, setViewMode] = useState(false);
  const [isLoginPage, setIsLoginPage] = useState(false);

  const token = import.meta.env.VITE_API_KEY;
  const { logout } = useAuth0();
  const handleChangeView = () => {
    setViewMode((prev) => !prev);
  };

  const handleClickLogin = () => {
    setIsLoginPage((prev) => !prev);
  };

  const handleClickLogout = () => {
    logout({ logoutParams: { returnTo: window.location.origin } });
    // logout();
  };

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

  return isLoginPage ? (
    <Login />
  ) : (
    <>
      <Navbar
        onLoginClick={handleClickLogin}
        onChangeViewClick={handleChangeView}
        onLogoutClick={handleClickLogout}
      />
      <div className="pt-16 bg-black">
        <FilmLIst isListView={viewMode} filmLIst={filmList} />;
      </div>
    </>
  );
};

export default Home;
