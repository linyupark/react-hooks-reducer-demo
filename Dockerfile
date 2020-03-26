# 部署docker
FROM node:alpine
LABEL maintainer="林宇 <linyupark@gmail.com>"
RUN npm config set registry https://registry.npm.taobao.org
RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.aliyun.com/g' /etc/apk/repositories
RUN apk update && apk add git
RUN mkdir /project
RUN git clone -b 'master' --single-branch --depth 1 https://github.com/linyupark/react-hooks-reducer-demo.git /project/antd-demo
RUN cd /project/antd-demo
RUN npm install -g serve
WORKDIR /project/antd-demo
CMD git pull && npm i && npm run build && serve -s build

EXPOSE 5000