module.exports = {
  apps: [
    {
      name: 'project-name',
      port: '9500',
      exec_mode: 'cluster',
      instances: 2,
      script: './.output/server/index.mjs',
    },
  ],
}
