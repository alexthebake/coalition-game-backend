import { GraphQLObjectType, GraphQLString, GraphQLID } from "graphql";

const QuestionType = new GraphQLObjectType({
  name: "question",
  fields: {
    id: { type: GraphQLID },
    question: { type: GraphQLString }
  }
});

export default QuestionType;
