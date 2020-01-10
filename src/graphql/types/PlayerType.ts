import { GraphQLObjectType, GraphQLString, GraphQLID } from "graphql";

const PlayerType = new GraphQLObjectType({
  name: "player",
  fields: {
    id: { type: GraphQLID },
    name: { type: GraphQLString }
  }
});

export default PlayerType;
