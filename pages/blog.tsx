import Layout from '../components/Layout';
import styles from '../styles/Blogs.module.css';

interface Post{
  id: number;
  userId:number;
  title: string;
  body:string;
}

interface BlogProps{
  dataBlogs : Post[];
}

export default function blog(props:BlogProps) {
  const { dataBlogs } = props;
  return (
   <Layout pageTitle="Blog Pages">
    {dataBlogs.map((datablog) => (
        <div key={datablog.id} className={styles.card}>
        <h3>{datablog.title}</h3>
        <p>{datablog.body}</p>
        </div>
    ))}
   </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const dataBlogs = await res.json();

  return {
    props: {
      dataBlogs,
    },
  };
}
