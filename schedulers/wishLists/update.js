const fetch = require('node-fetch');
// レスポンスは必要ないのであえてawaitしない
fetch('http://localhost:3000/api/wishLists', { method: 'POST' })