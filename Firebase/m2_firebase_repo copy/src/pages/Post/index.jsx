import '../../App.css';
import { useParams } from 'react-router-dom';
import Layout from '../../container';

function Post() {
  const { postId } = useParams();

  console.log(postId);

  return (
    <header className="App-header">
      <h1>You are viewing Post: {postId}</h1>
    </header>
  );
}

const PostPage = () => (
  <Layout>
    <Post />
  </Layout>
);

export default PostPage;
