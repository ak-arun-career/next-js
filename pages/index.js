import { server } from '../config';
import Head from 'next/head';
import Link from 'next/link';
import Nav from './nav';
import Article from '../components/Article';

import styles from '../styles/Home.module.css';


export default function Home({users}) {
  console.log(users);

  let list =
    users.data.map((user,index) => (
      <Article user={user}
        key={`${user.id}_${index}`}
      />
    ));

  return (
    <div className={styles.container}>
      <Nav />
      <Head>
        <title>NextJS Crash course</title>
        <meta name="keywords" content="NextJS crash course, web programming"></meta>
      </Head>
      <h2>Welcome!!</h2>
      <ul>
          {list}
      </ul>
    </div>
  )
}

export const getStaticProps = async () => {
  //const res = await fetch('https://reqres.in/api/users');
  const res = await fetch(`${server}/api/users`);
  const users = await res.json();

  return { props: { users }}
  
}
