import swaggerJSDoc from 'swagger-jsdoc';

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'My API',
        version: '1.0.0',
        description: 'API documentation for my application',
    },
    servers:{
        url:"http://localhost:"+(process.env.PORT || 5000),
    },
    components: {
        securitySchema:{
            bearerAuth:{          //use this name in the security section below for the routes that require authentication by the
                type:"http",      // earer ka literal meaning: Jiske paas valid token hai, woh us 
                                  // token ke through protected API access kar sakta hai.
                scheme:"bearer",
                bearerFormat:"JWT"
            }
        }
    },
    security:[{
        bearerAuth:[]
    }]

};

const options = {
    swaggerDefinition,
    apis: ['./routes/*.js'], // Path to the API docs
    //means routes folder ke ander jitna js files h usme swagger use ho skta h
};

