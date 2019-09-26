import gql from "graphql-tag";

export const getAnimesByGenre = gql`
  query getMediaByGenre($genre: String!, $perPage: Int!, $page: Int!) {
    Page(perPage: $perPage, page: $page) {
      media(genre: $genre) {
        id
        description
        episodes
        coverImage {
          extraLarge
          large
          medium
          color
        }
        startDate {
          year
          month
          day
        }
        endDate {
          year
          month
          day
        }
        title {
          english
          native
        }
      }
    }
  }
`;
