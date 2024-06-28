import createMDX from '@next/mdx'
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  // headers: async () => {
  //   return [
  //     {
  //       source: "/",
  //       headers: [
  //         {key: 'Cross-Origin-Embedder-Policy', value: 'require-corp' },
  //         {key: 'Cross-Origin-Opener-Policy', value: 'same-origin' }
  //       ]
  //     }
  //   ]
  // }
}
 
const withMDX = createMDX()
 
export default withMDX(nextConfig)