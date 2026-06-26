import http from 'k6/http';
import { sleep, check } from 'k6';
import { obterToken } from '../helpers/autenticacao.js'
const transferencia = JSON.parse(open("../fixtures/postTransferencias.json"));

export const options = {
    // iterations: 1,
    stages: [
        { duration: '5s', target: 10 },
        { duration: '5s', target: 10 },
        { duration: '5s', target: 0 }
    ],
    thresholds: {
        http_req_failed: ['rate < 0.01'],
        http_req_duration: [
            'p(90) < 3000',
            'max < 5000'
        ]
    }
};

export default function () {
    const url = 'http://localhost:3000/transferencias';
    const token = obterToken();
    const payload = JSON.stringify(transferencia)
    const params = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    }

    const res = http.post(url, payload, params)
    check(res, { "status is 201": (res) => res.status === 201 });

    sleep(1);
}
