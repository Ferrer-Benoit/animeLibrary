import React from "react";
import styled, { keyframes } from "styled-components";
import { Card, Button, Spinner, CardGroup } from "react-bootstrap";
import isEmpty from "lodash/isEmpty";

export const AnimeListByGenreComponent = ({
  collection,
  handleClickLeft,
  handleClickRight,
  page
}) => {
  const list = collection.map((info, index) => {
    const title = info.title["english"] || info.title["native"];
    const description = info.description;
    const img = info.coverImage.extraLarge;
    console.log(info);
    const slice = `${description.slice(0, 90)} ...`;
    return (
      <Card style={{ margin: "1rem" }}>
        <Card.Img
          variant="top"
          src={img}
          style={{ objectFit: "cover", height: "30rem" }}
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{slice}</Card.Text>
          <Button href={`/anime?id=${info.id}`} variant="primary">
            More info's
          </Button>
        </Card.Body>
      </Card>
    );
  });

  return (
    <Container>
      {!isEmpty(list) && page !== 1 && (
        <ButtonLeft onClick={handleClickLeft}>{"<"}</ButtonLeft>
      )}
      {isEmpty(list) ? (
        <Spinner animation="border" variant="light" />
      ) : (
        <FadeInButton>
          <CardGroup>{list}</CardGroup>
        </FadeInButton>
      )}
      {!isEmpty(list) && (
        <ButtonRight onClick={handleClickRight}>{">"}</ButtonRight>
      )}
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
  @media (max-width: 1200px) {
    padding: 3rem 5rem 0 5rem;
  }
  @media (max-width: 900px) {
    padding: 3rem 2rem 0 2rem;
  }
`;

const ButtonRight = styled.div`
  height: 50px;
  width: 50px;
  font-size: 65px;
  color: white;
  position: absolute;
  right: 1rem;
  bottom: 0;
  top: 0;
  margin: auto;
  cursor: pointer;
`;

const ButtonLeft = styled.div`
  height: 50px;
  width: 50px;
  color: white;
  font-size: 65px;
  position: absolute;
  left: 1rem;
  bottom: 0;
  top: 0;
  margin: auto;
  cursor: pointer;
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const FadeInButton = styled.div`
  animation: 3s ${fadeIn} ease-out;
`;
