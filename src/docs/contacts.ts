const tags = ['Contacts'];

const get = () => {
  return {
    summary: 'Gets a contact by id',
    description: 'Gets a contact by id',
    tags,
    parameters: [
      {
        in: 'path',
        name: 'id',
        type: 'string',
        required: true,
      },
    ],
    responses: {
      200: {
        description: 'Returns the contact',
      },
    },
  };
};

const post = () => {
  return {
    summary: 'Creates a new contact',
    description: 'Creates a new contact',
    tags,
    requestBody: {
      required: true,
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              name: {
                type: 'string',
                example: 'John Doe',
              },
              email: {
                type: 'string',
                example: 'jdoe@gmail.com',
              },
              phone: {
                type: 'string',
                example: '98765432',
              },
            },
          },
        },
      },
    },
    responses: {
      200: {
        description: 'Returns the created contact',
      },
    },
  };
};

const patch = () => {
  return {
    summary: 'Updates a contact by id',
    description: 'Updates a contact by id',
    tags,
    parameters: [
      {
        in: 'path',
        name: 'id',
        type: 'string',
        required: true,
      },
    ],
    requestBody: {
      required: true,
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              name: {
                type: 'string',
                example: 'John Doe',
              },
              email: {
                type: 'string',
                example: 'johnd@hotmail.com',
              },
              phone: {
                type: 'string',
                example: '12345678',
              },
            },
          },
        },
      },
    },
    responses: {
      200: {
        description: 'Returns the updated contact',
      },
    },
  };
};

const del = () => {
  return {
    summary: 'Deletes a contact by id',
    description: 'Deletes a contact by id',
    tags,
    parameters: [
      {
        in: 'path',
        name: 'id',
        type: 'string',
        required: true,
      },
    ],
    responses: {
      200: {
        description: 'Returns the deleted contact',
      },
    },
  };
};

const Contacts = {
  get,
  post,
  patch,
  del,
};

export { Contacts as default };
