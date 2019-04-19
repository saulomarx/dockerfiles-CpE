module.exports = {
  apps: [
    {
      name: 'backend',
      script: './bin/www',
      watch: '.',
      autorestart: true,
    },
  ],
};
