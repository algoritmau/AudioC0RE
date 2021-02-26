import React from "react";
import { graphql, Link } from "gatsby";

export default function Locations({ data }) {
  const locations = data.allContentfulLocation.nodes;

  return (
    <>
      <h1>Locations</h1>
      <ul>
        {locations.map((location) => (
          <li key={location.id}>
            <Link to={`/locations/${location.slug}`}>{location.city}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export const query = graphql`
  query QueryLocationsPage {
    allContentfulLocation {
      nodes {
        slug
        city
        id
      }
    }
  }
`;
