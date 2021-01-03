const fetch = require('node-fetch');
// レスポンスは必要ないのであえてawaitしない
const port = ENV['PORT'] || '3000'
fetch(`http://localhost:${port}/api/wishLists`, { method: 'POST' })