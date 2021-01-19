const { generateResponse } = require('../../utils/response')

 
module.exports.main = async event => {
  return generateResponse({
    statusCode: 200,
    body: { message: 'Add user' }
  })
};

