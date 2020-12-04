const getPosts = () => new Promise ( (resolve, reject) {
const req = new XMLHttpRequest();
req.open('GET' ,'https://jsonplaceholder.typicode.com/todos/1');
req.onload = function () {
    if(req.status === 200){
        this.resolve(JSON.parse(req.responseText));
    }else{
        reject();
    }
};
req.send();    
});

getPosts().then(result => {
    console.log(result);
}).catch((error) => {
    console.log('Algo salió mal', error);
});

