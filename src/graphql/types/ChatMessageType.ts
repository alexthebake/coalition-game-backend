import { GraphQLObjectType, GraphQLString, GraphQLID } from "graphql";
import PlayerType from "./PlayerType";

const ChatMessageType = new GraphQLObjectType({
  name: "chatMessage",
  fields: () => ({
    id: { type: GraphQLID },
    fromPlayer: { type: PlayerType },
    toPlayer: { type: PlayerType },
    message: { type: GraphQLString },
    timestamp: { type: GraphQLString }
  })
});

export default ChatMessageType;
