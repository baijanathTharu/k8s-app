# Deployment using Kubernetes Locally using minikube

## Prerequisites

### Frontend

- Build Docker Container

Read the [frontend/README.md](frontend/README.md) for further instructions.

- Push Docker image to Docker Hub

### Backend

- Build Docker Container

Read the [backend/README.md](backend/README.md) for further instructions.

- Push Docker image to Docker Hub

- Start minkube

```sh
minikube start
```

### Deployment

#### Frontend

- Create Kubernetes Deployment

```sh
kubectl create deployment frontend --image=baijan/k8s-frontend:v1
```

- Expose the Service to the World

```sh
kubectl expose deployment frontend --type=LoadBalancer --port=3000 --target-port=3000
```

- Update to minikube

```sh
minikube service frontend
```

#### Backend

- Create Kubernetes Deployment

```sh
kubectl create deployment backend --image=baijan/k8s-backend:v1
```

- Expose the Service to the World

```sh
kubectl expose deployment backend --type=LoadBalancer --port=5000 --target-port=5000
```

- Update to minikube

```sh
minikube service backend
```

## Cleanup

Delete the minikube cluster

```sh
minikube delete
```
