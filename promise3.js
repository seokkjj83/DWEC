const axios = require('axios');

const jobPromise = axios.get('https://jsonplaceholder.typicode.com/todos/1');

jobPromise.then((response) => {
    console.log(response.data);
});