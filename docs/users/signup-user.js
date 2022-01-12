module.exports = {
    post: {
      tags: ["Users"],
      description: "signup user",
      operationId: "signupUser",
      parametres: [],
      requestBody: {
          description: 'properties for signup',
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                email: {
                  type: "string",
                  descsription: "email пользователя",
                  example: "aadelya2702@mail.ru",
                },
                password: {
                  type: "string",
                  minLength: 3,
                  maxLength: 30,
                  descsription: "пароль пользователя",
                  example: "123456",
                },
                firstName: {
                    type: "string",
                    descsription: "имя пользователя",
                    example: "adelina",
                  },
                  lastName: {
                    type: "string",
                    descsription: "фамилия пользователя",
                    example: "adelina",
                  },
              },
              required: ['email', 'password']
            },
          },
        },
      },
      responses: {
        200: {
          description: "get tokens",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Token",
              },
            },
          },
        },
        400: {
            description: 'User with given creds not found',
            content: {
                "application/json": {
                  schema: {
                    type: 'object',
                    properties: {
                        message: {
                            type: 'string',
                            example: 'User not found'
                        }
                    }
                  },
                },

        }
      },
    }
}
}