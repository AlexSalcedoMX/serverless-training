const { generateResponse } = require('../../utils/response')

module.exports.main = async (event) => {
  console.log(`Event: ${event}`)
  const { filter } = event.queryStringParamters
  console.log(`Filter value: ${filter}`)
  // Filter is required
  if (!filter) {
    return generateResponse({
      statusCode: 400,
      body: { message: 'Query string parameter is required: filter'}
    })
  }
  return generateResponse({
    statusCode: 200,
    body: { message: 'Get user' }
  })
};

