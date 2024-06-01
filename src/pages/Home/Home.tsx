import axios from "axios";
import { useEffect, useState } from "react";

import { useAuth0 } from "@auth0/auth0-react";
import { message } from "antd";
import FilmLIst from "../../components/FilmLIst/FilmLIst";
import Navbar from "../../components/Navbar/Navbar";
import { Film, ListResultProps } from "../../types";
import { token } from "../../utils";

const Home = () => {
  const [filmList, setFilmList] = useState<Film[]>([]);
  const [viewMode, setViewMode] = useState(false);
  const { logout, loginWithPopup } = useAuth0();
  const handleChangeView = () => {
    setViewMode((prev) => !prev);
  };

  const handleLoginButtonClick = () => {
    loginWithPopup();
  };

  const handleLogoutButtonClick = () => {
    logout({ logoutParams: { returnTo: window.location.origin } });
  };
  useEffect(() => {
    const urlParams = "language=pt-BR";
    const baseUrl = `https://api.themoviedb.org/3/company/10342/movies`;

    const fetchData = async () => {
      try {
        let page = 1;
        let totalPages = 1;

        while (page <= totalPages) {
          const currentUrl = `${baseUrl}?${urlParams}&page=${page}`;
          console.log("currentUrl: ", currentUrl);

          const result = await axios.get<ListResultProps>(currentUrl, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          if (result.status === 200) {
            setFilmList((prevFilmList) => {
              const newFilmList = [...prevFilmList, ...result.data.results];
              const uniqueFilmList = Array.from(
                new Map(newFilmList.map((film) => [film["id"], film])).values()
              );
              return uniqueFilmList;
            });
            totalPages = result.data.total_pages;
            page++;
          }
        }
      } catch (error) {
        message.error(`${error}`);
      }
    };
    fetchData();
  }, [setFilmList]);

  return (
    <>
      <Navbar
        onLoginClick={handleLoginButtonClick}
        onChangeViewClick={handleChangeView}
        onLogoutClick={handleLogoutButtonClick}
      />
      <div className="pt-16 bg-black">
        <FilmLIst isListView={viewMode} filmLIst={filmList} />;
      </div>
    </>
  );
};

export default Home;
