module.exports = {
  PORT: process.env.API_PORT || 5001,
  ORIGIN_URL: process.env.ORIGIN_URL || '*',
  OPENAPI_SPEC: 'api/mock/server/openapi.yaml',
}
