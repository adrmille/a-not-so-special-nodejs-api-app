/**
 * Generate the swagger spec
 * Thanks to http://www.acuriousanimal.com/2018/10/20/express-swagger-doc.html
 */
const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    info: {
      title: 'Insurance Policies API', // Title (required)
      version: '1.0.0', // Version (required)
      description: 'An application that manages some information regarding insurance policies and company clients.',
    },
    securityDefinitions: {
      bearerAuth: {
        type: 'apiKey',
        name: 'Authorization',
        scheme: 'bearer',
        info: 'header',
      }
    }
  },
  // Path to the API docs
  apis: ['./src/routes/*.js'],
};

// Initialize swagger-jsdoc -> returns validated swagger spec in json format
const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;