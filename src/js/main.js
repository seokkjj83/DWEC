//  const axios = require('axios');


const jobPromise = axios.get('https://jsonplaceholder.typicode.com/users');

jobPromise.then((response) => {
    console.log(response.data);

});