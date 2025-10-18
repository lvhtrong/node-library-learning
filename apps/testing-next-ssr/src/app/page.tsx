import Admin from '../components/admin';
import { TestCSR } from '../components/test-csr';
import { TestSSR } from '../components/test-ssr';

export default async function Index() {
  return (
    <div>
      <TestSSR />
      <TestCSR />
      <Admin />
    </div>
  );
}
