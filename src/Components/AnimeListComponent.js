import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from "styled-components";
import Carousel from "react-bootstrap/Carousel";

export const AnimeListComponent = animeList =>
  animeList &&
  animeList.map((info, index) => {
    const title = info.title["english"] || info.title["native"];
    return (
      <Carousel.Item>
        <Title>{title}</Title>
        <Link to={`anime?id=${info.id}`}>
          <Img src={info.coverImage.large} alt="img" />
        </Link>
      </Carousel.Item>
    );
  });

const Img = styled.img`
  display: flex;
  margin: auto;
  height: 100%;
`;

const Title = styled.h3`
  color: white;
  text-align: center;
`;
