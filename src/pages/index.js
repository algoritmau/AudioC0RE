import React from "react";
import { graphql } from "gatsby";

export const query = graphql`
  query {
    allContentfulCity {
      edges {
        node {
          id
          name
          description
          location {
            lon
            lat
          }
        }
      }
    }
  }
`;

export default function Home({ data }) {
  const cities = data.allContentfulCity.edges;

  return (
    <div>
      <h1>
        Hi! I am the <strong>Home</strong> page!
      </h1>
      <ul>
        {cities.map(({ node: city }) => (
          <li key={city.id}>
            {city.name} - {city.description} -{" "}
            {`${city.location.lon}, ${city.location.lat}`}
          </li>
        ))}
      </ul>
    </div>
  );
}
