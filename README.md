

Make visible images on the minikube

eval $(minikube docker-env)


Build Docker image

docker build -t <name> .


Delete deployment

kubectl delete deployment.apps/api-deployment service/api-service


Apply deployment

kubectl apply -f <deployment-name>.yaml 


Run kubernetes dashboard

minikube dashboard