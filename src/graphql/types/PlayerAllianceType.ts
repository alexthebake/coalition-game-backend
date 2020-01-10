import { GraphQLObjectType, GraphQLID, GraphQLInt } from "graphql";
import PlayerType from "./PlayerType";

const PlayerAllianceType = new GraphQLObjectType({
  name: "playerAlliance",
  fields: () => ({
    id: { type: GraphQLID },
    player: { type: PlayerType },
    alliedPlayer: { type: PlayerType },
    strength: { type: GraphQLInt }
  })
});

export default PlayerAllianceType;
