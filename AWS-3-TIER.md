
# ☁️ AWS 3-Tier Deployment

> 🚧 AWS and DevOps deployment roadmap for this project.

### 🏗️ AWS Architecture

```text
Users
  ↓
Application Load Balancer
  ↓
EC2 + Docker
  ↓
Amazon RDS MySQL
```

### 🌐 VPC & Networking
```text

- VPC
- Public Subnets
- Private Subnets
- Internet Gateway
- NAT Gateway
- Route Tables
- Security Groups
- NACL
```
### 🖥️ EC2 + ALB + RDS
```text
### 🖥️ Amazon EC2
```text
- Runs the Node.js application
- Docker container runs on EC2
- Application listens on port `3000`
```

### ⚖️ Application Load Balancer
```text

- Receives user requests
- Distributes traffic to EC2 instances
- Provides a single application endpoint
```
### 🗄️ Amazon RDS MySQL
```text

- Managed MySQL database
- Stores employee records
- Database is placed in a private subnet
- EC2 connects to RDS on port `3306`
```
### 📈 Auto Scaling
```text

- Launch Template
- Auto Scaling Group (ASG)
- Minimum and maximum EC2 instances
- Automatically adds EC2 instances when traffic increases
- Automatically removes EC2 instances when traffic decreases
- ALB distributes traffic across healthy EC2 instances
```

### 🔄 Jenkins CI/CD

```text
Developer
    ↓
GitHub
    ↓
Jenkins
    ↓
Build & Test
    ↓
Docker Image
    ↓
Docker Registry
    ↓
AWS Deployment
```

### ☸️ Kubernetes + Helm
```text

- Kubernetes
- Pods
- Deployments
- Services
- ConfigMaps
- Secrets
- Ingress
- HPA
- Helm Charts
- `values.yaml`
```

### 📊 Monitoring
```text
### 🔥 Prometheus
- Collects application and infrastructure metrics
- Monitors Kubernetes resources
- Stores time-series metrics

### 📈 Grafana

- Visualizes Prometheus metrics
- Creates monitoring dashboards
- Helps track CPU, memory and application metrics

- ## ☁️ CloudWatch + CloudTrail

### 📊 Amazon CloudWatch

- AWS resource monitoring
- CPU and memory monitoring
- Application and system logs
- Metrics and alerts

### 🔐 AWS CloudTrail

- Records AWS API activity
- Tracks actions performed in AWS
- Helps with auditing and security monitoring
```
