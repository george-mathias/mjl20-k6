import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
    iterations: 5,
    thresholds: {
        http_req_failed: ['rate < 0.01'],
        http_req_duration: [
            'p(90) < 1.70', 
            'p(95) < 1.60', 
            'max < 1'
        ]
    }
}

export default function () {
    const url = 'http://localhost:3000/login'
    const payload = JSON.stringify({
        username: "julio.lima",
        senha: "123456"
    })
    const params = {
        headers: {
            "Content-Type": "application/json"
        }
    }

    const res = http.post(url, payload, params)
    // console.log(res.body)
    check(res, {
        'status 200': (r) => r.status === 200,
        'validar se o token é uma string': (r) => typeof(r.json().token) == 'string'
    })

    sleep(1)
}