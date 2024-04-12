import React from 'react';
import { MDXRemote } from 'next-mdx-remote/rsc';

const mdxStr = `I **love** using [Next.js](https://nextjs.org/)`;

const MDXComponent = () => {
  return <MDXRemote source={mdxStr} />;
};

export default MDXComponent;
