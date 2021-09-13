import { useRouter } from 'next/router';
import Layout from '../../components/Layout';

export default function Details() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Layout pageTitle="Details">
      <p>
Detail user
{'  '}
{id}
{'  '}
      </p>
    </Layout>
  );
}
