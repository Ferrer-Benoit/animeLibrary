import React from "react";
import styled from "styled-components";
import { Card, Button, Spinner } from "react-bootstrap";
import isEmpty from "lodash/isEmpty";

export const AnimeListByGenreComponent = ({
  collection,
  handleClickLeft,
  handleClickRight
}) => {
  const list = collection.map((info, index) => {
    const title = info.title["english"] || info.title["native"];
    const description = info.description;
    const slice = `${description.slice(0, 90)} ...`;
    return (
      <Card style={{ width: "30%", margin: "1%" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{slice}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    );
  });

  return (
    <Container>
      <ButtonLeft onClick={handleClickLeft}>X</ButtonLeft>
      {isEmpty(list) ? <Spinner animation="border" variant="light" /> : list}

      <ButtonRight onClick={handleClickRight}>X</ButtonRight>
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap-reverse;
  padding: 3rem 10rem 0 10rem;
  position: relative;
  justify-content: center;
`;

const ButtonRight = styled.div`
  height: 10px;
  width: 10px;
  color: white;
  position: absolute;
  right: 10rem;
  bottom: 0;
  top: 0;
  margin: auto;
`;

const ButtonLeft = styled.div`
  height: 10px;
  width: 10px;
  color: white;
  position: absolute;
  left: 10rem;
  bottom: 0;
  top: 0;
  margin: auto;
`;
