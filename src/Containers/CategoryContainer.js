import React, { useState } from "react";
import { useQuery } from "draqula";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from "styled-components";
import { getAnimesByGenre } from "../QueryGQL/getAnimesByGenre";
import { AnimeListByGenreComponent } from "../Components/AnimeListByGenreComponent";
import { NavbarContainer } from "./NavBarContainer";
import { getNameInUrl } from "../utils/getItemInUrl";

const CategoryContainer = ({ location }) => {
  const [page, setPage] = useState(1);
  const genre = getNameInUrl({ location });
  const { data, isLoading, error, fetchMore, isFetchingMore } = useQuery(
    getAnimesByGenre,
    {
      genre,
      perPage: 9,
      page
    }
  );

  const handleClickRight = () => {
    setPage(page + 1)
    fetchMore({ page: page, perPage: 9, });
  };

  const handleClickLeft = () => {
    setPage(page - 1)
    fetchMore({ page: page, perPage: 9, });
  };

 const list = data && data.Page.media;
  // if (!list)
  //   return (
  //     <Container>
  //       {isLoading && <span>Loading…</span>}
  //       {error && <span>Error: {error.message}</span>}
  //     </Container>
  //   );
  if (!genre) return <>une Erreur c'est produite</>;

  return (
    <Container>
      <NavbarContainer />
      <AnimeListByGenreComponent collection={list || []} handleClickRight={handleClickRight} handleClickLeft={handleClickLeft}/>
      <Link to={`/`}>Retour</Link>
    </Container>
  );
};

export default CategoryContainer;

const Container = styled.section`
  background: black;
  height: 100%;
  width: 100%;
`;
