import React from "react";
import { useQuery } from "draqula";
import { getGenreCollection } from "../QueryGQL/getGenreCollection";

import { NavBarComponent } from "../Components/NavBarComponent";

export const NavbarContainer = () => {
  const { data, error } = useQuery(getGenreCollection);
  const collection = data && collectionGenre(data);

  return (
    <>
      {error && <span>Error: {error.message}</span>}
      <NavBarComponent collection={collection} />
    </>
  );
};

const collectionGenre = data => data.GenreCollection.map(genre => genre);
