import { FormEvent, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Axios from 'axios';
import InputGroup from '../components/InputGroup';
import { useRouter } from 'next/router';
import { useAuthDispatch, useAuthState } from '../context/auth';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<any>({});

  const disptach = useAuthDispatch();
  const { authenticated } = useAuthState();
  const router = useRouter();

  if (authenticated) router.push('/');

  const submitForm = async (event: FormEvent) => {
    event.preventDefault(); // to prevent reloading after submit

    try {
      const res = await Axios.post('/auth/login', {
        username,
        password,
      });

      disptach('LOGIN', res.data);

      router.push('/');
    } catch (err) {
      setErrors(err.response.data);
    }
  };

  return (
    <div className="flex bg-white">
      <Head>
        <title>Login</title>
      </Head>

      <div
        className="h-screen bg-cover w-33"
        style={{ backgroundImage: "url('/images/bricks.jpg'" }}
      />
      <div className="flex flex-col justify-center pl-6">
        <div className="w-72">
          <h1 className="mb-2 text-lg font-medium">Login</h1>
          <p className="mb-10 text-xs">
            By continuing, you agree to our User Agreement and Privacy Policy.
          </p>

          <form onSubmit={submitForm}>
            <InputGroup
              className="mb-2"
              type="username"
              value={username}
              setValue={setUsername}
              placeholder="Username"
              error={errors.username}
            />
            <InputGroup
              className="mb-4"
              type="password"
              value={password}
              setValue={setPassword}
              placeholder="Password"
              error={errors.password}
            />

            <button className="w-full py-2 mb-4 text-xs font-bold text-white uppercase bg-blue-500 border border-blue-500 rounded">
              Login
            </button>
          </form>
          <small>
            New to Readit?
            <Link href="/register">
              <a className="ml-1 text-blue-500 uppercase">Sign Up</a>
            </Link>
          </small>
        </div>
      </div>
    </div>
  );
}
