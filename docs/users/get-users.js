module.exports = {
    get: {
      tags: ["Users"],
      description: "Get list of all users",
      operationId: "getUsers",
      parameters: [],
      responses: {
        200: {
          description: "successful list of users",
          content: {
            "application/json": {
              schema: {
                  type: 'array',
                  items: {
                      $ref: "#/components/schemas/User",
                  },
              },
            },
          },
        },
      },
    },
  };