import { GraphQLObjectType, GraphQLList } from "graphql";
import PlayerType from "./types/PlayerType";
import QuestionType from "./types/QuestionType";

const RootMutationType = new GraphQLObjectType({
  name: "RootMutationType",
  fields: () => ({
    createPlayer: {
      type: PlayerType,
      resolve: () => {
        // TODO: Create a single player
        return null;
      }
    },
  })
})

export default RootMutationType
