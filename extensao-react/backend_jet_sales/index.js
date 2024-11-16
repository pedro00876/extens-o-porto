const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();


const app = express();
const PORT = process.env.PORT || 5000;

const urlCONTATOS = 'https://crm.rdstation.com/api/v1/contacts?token=66e5f14d9803c30027dc3f70'

app.use(cors());



//contatos (RD Station)
app.get('/api/contacts', async (req, res) => {
    try {
        const response = await axios.get(urlCONTATOS, {
            headers: {
                'Authorization': `Bearer ${process.env.RD_TOKEN}`,
                'Content-Type': 'application/json',
            }
        });


        res.json(response.data);
    } catch (error) {
        console.error('Erro ao fazer a requisição:', error.message);
        res.status(500).json({ error: 'Erro ao buscar dados da API da RD Station' });
    }
});

app.listen(5000, () => {
    console.log('rodando')
})