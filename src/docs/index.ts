import info from './info';
import servers from './servers';
import contacts from './contacts';

export default () => {
  return {
    openapi: '3.0.3',
    info: info(),
    servers: servers(),
    paths: {
      '/contacts': {
        post: contacts.post(),
      },
      '/contacts/{id}': {
        get: contacts.get(),
        patch: contacts.patch(),
        delete: contacts.del(),
      },
    },
  };
};
