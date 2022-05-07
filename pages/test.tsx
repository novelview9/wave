import { createClient, gql, Provider, useQuery } from 'urql';

const query = gql`
  query AllFreeArticle {
    allFreeArticle(limit: 2, offset: 1) {
      totalCount
    }
  }
`;

const Text = () => {
  const [result, reexecuteQuery] = useQuery({
    query: query,
  });

  console.log(result)
  return <h1>test</h1>;
};
export default Text;