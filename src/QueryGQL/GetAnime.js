import gql from "graphql-tag";

export const getAnime = gql`
  query getAnime($id: Int!) {
    Media(id: $id) {
      id
      title {
        english
        native
      }
      type
      format
      description
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
      episodes
      duration
      countryOfOrigin
      isLicensed
      source
      trailer {
        id
        site
      }
      genres
      siteUrl
      externalLinks {
        id
        url
        site
      }
      bannerImage
    }
  }
`;
