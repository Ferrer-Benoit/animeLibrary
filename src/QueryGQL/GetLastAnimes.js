import gql from "graphql-tag";

export const getLastAnimes = gql`
  query getLastAnimes($status: MediaStatus!, $perPage: Int!) {
    Page(perPage: $perPage) {
      media(status: $status) {
        id
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
