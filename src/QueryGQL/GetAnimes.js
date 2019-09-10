import gql from "graphql-tag";

export const getAnimes = gql`
query getAnimes($page: Int!, $perPage: Int!) {
    Page(page: $page, perPage: $perPage) {
      media {
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