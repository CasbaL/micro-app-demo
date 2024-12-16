# 复现步骤

- 主框架启动
  ```zsh
    pnpm i
    pnpm dev
  ```
- Micro-app 文档页面
  ```
  docker pull casbal/demo:latest
  docker run --network=bridge -p 3003:80 --restart=no --label='description=A demo Dockerfile for build Docsify.' --runtime=runc -d casbal/demo:latest
  ```
