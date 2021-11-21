import React from 'react';
//import {useRouter} from 'next/router';
import Link from 'next/link';
import { server } from '../../../config';

const article = ({user}) => {
    console.log(user);
    // const router = useRouter();
    // const { id } = router.query;
    return (
        <>
            <h1>User #{user.id}: {user.email}</h1>
            <Link href='/'>Back to Home</Link>
        </>
    )
}

// const article = () => {
//     //console.log(article.id);
//     const router = useRouter();
//     const { id } = router.query;
//     return (
//         <>
//             <div>This is article {id}</div>
//             <Link href='/'>Back to Home</Link>
//         </>
//     )
//     //return `This is an article`; 
// }

// export const getServerSideProps = async (context) => {
//     console.log(context);
//     //const res = await fetch(`https://reqres.in/api/users/${context.params.id}`);
//     const res = await fetch(`${server}/api/users/${context.params.id}`);
//     const joke = await res.json();

//     return {
//         props: {users}
//     }
// }

export const getStaticProps = async (context) => {
    //const res = await fetch(`https://reqres.in/api/users/${context.params.id}`);
    const res = await fetch(`${server}/api/users/${context.params.id}`);
    const user = await res.json();
  
    return { props: { user }}
}

export const getStaticPaths = async () => {
    //const res = await fetch('https://reqres.in/api/users');
    const res = await fetch(`${server}/api/users`);
    const users = await res.json();
    console.log(users.data);        
    const ids = users.data.map(user => user.id);
    const paths = ids.map(id => ({params: {id: id.toString()}}));
    console.log(paths);

    return {
        paths,
        fallback: false
    }
}

export default article;