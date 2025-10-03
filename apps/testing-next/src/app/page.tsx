'use client';

import { Admin } from '@library-testing/ui/react';

export default function Index() {
  const document = typeof window !== 'undefined' ? window.document : null;

  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.tailwind file.
   */
  return (
    <div className="h-screen">{document !== null && <Admin></Admin>}</div>
  );
}
