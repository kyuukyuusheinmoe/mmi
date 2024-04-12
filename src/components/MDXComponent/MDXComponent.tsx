import React from 'react';
import { MDXRemote } from 'next-mdx-remote/rsc';

const MDXComponent = ({ mdxStr }: { mdxStr: string }) => {
  console.log('xxx mdxStr ', mdxStr);
  return <MDXRemote source={mdxStr} />;
};

export default MDXComponent;
