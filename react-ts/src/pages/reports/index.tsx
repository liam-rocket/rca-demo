import type { NextPage } from 'next';
import Head from 'next/head';
import { useAuth } from 'src/hooks/use-auth';

const Home: NextPage = () => {
  const { user } = useAuth();
  console.log(user);
  return (
    <>
      <Head>
        <title>Reports</title>
      </Head>
      <br />
      {user.name} is logged in !
      <br />
      <br />
      his email is {user.email}
    </>
  );
};

export default Home;
