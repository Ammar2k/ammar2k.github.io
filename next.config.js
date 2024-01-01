module.exports = {
    // Other configurations...

    // Add this line to enable the static HTML export
    target: 'experimental-serverless-trace',

    // This is optional, but you can customize the exportPathMap if needed
    exportPathMap: function () {
    return {
        '/': { page: '/' },
        // Add other pages if needed
        }
    },
}


// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig


// const repo = 'https://github.com/Ammar2k/ammar2k.github.io'
// const assetPrefix = `/${repo}/`
// const basePath = `/${repo}`

// module.exports = {
//   assetPrefix: assetPrefix,
//   basePath: basePath,
// }