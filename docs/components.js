module.exports={
    components:{
        isActivated: { type: DataTypes.BOOLEAN, defaultValue: false },
        activationLink: { type: DataTypes.STRING },
        schemas:{
            User: {
                type: "object",
                properties: {
                  id: {
                    type: "number",
                    description: "Уникальный id пользователя",
                    example: "1",
                  },
                  firstName: {
                    type: "string",
                    description: "Имя пользователя",
                    example: "Adelina",
                  },
                  lastName: {
                    type: "string",
                    description: "Фамилия пользователя",
                    example: "adelina",
                  },
                  email: {
                    type: "string",
                    description: "Email пользователя",
                    example: "aadelya2702@mail.ru",
                   
                  },
                  password: {
                    type: "string",
                    description: "Пароль пользователя",
                    example: "qwerty",
                  },
                  role: {
                      type: "string",
                      description: "Роль пользователя",
                      example: "USER"
                  }
                },
            }
              },
              Product: {
                type: 'object',
                properties: {
                    id: {
                        type: 'number',
                        description: "Уникальный id продукта",
                        example: "1",
                    },
                    img: {
                        type: 'string',
                        description: "Изображение",
                        example: 'Без названия.jpeg',
                    },
                    name: {
                        type: 'string',
                        description: "Название",
                        example: "Без название"
                    },
                    category: {
                        type: 'enum',
                        description: "Ктегории продуктов",
                        example:"Салат",
                    },
                    composition: {
                        type: 'string',
                        description: "Состав продукта",
                        example: "1 чайная ложка соли"
                    },
                    price: {
                        type: 'number',
                        description: "Цена продукта",
                        example: "123",
                    },
        },
    },
    // Comment: {
    //     type: "object",
    //     properties: {
    //         id: {
    //             type: 'number',
    //             description: "Уникальный id продукта",
    //             example: "1",
    //         },
    //         text: {
    //             type: "text",
    //             description: "Ваш комментарий",
    //             example: "SO delicious"
    //         }
    //     }
    // }
}
}
