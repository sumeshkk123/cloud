export default {
  routes: [
    {
      method: 'POST',
      path: '/pricing-access/request-otp',
      handler: 'api::pricing-submission.pricing-submission.requestOtp',
      config: {
        auth: false,
        policies: [],
        middlewares: []
      }
    },
    {
      method: 'POST',
      path: '/pricing-access/verify-otp',
      handler: 'api::pricing-submission.pricing-submission.verifyOtp',
      config: {
        auth: false,
        policies: [],
        middlewares: []
      }
    },
    {
      method: 'GET',
      path: '/pricing-access/catalogue',
      handler: 'api::pricing-submission.pricing-submission.pricingItems',
      config: {
        auth: false,
        policies: [],
        middlewares: []
      }
    }
  ]
};
