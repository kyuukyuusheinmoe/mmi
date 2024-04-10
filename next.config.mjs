import remoreImports from 'next-remove-imports';

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['next-international', 'international-types'],
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
};

export default remoreImports(nextConfig);
