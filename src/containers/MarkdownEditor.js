'use client';
import React, { useMemo, useState } from 'react';
import MDXComponent from '@/components/MDXComponent';

//TODO fix not re-rendering
export default function MarkdownEditor() {
  const [mdxText, setMdxText] = useState('');

  const PreviewMemo = useMemo(() => {
    return (
      <div className="bg-white text-black h-screen">
        <h2 className="text-xxl font-bold">Preview</h2>
        <MDXComponent
          mdxStr={`I **love** using [Next.js](https://nextjs.org/)`}
        />
        {mdxText}
      </div>
    );
  }, [mdxText]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div>
        <h2 className="text-xxl font-bold">Editor</h2>
        <textarea
          id="w3review"
          name="w3review"
          rows="50"
          cols="50"
          value={mdxText}
          className="!text-black"
          onChange={(e) => {
            setMdxText(e.target.value);
          }}
        />
      </div>
      {PreviewMemo}
    </div>
  );
}
