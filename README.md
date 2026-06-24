**executando testes**  
k6 run ./tests/login.test.js  

**gerando relatorio web**  
K6_WEB_DASHBOARD=true k6 run ./tests/login.test.js  

**gerando relatorio web e exportando**  
K6_WEB_DASHBOARD=true K6_WEB_DASHBOARD_EXPORT=html-report.html k6 run ./tests/login.test.js