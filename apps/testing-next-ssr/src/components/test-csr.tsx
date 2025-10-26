'use client';

import { useEffect, useState } from 'react';

export const TestCSR = () => {
  const [isMounted, setisMounted] = useState(false);

  useEffect(() => {
    console.log('Test CSR Component mounted');
    setisMounted(true);
  }, []);

  return (
    <div>Test CSR Component; mounted: {isMounted ? 'true' : 'false'}</div>
  );
};
