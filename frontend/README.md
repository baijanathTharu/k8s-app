This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Building Docker Container

```sh
docker build --build-arg NEXT_PUBLIC_BACKEND_URL=http://localhost:5000 -t k8s-frontend .
```

## Running Docker Container

```sh
docker run -p 3000:3000 --env NEXT_PUBLIC_BACKEND_URL=http://localhost:5000 --name k8s-frontend k8s-frontend
```
