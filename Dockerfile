FROM node:22

RUN corepack enable
COPY . /app
WORKDIR /app
RUN pnpm install
COPY package.json pnpm-lock.yaml ./
COPY . .
RUN pnpm build
CMD ["pnpm", "http-server", "dist"]
