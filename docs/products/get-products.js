module.exports = {
    get: {
        tags: ['Product'],
        description: 'get all product',
        operationID: 'getProducts',
        parameters: [
            {
                name: 'q',
                in: 'query',
                schema: {
                    type: 'number',
                    description: 'search for specific product',
                    example: '1',
                },
                required: true,
                description: 'A product id',
            },
            {
                name: 'page',
                in: 'query',
                schema: {
                    type: 'number',
                    description: 'page of products',
                    example: 'page=2',
                },
                description: 'get specific page of products',
            },
        ],
        responses: {
            200: {
                description: 'one product',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items:{
                                $ref: '#/components/schemas/Product',
                            }
                        }
                    }
                }
            }
        }
    }
}