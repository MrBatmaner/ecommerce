module.exports = {
  images: {
    domains: ["links.papareact.com", "fakestoreapi.com", "drive.google.com", "www.pngitem.com", "joker-uploads.s3.ap-southeast-2.amazonaws.com"],
  },
  env: {
    stripe_public_key: process.env.STRIPE_PUBLIC_KEY
  },
};

const nextConfig = {
  distDir: "build", //this line will tell the build to create a file with this name
};

module.exports = nextConfig;