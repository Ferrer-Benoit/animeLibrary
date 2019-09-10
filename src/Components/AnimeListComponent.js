import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from "styled-components";
import AnimeContainer from "../Containers/AnimeContainer";

export const AnimeListComponent = ({ info }) => {
  const title = info.title;
  const startDate =
    info.startDate &&
    `${info.startDate.day}/${info.startDate.month}/${info.startDate.year}`;
  const endDate =
    info.endDate &&
    `${info.endDate.day}/${info.endDate.month}/${info.endDate.year}`;
  const urlImage = info.coverImage && info.coverImage.large;
  return (
    <Container className="container-anime" key={info.id}>
      <div className="image-container">
        <img src={urlImage} className="image" alt="urlImage" />
      </div>
      <div className="infos">
        <div className="title">Titre : {title.english || title.native}</div>
        <div className="start-date">Date de début : {startDate}</div>
        <div className="end-date">Date de fin : {endDate}</div>
        <div className="nb-episode">Nombres d'épisodes : {info.episodes}</div>
      </div>
      <Link to={`anime?id=${info.id}`}>
        Plus d'infos !
      </Link>
    </Container>
  );
};

const Container = styled.section`
  background: papayawhip;
  display: flex;
  margin: 2vh 2vw;
  width: 45vw;
  position: relative;
`;

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => (props.primary ? "palevioletred" : "white")};
  color: ${props => (props.primary ? "white" : "palevioletred")};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  width: 15vw;
  height: 5vh;
  position: absolute;
  bottom: 0;
  right: 0;
`;
