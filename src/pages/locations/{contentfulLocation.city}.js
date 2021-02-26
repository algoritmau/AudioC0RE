import React from "react";
import { graphql } from "gatsby";

export default function City({ data }) {
  return (
    <div>
      <h1>Hi, I am the {data.contentfulLocation.city} page</h1>
      <span>{`${data.contentfulLocation.address.lat}, ${data.contentfulLocation.address.lon}`}</span>
      <h2>{data.contentfulLocation.description}</h2>
    </div>
  );
}

export const query = graphql`
  query QueryLocationsInfo($id: String = "") {
    contentfulLocation(id: { eq: $id }) {
      city
      slug
      description
      address {
        lat
        lon
      }
    }
  }
`;
