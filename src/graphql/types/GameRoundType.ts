import { GraphQLObjectType, GraphQLID, GraphQLList } from "graphql";
import PlayerType from "./PlayerType";
import QuestionType from "./QuestionType";

const GameRoundType = new GraphQLObjectType({
  name: "gameRound",
  fields: () => ({
    id: { type: GraphQLID },
    players: { type: new GraphQLList(PlayerType) },
    questions: { type: new GraphQLList(QuestionType) }
  })
});

export default GameRoundType;
