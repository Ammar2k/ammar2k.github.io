// module.exports = {
//     // Other configurations...

//     // Add this line to enable the static HTML export
//     target: 'experimental-serverless-trace',

//     // This is optional, but you can customize the exportPathMap if needed
//     exportPathMap: function () {
//     return {
//         '/': { page: '/' },
//         // Add other pages if needed
//         }
//     },
// };


// const nextConfig = {}

// module.exports = nextConfig

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     exportPathMap: function() {
//     return {
//         '/': { page: '/' },
//         // Add more routes here
//         // '/about': { page: '/about' },
//         // '/blog': { page: '/blog' },
//         };
//     },
// }

// module.exports = nextConfig

module.exports = {
    // Other configurations...

    trailingSlash: true,

    exportPathMap: async function () {
    return {
        '/': { page: '/' },
        '/about/': { page: '/about' },
        // Add more routes here with trailing slashes
        };
    },
};


// const repo = 'https://github.com/Ammar2k/ammar2k.github.io'
// const assetPrefix = `/${repo}/`
// const basePath = `/${repo}`

// module.exports = {
//   assetPrefix: assetPrefix,
//   basePath: basePath,
// }