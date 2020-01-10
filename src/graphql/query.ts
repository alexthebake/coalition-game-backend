import { GraphQLObjectType, GraphQLList } from "graphql";
import PlayerType from "./types/PlayerType";
import QuestionType from "./types/QuestionType";

const RootQueryType = new GraphQLObjectType({
  name: "RootQueryType",
  fields: () => ({
    player: {
      type: PlayerType,
      resolve: () => {
        // TODO: Fetch a single player
        return null;
      }
    },
    players: {
      type: new GraphQLList(PlayerType),
      resolve: () => {
        // TODO: Fetch players
        return []
      }
    },
    questions: {
      type: new GraphQLList(QuestionType),
      resolve: () => {
        // TODO: Fetch questions
        return []
      }
    }
  })
})

export default RootQueryType
