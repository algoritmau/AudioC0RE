import React from "react";
import { graphql } from "gatsby";

export default function Home({ data }) {
  const locations = data.allContentfulLocation.edges;

  return (
    <div>
      <h1>
        Hi! I am the <strong>Home</strong> page!
      </h1>
      <ul>
        {locations.map(({ node: location }) => (
          <li key={location.id}>
            {location.city} - {location.description} -{" "}
            {`${location.address.lat}, ${location.address.lon}`}
          </li>
        ))}
      </ul>
    </div>
  );
}

export const query = graphql`
  query QueryLocations {
    allContentfulLocation {
      edges {
        node {
          id
          city
          description
          address {
            lat
            lon
          }
        }
      }
    }
  }
`;
