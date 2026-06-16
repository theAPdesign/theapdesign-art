# The AP Design

Modern, premium, single-page creative studio portfolio for `theapdesign.art`.

## Tech Stack

- React + Vite
- Tailwind CSS
- Static deploy ready
- Responsive single-page layout

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The production output is generated in `dist/`.

## Cloudflare Pages

1. Push this project to a GitHub repository.
2. In Cloudflare Dashboard, open **Workers & Pages**.
3. Select **Create application** → **Pages** → **Connect to Git**.
4. Choose the repository.
5. Use these build settings:
   - Framework preset: `Vite`
   - Build command: `npm run build`
   - Build output directory: `dist`
6. Deploy the project.
7. Add the custom domain `theapdesign.art` in **Custom domains**.

## Vercel

1. Push this project to a GitHub repository.
2. In Vercel, select **Add New** → **Project**.
3. Import the repository.
4. Vercel should detect Vite automatically.
5. Confirm these settings:
   - Build command: `npm run build`
   - Output directory: `dist`
6. Deploy the project.
7. Add `theapdesign.art` under **Project Settings** → **Domains**.

## GitHub Pages

1. Build the project:

```bash
npm run build
```

2. Deploy the `dist/` folder using your preferred GitHub Pages workflow.
3. For a custom domain, add `theapdesign.art` in the repository Pages settings.
