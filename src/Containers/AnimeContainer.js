import React, { useState } from "react";
import { useQuery } from "draqula";
import { getAnime } from "../QueryGQL/GetAnime";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from "styled-components";
import { ButtonPrimary } from "../utils/buttons";
import { getIdInUrl } from "../utils/getItemInUrl";

const AnimeContainer = ({ location }) => {
  const id = getIdInUrl({ location });

  const { data, isLoading, error } = useQuery(getAnime, {
    id
  });
  const medias = data && data.Media;
  if (!medias)
    return (
      <Container>
        {isLoading && <span>Loading…</span>}
        {error && <span>Error: {error.message}</span>}
      </Container>
    );
  if (!id) return <>une Erreur c'est produite</>;
  const {
    bannerImage,
    countryOfOrigin,
    startDate,
    endDate,
    source,
    trailer,
    genres,
    externalLinks
  } = medias || {};
  const pays = correspondance[countryOfOrigin];
  return (
    <Container>
      <Link to={`/`}>Retour</Link>

      <Img src={bannerImage} />
      <Infos>
        {infosList.map(i => (
          <Info>{medias[i]}</Info>
        ))}
        <Info>{pays}</Info>
      </Infos>
    </Container>
  );
};

export default AnimeContainer;

const Info = styled.span``;

const Img = styled.img`
  width: 100%;
`;
const Infos = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const Container = styled.section`
  display: flex;
  width: 80%;
  flex-wrap: wrap;
  background-color: #bfbfbf;
  margin: auto;
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
`;

const ContainerButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const infosList = [
  "type",
  "format",
  "description",
  "episode",
  "duration",
  "isLicensed",
  "source",
  "siteUrl"
];

const correspondance = {
  JP: "Japon"
};
