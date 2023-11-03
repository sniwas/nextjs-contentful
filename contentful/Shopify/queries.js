import { gql } from "@apollo/client";

const GET_PRODUCT_DETAILS = gql`
  query getListedProducts {
    shopifyCollection {
      total
      items {
        title
        content_data {
          id
          title
          description
          handle
        }
      }
    }
  }
`;

export { GET_PRODUCT_DETAILS };
