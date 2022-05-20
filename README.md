##INFO
Estos funcionan con el Dockerfile

docker build -t node-rest . - Para ejecutar el proyecto 
docker run -it -p 4000:3000 node-rest - Para ejecutar el proyecto con las interaciones
docker run -d -p 4000:3000 node-rest - Para ejecutar el proyecto como servicio

docker images - Para ver las imagenes creadas
docker ps - Para ver las imagenes ejecutando

docker exec -it demorest bash - Para acceder a bash de la imagen

--

Estos funcionan con el docker-compose.yml y Dockerfile


docker-compose build - Para reconstruir el proyecto
docker-compose up - Para ejecutar el proyecto
docker-compose stop - Para detener el proyecto

##CONNECT DB 
localhost 27018