export default {
  routes: [
    {
      method: 'GET',
      path: '/global',
      handler: 'global.find',
      config: {
        auth: false
      }
    },
    {
      method: 'POST',
      path: '/global/sync',
      handler: 'global.sync',
      config: {
        auth: false
      }
    }
  ]
};
