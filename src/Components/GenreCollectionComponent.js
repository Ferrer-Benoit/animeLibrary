import React from "react";
import { useQuery } from "draqula";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from "styled-components";
import { getGenreCollection } from "../QueryGQL/getGenreCollection";


import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export const GenreCollectionComponent = () => {
  const { data, isLoading, error, fetchMore } = useQuery(getGenreCollection);
  const collection = data && collectionGenre(data);

  return <Container>{collection}</Container>;
};

const collectionGenre = data =>
  data.GenreCollection.map(genre => (
    <Card style={{ width: "20%", margin: "1rem" }}>
     {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title>{genre}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  ));


const Container = styled.div`
display: flex;
flex-wrap: wrap;
flex-direction: column;
justify-content: center;
overflow-x: scroll;
height: 30%`;
