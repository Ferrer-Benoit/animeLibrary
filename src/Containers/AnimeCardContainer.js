import React, { useState } from "react";
import { useQuery } from "draqula";
import { getLastAnimes } from "../QueryGQL/GetLastAnimes";
import { AnimeListComponent } from "../Components/AnimeListComponent";
import styled from "styled-components";
import Carousel from "react-bootstrap/Carousel";

import "./stylesheets/AnimeCardContainer.css";
import { GenreCollectionComponent } from "../Components/GenreCollectionComponent";

const AnimeCardContainer = () => {
  const [page, setPage] = useState(1);
  const { data, error } = useQuery(getLastAnimes, {
    perPage: 15,
    status: "RELEASING"
  });

  const { Page: media } = data || {};
  const animeList = (media && media.media) || [];
  const animesList = AnimeListComponent(animeList);

  return (
    <Container>
      {error && <span>Error: {error.message}</span>}
      <GenreCollectionComponent />
      <Content>
        <Carousel>{animesList}</Carousel>
      </Content>
    </Container>
  );
};

export default AnimeCardContainer;

// const getAnimesList = animeList =>
// animeList &&
// animeList.map((info, index) => (
//   <Carousel.Item>
//     <Title>Catérogie lala</Title>
//     <Img src={info.coverImage.large} alt="img" />
//   </Carousel.Item>
// ));

// const Img = styled.img`
//   display: flex;
//   margin: auto;
//   height: 100%;
// `;
const Container = styled.section`
  background: black;
  height: 100%;
  width: 100%;
`;

const ContainerButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Content = styled.div``;

const Title = styled.h3`
  color: white;
  text-align: center;
`;
