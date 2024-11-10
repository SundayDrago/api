module.exports = {
    apps: [
      {
        name: 'cyber_school_api',
        script: './server.js',  // Replace with your actual entry file
        env: {
          NODE_ENV: 'production',
        },
        // Render does automatic deployment via GitHub integration
        deploy: {
          repo: 'git@github.com:SundayDrago/api.git',
          ref: 'origin/main', // Adjust if deploying from another branch
          path: '/home/render/deploy', // This is where Render stores deployed apps
          'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production',
        },
      },
    ],
  };
  