module.exports = {
    apps: [
      {
        name: 'cyber_school_api',
        script: './server.js',  // Replace with your actual entry file
        env: {
          NODE_ENV: 'production',  // Set production environment variables
        },
        // Render handles automatic deployment via GitHub integration, so no need for deploy config
      },
    ],
  };
  