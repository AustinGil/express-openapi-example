const express = require('express');
const app = express();
const oapi = require('@wesleytodd/openapi')()

// Following combination is broken

app.use(oapi) // You have to either comment out this line (breaking all openapi)
app.use('/swaggerui', oapi.swaggerui)
app.use('/:id', require('./_id')); // Or comment out this line (breaking this route)

app.get('/', oapi.path({
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              hello: { type: 'string' }
            }
          }
        }
      }
    }
  }
}), (req, res) => {
  res.json({
    hello: 'world'
  })
})

app.listen(3001, () => {
  console.log('listening on http://localhost:3001')
});
