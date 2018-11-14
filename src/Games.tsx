import React from "react";
import gql from "graphql-tag";
import { graphql, ChildDataProps } from "react-apollo";
import { Link } from "react-router-dom";

const GET_GAMES_QUERY = gql`
  query getAllGames {
    allGames {
      _id
    }
  }
`;

type Game = {
  _id: string;
};

type GetGamesResponse = {
  allGames: [Game];
};

type ChildProps = ChildDataProps<{}, GetGamesResponse, {}>;

const gameWithGames = graphql<{}, GetGamesResponse, {}, ChildProps>(
  GET_GAMES_QUERY
);

class Games extends React.Component<ChildProps> {
  onGameClick = (gameID: string) => () => {
    console.log(gameID);
    console.log(this.props);
  };
  render() {
    const { loading, allGames, error } = this.props.data;
    if (loading) return <h1>Loading</h1>;
    if (error) return <h1>Error</h1>;
    if (allGames) {
      return allGames.map((game: Game) => (
        <Link to={`/board/${game._id}`} key={game._id}>
          <h1>{game._id}</h1>
        </Link>
      ));
    }
    return <h1>We have data</h1>;
  }
}

export default gameWithGames(Games);
