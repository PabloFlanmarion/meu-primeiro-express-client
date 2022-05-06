const axios = require('axios');



const api = axios.create({
    baseUrl: 'http://localhost:3000',
    timeout: 1000,
    responseType: 'json'
});

const config = {
    headers: { 'X-Requested-With': 'XMLHttpRequest' }
}

axios.get('http://localhost:3000/test', config).then(resp => {

    console.log(resp.data);
    console.log(resp.data.nome);
    console.log(resp.data.codigo);

    test('Valida o codigo', () => {
        expect(1).toBe(resp.data.codigo);
    });

});