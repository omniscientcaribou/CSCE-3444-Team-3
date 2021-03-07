const fetch = require('node-fetch')
fetch('http://127.0.0.1:8000/api/item')
.then(res => res.json())
.then(data => console.log(data))