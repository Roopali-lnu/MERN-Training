//Give an example of a callback function to handle async operation in javascript (use any open api to make a call)
const axios = require('axios');

function asynFun(callback) {
    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            callback(response.data);
        })
        .catch((error) => {
            callback('Get an Error:', error);
        });
}

function asynFun1(data) {
    console.log('User Response:', data);
}

asynFun(asynFun1);




