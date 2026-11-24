import http from 'k6/http'
import { check, sleep } from 'k6'

export const options = {
  vus: 50,          // 50 usuários virtuais simultâneos
  duration: '3m',   // 3 minutos de execução
  thresholds: {
    http_req_failed: ['rate<0.01'],     // menos de 1% de erro
    http_req_duration: ['p(95)<800'],   // 95% das respostas em até 800 ms
  },
}

export default function () {
  const res = http.get('https://jsonplaceholder.typicode.com/posts')

  check(res, {
    'status é 200': (r) => r.status === 200,
    'corpo não está vazio': (r) => r.body.length > 0,
  })

  sleep(1) // pausa de 1 segundo, simulando um usuário real
}