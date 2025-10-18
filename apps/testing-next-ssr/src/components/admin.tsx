'use client';

import { Admin as AdminShare } from '@library-testing/ui/react';

export default function Admin() {
  const document = typeof window !== 'undefined' ? window.document : null;

  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.tailwind file.
   */
  return <div className="h-screen">{document !== null && <AdminShare></AdminShare>}</div>;
}
