---
title: 'KubeSphere allows ZaloPay Ops Team to accrue more time to do other things'
excerpt: KubeSphere allows ZaloPay Ops Team to devote more time and efforts automating management and workflow...
date: 2020-06-22T19:20:00+07:00
thumb_img_path: "/images/kubesphere.jpg"
template: post
subtitle: ''
content_img_path: ''
author: 'tantnd'

---

***

### ZaloPay Introduction

Launched in 2017, ZaloPay is built on the top of Zalo, equipped with many conveniences from Zalo’s ecosystem. There is already an ecosystem at Zalo, a significant volume of Zalo's users (~100 million-active-user).It is relatively competitive compared to MoMo, GrabPay by Moca, ViettelPay, etc.

Similar to AliPay which is one of three tenets of the “iron triangle” (aka e-commerce and logistics), GrabPay is an enabler of the Grab ecosystem and WeChat Pay is on a social media platform. ZaloPay ranked as the 3rd payment application of the year at the 2018 Tech Awards ceremony held by VnExpress, the most common newspaper in Vietnam. While the competitor MoMo took the top spot, followed by Viettel Pay, the rising players of GrabPay by Moca, VinID powered by VinGroup and AirPay by SEA have also joined the market, making the game even more intense.


### We are Enthusiastic about New Technologies
VNG is a big company, working in a wide range of business. We are committed to using cutting-edge frameworks, technologies, and programming languages to develop our products and build infrastructure.

Building and developing software applications that rely on the outdated architecture will cause various problems in scalability, resilience, observability, etc. For example, for the traditional monolithic architecture, it is very difficult to implement changes in such a large and complicated application that is tightly coupled. Besides, the monolithic architecture features terrible scalability with high technology barriers. That means it may postpone your go-to-market strategy and slow the update cycle of your products. However, the fact is that what we want is the fast development and delivery in our business and services need to respond quickly to changes.

Docker and Kubernetes are undoubtedly the best technical architecture tailored for our business needs. I probably don't need to say much about containerization and the benefits. Componentization also allows you to develop faster and more reliably; and Kubernetes automates rollouts and rollbacks, monitoring the health of your apps with probes.


### Adopting Kubernetes and KubeSphere
At the end of 2018, we adopted Kubernetes as the container orchestration solution. Kubernetes helps us to declaratively manage our cluster, allowing our apps to be version controlled and easily replicated. However, the learning curve of Kubernetes is high as there are a series of solutions we need to consider, including logging, monitoring, DevOps and middleware. Actually, we have investigated the most popular tools. For example, we use EFK for logging management and adopt Jenkins as the CI/CD engine for business update. Redis and Kafka are also used in our environment.

These popular tools help us improve development and operation efficiency. Nevertheless, the biggest challenge facing us is that developers need to learn and maintain these different tools; and we need to spend more time switching back and forth between different terminals and dashboards. Hence, we started to research a centralized solution which can bring the cloud native stack within a unified web console. We compared a couple of solutions (e.g. Rancher and native Kubernetes) and KubeSphere has proven to be the most convenient one among them.

We install KubeSphere on our existing Kubernetes cluster, and we have two Kubernetes clusters for sandbox and production respectively. For data privacy, our clusters are all deployed on bare metal machines. We install the highly available cluster using HAProxy to balance the traffic load.

![General Infra](/images/infra-gen.png)

### Why We Choose KubeShpere
Thanks to the developer-friendly web console provided by KubeSphere, we can easily monitor the resource consumption range from infrastructure to applications. Hence, we've been running merchant platform of ZaloPay on KubeSphere very steadily for half a year. KubeSphere also offers a portfolio which integrates and packages the cloud native stack, and provides out-of-box application lifecycle management, monitoring, logging, multi-tenancy, alerting and notification. As each feature and component is pluggable, we can enable them based on our needs.

![KubeSphere Monitoring](/images/monitoring-k8s-cluster.png)
 
![KubeSphere](/images/kubesphere-bef.png)

### How We Implement DevOps
We implement the CI/CD pipeline as a typical and straightforward way, running the merchant platform in ZaloPay. As you can see from the figure below, we run CI/CD pipeline using KubeSphere, stitching GitLab, SonarQube, Docker, Kubernetes, and docker registry. In the first stage, the pipeline will initialize some necessary environments for the entire pipeline. Next, the pipeline will pull the source code from Gitlab by using the environment conditions (like checkout branch, deploy env, tag version). In the third stage, it will build the Golang project and trigger SonarQube to analyze the source code and check the quality. If there is nothing special or significant issue in the code, the pipeline will jump to next stage.

When everything run smoothly, the pipeline will pack the project using Docker in the fourth stage. Then it push the docker image to the Docker Registry. The fifth stage is used to deploy the docker image to the desire environment, including sandbox and production. Then it cleans the pipeline garbage and send an email notification to our team with the running result of pipeline.

![SonaQube](/images/devops-flow.png)

### Code Quality in SonarQube
We use SonarQube for static code quality analysis. The screenshot below is an example of our service analytic result from SonarQube. It helps us to quickly locate the bug and vulnerability in our code.

![SonaQube](/images/sonaqube.png)

### Issues We Meet and Solutions
When we installed KubeSphere, several CRDs were created, for some reason due to testing or something, I reinstalled, and deleted some resources. API server panics handling requests for a CRD with OpenAPI validation with x-kubernetes-int-or-string, etcd was also panic and crashed looply.

This bug appears in Kubernetes versions smaller v1.16.2; it is not secure to upgrade Kubernetes API version and inevitably downtime. Otherwise it will not be possible to access the API; and kubectl or any controller will be terminated.

Bugs are fixed in versions from v1.16.2 +. Please notice and carefully to play with production.

![Issues](/images/issuesk8s.png)

### Testimonial
To meet the needs of centralized management of cloud native stack, we choose to use KubeSphere to strengthen the observability on top of Kubernetes. Now we are able to deploy new microservices and allocate resources within minutes. It also helps developers accelerate the time to market.

KubeSphere allows ZaloPay Ops Team to devote more time and efforts automating management and workflow. It provides smooth user experiences and features a developer-friendly web console which shields the complicated underlying logic, making it easier to manipulate infrastructure resources. KubeSphere represents a fast-growing open source community in the world. KubeSphere community helps a large number of companies and organizations to easily run their business using cloud native technologies, and solve the pain points of Kubernetes itself.

I am a big fan of open source. Open source brings developers closer in the world as we can discuss our proposals and solve our problems in a public and active community. I believe open source is the future of software and I am trying to contribute to the community. I hope KubeSphere can grow the open source community and provide a better product for it.


*Extrinseco: This article is posted in [KubeSphere Case Studies](https://kubesphere.io/case/vng/)*
