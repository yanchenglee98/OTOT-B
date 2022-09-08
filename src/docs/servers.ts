export default () => {
  return [
    {
      url: 'http://localhost:3000/api', // url
      description: 'Local', // name
    },
    {
      url: 'https://otottaskb1.herokuapp.com/api', // url
      description: 'Heroku', // name
    },
    {
      url: 'https://otottaskb.as.r.appspot.com/api', // url
      description: 'Google Cloud App Enginge', // name
    }
  ];
};
