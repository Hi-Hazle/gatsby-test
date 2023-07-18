/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
   siteMetadata: {
      title: "delivan.dev",
      author: "Jeonghyeok Yoo",
      description: "This blog is powered by gatsby",
      siteUrl: "https://test.dev"
   },
   plugins: [
      "gatsby-plugin-image",
      "gatsby-plugin-sitemap",
      {
         resolve: "gatsby-plugin-manifest",
         options: {
            icon: "src/images/icon.png"
         }
      },
      "gatsby-plugin-sharp",
      "gatsby-transformer-sharp",
      {
         resolve: "gatsby-source-filesystem",
         options: {
            name: "images",
            path: "./src/images/"
         },
         __key: "images"
      }
   ]
}
