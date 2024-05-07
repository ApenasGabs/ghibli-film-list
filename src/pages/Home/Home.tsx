import { useEffect, useRef, useState } from "react";
import axios from "axios";
// import { Button, Card, Flex, message, Modal, Tag } from "antd";

import { StyledCardProps, StyledHomeContainer } from "./Home.styles";
import { Card, message } from "antd";
import { Film, ListResultProps } from "../../types";

const Home = () => {
  const [filmLIst, setFilmList] = useState<Film[]>();
  const baseUrl = "https://api.themoviedb.org/3/company/10342/movies";
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  const token = import.meta.env.VITE_API_KEY;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get<ListResultProps>(baseUrl, {
          headers: {
            Authorization: `Bearer ${token}`, // use `Bearer ${token}` se for um token do tipo Bearer
          },
        });
        if (result.status === 200) {
          setFilmList(result.data.results)
          console.log("result: ", result);
        }
      } catch (error) {
        message.error(`${error}`);
      }
    };

    fetchData();
  }, [token]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        if (
          container.scrollWidth - container.scrollLeft <=
          container.offsetWidth
        ) {
          container.scrollLeft = 0;
        } else {
          container.scrollLeft += 1;
        }
      }
    }, 10);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* <StyledTagContainer>
        <Flex gap={4} wrap="wrap" align="center">
          <span>Categories:</span>
          {langs &&
            langs.map<ReactNode>((lang) => (
              <Tag.CheckableTag
                key={lang.language}
                checked={selectedTags.includes(lang.language)}
                onChange={(checked) => handleChange(lang.language, checked)}
              >
                {lang.language}
              </Tag.CheckableTag>
            ))}
        </Flex>
      </StyledTagContainer> */}
      <StyledHomeContainer ref={scrollContainerRef}>
        {filmLIst &&
          filmLIst.map((film) => {
            return (
              <Card
                title={
                  <>
                    {film.title &&
                    <p>{film.title}</p>
                    }
                  </>
                }
                bordered={false}
                style={StyledCardProps}
              >
    
                {film.poster_path && (
                  <img src={`https://image.tmdb.org/t/p/w94_and_h141_bestv2/${film.poster_path}`} alt={film.poster_path} />
                )}
                {film.overview && <p>{film.overview}</p>}
              </Card>
            );
          })}
      </StyledHomeContainer>
    </>
  );
};

export default Home;
