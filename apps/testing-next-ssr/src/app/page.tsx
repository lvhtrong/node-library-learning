import { Suspense } from 'react';
import { TestCSR } from '../components/test-csr';
import { TestSSR } from '../components/test-ssr';

export default async function Index() {
  return (
    <div>
      <Suspense fallback={<div>Loading SSR Component...</div>}>
        <TestSSR />
      </Suspense>
      <TestCSR />
      {/* <Admin /> */}
    </div>
  );
}
