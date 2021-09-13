import Image from 'next/image';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <>
        <Layout pageTitle="HomePage">
        <Image src="/bajubejo.png" width={500} height={300} alt="bajubejo with yaya4thn" />
        <h1>Irfan Saputra</h1>
        </Layout>
    </>
  );
}
