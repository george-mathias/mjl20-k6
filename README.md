**executando testes**  
k6 run ./tests/login.test.js  

**gerando relatorio web**  
K6_WEB_DASHBOARD=true k6 run ./tests/login.test.js  

**gerando e exportando relatorio web**  
K6_WEB_DASHBOARD=true K6_WEB_DASHBOARD_EXPORT=html-report.html k6 run ./tests/login.test.js

**load test types**  
[Load test types documentation](https://grafana.com/docs/k6/latest/testing-guides/test-types/#load-test-types)  
