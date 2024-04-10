'use client';
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import * as commands from '@uiw/react-md-editor/lib/commands';

const MDEditor = dynamic(
  () => import('@uiw/react-md-editor').then((mod) => mod.default),
  { ssr: false }
);

export default function App() {
  const [value, setValue] = useState('**Hello world!!!**');
  return (
    <div className="container">
      <MDEditor value={value} onChange={setValue} />
    </div>
  );
}
