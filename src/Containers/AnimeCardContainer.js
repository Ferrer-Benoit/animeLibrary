import React, { useState } from "react";
import { useQuery } from "draqula";
import { getLastAnimes } from "../QueryGQL/GetLastAnimes";
import { AnimeListComponent } from "../Components/AnimeListComponent";
import styled from "styled-components";
import Carousel from "react-bootstrap/Carousel";

import "./stylesheets/AnimeCardContainer.css";
import { NavbarContainer } from "./NavBarContainer";

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
      <NavbarContainer />
      <Content>
        <Carousel>{animesList}</Carousel>
      </Content>
    </Container>
  );
};

export default AnimeCardContainer;

const Container = styled.section`
  background: black;
  height: 100%;
  width: 100%;
`;

const Content = styled.div``;

