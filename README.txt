Para rodar localmente é necessário instalar a dependência "http-server".
Basta executar: npm install
Após isso execute a linha de comando: http-server
O console irá informar o endereço local onde está sendo executado.

O projeto não vai funcionar normalmente apenas abrindo o index.html devido 
importação de script utilizando type module, pois resulta em erro de CORS.