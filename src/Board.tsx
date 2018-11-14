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

type GetGameSquaresInputProps = {
  match: {
    params: {
      id: string;
    };
  };
};

type GetGameSquaresVariables = {
  id: string;
};

type GetGameSquaresResponse = {
  getGameSquares: [Square];
};

type ChildProps = ChildDataProps<
  GetGameSquaresInputProps,
  GetGameSquaresResponse,
  GetGameSquaresVariables
>;

const boardWithGame = graphql<
  GetGameSquaresInputProps,
  GetGameSquaresResponse,
  GetGameSquaresVariables,
  ChildProps
>(GAME_SQUARE_QUERY, {
  options: ({
    match: {
      params: { id }
    }
  }) => {
    return {
      variables: { id }
    };
  }
});

class Board extends React.Component<ChildProps> {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    const { loading, getGameSquares, error } = this.props.data;
    if (loading) return <h1>Loading</h1>;
    if (error) return <h1>Error</h1>;
    console.log(getGameSquares);
    return <h1>We got data</h1>;
  }
}

export default boardWithGame(Board);
