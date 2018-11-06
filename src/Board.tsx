import React from "react";

import gql from "graphql-tag";
import { graphql, ChildDataProps } from "react-apollo";

const GAME_SQUARE_QUERY = gql`
  query getThoseGameSquares($id: ID!) {
    getGameSquares(id: $id) {
      _id
      x
      y
      isTaken
    }
  }
`;

type Square = {
  _id: string;
  isTaken: boolean;
  x: number;
  y: number;
};

type InputProps = {
  id: string;
};

type Variables = {
  id: string;
};

type Response = {
  getGameSquares: [Square];
};

type ChildProps = ChildDataProps<InputProps, Response, Variables>;

const boardWithGame = graphql<InputProps, Response, Variables, ChildProps>(
  GAME_SQUARE_QUERY,
  {
    options: () => ({
      variables: { id: "5bd4bed2dfe6d3b637be8662" }
    })
  }
);

export default boardWithGame(
  ({ data: { loading = true, getGameSquares = null, error = null } }) => {
    if (loading) return <h1>Loading</h1>;
    if (error) return <h1>Error</h1>;
    console.log(getGameSquares);
    return <h1>We got data</h1>;
  }
);
