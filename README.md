This is a [Next.js](https://nextjs.org) static-export website for CATZ Industrial.

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

For a local production preview, run `npm run build` followed by `npm run start` to serve the generated `out` directory.

## Deploy on Cloudflare Pages

The site is configured with `output: "export"`, so `next build` generates the deployable site in `out`.

### Cloudflare dashboard with GitHub

1. Push the repository to GitHub and open **Workers & Pages** in Cloudflare.
2. Create an application, choose **Pages**, then import `tapaycyrickkyle/catz-industrial`.
3. Use `main` as the production branch.
4. Use `npm run build` as the build command and `out` as the build output directory.
5. Deploy, then add `www.catzindustrial.com` under **Custom domains**.

### Direct CLI deployment

Authenticate Wrangler once, then run the deployment script:

```bash
npx wrangler login
npm run deploy:cloudflare
```

### Formspree setup

1. Create a form in Formspree and copy its form ID from the Integration page.
2. Set `NEXT_PUBLIC_FORMSPREE_FORM_ID` in `.env.local` for local testing.
3. Add the same variable in Cloudflare Pages under **Settings > Environment variables** for Production and Preview, then redeploy.

The form sends inquiries to Formspree from the browser. The form ID is public configuration, not a secret API key.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
