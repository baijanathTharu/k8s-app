# a nodejs app

## Run the app

```sh
npm start
```

## Build Docker Container

```sh
docker build -t k8s-backend .
```

## Run Docker Container

```sh
docker run -p 5000:5000 --name k8s-backend k8s-backend
```
