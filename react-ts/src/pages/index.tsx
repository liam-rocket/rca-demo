import type { NextPage } from 'next';
import Head from 'next/head';
import { Box } from '@mui/material';
import { JWTLogin } from '../components/auth/jwt-login';

const Login: NextPage = () => {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <Box
        sx={{
          flexGrow: 1,
          mt: 3,
        }}
      >
        <JWTLogin />
      </Box>
    </>
  );
};

export default Login;
