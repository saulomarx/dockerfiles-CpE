module.exports = {
  apps: [
    {
      name: 'backend',
      script: './src/bin/www',
      watch: '.',
      autorestart: true,
    },
  ],
};
