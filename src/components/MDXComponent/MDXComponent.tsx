import React from "react";
import { MDXRemote } from "next-mdx-remote/rsc";

const MDXComponent = ({ mdxStr }: { mdxStr: string }) => {
  return <MDXRemote source={mdxStr} />;
};

export default MDXComponent;
