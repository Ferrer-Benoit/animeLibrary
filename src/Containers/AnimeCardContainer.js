import React, { useState } from "react";
import { useQuery } from "draqula";
import { getAnimes } from "../QueryGQL/GetAnimes";
import { AnimeListComponent } from "../Components/AnimeListComponent";
import styled from "styled-components";
import { ButtonPrimary } from '../utils/buttons'

const AnimeCardContainer = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, error, fetchMore } = useQuery(getAnimes, {
    page: page,
    perPage: 6
  });
  const { Page: media } = data || {};
  const animeList = (media && media.media) || [];

  const onFetchMore = ({ next, previous }) => {
    if (next) setPage(page + 1);
    if (previous) setPage(page - 1);
    fetchMore({ page: page, perPage: 6 });
  };

  return (
    <Container>
      {isLoading && <span>Loading…</span>}
      {error && <span>Error: {error.message}</span>}
      {animeList && animeList.map(info => <AnimeListComponent info={info} />)}
      <ContainerButton>
        <ButtonPrimary primary onClick={() => onFetchMore({ previous: true })}>
          previous
        </ButtonPrimary>
        <ButtonPrimary primary onClick={() => onFetchMore({ next: true })}>
          next{" "}
        </ButtonPrimary>
      </ContainerButton>
    </Container>
  );
};

export default AnimeCardContainer;

const Container = styled.section`
  background: black;
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`;

const ContainerButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
