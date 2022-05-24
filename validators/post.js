const Ajv = require('ajv');
const ajv = new Ajv({ allErrors: true });

const postSchema = {
  type: 'object',
  properties: {
    title: { type: 'string', minLength: 2, maxLength: 120 },
    subTitle: { type: 'string', minLength: 2, maxLength: 300 },
    postBody: { type: 'string', minLength: 2, maxLength: 10000 },
  },
  required: ['title', 'postBody'],
};
const validate = ajv.compile(postSchema);

module.exports = (req, res, next) => {
  if (validate(req.body)) next();
  else return res.status(400).json(validate.errors);
};
