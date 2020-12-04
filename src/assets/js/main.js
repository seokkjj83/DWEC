            const axios = require('axios');
            document.addEventListener(('DOMContentLoaded'), () => {


                const jobPromise = axios.get('https://jsonplaceholder.typicode.com/users');

                jobPromise.then((response) => {
                    response.data.forEach(name => {
                            let box = document.createElement('div');
                            document.body.appendChild(box);
                            let paragraph1 = document.createElement('p');
                            paragraph1.textContent = JSON.stringify(name.name)
                            box.appendChild(paragraph1);
                            let paragraph2 = document.createElement('p');
                            paragraph2.textContent = JSON.stringify(name.username)
                            box.appendChild(paragraph2);
                            let paragraph3 = document.createElement('p');
                            paragraph3.textContent = JSON.stringify(name.email)
                            box.appendChild(paragraph3);
                            let paragraph4 = document.createElement('p');
                            paragraph4.textContent = JSON.stringify(name.phone)
                            box.appendChild(paragraph4);
                            let paragraph5 = document.createElement('p');
                            paragraph5.textContent = JSON.stringify(name.website)
                            box.appendChild(paragraph5);
                            let boton = document.createElement('button');
                            boton.addEventListener('click', () => axios.delete(name));
                            box.appendChild(boton);

                        }

                    )
                })
            })