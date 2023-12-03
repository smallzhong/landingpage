# LightQuantum's Profile Page

Website: [lightquantum.me](https://lightquantum.me)

## As a template

You are free to use this repo as a template for your own website. Please read [License](#license) for more information.

## Customize

### Content

1. **Name** - Edit `app/(profile)/layout.tsx`.
2. **Avatar** - Replace `app/(profile)/avatar.jpg` with your own avatar. Also replace `public/favicon.ico`.
3. **Profile** - Edit `app/(profile)/*/page.mdx` to change the content of your profile pages. If you added or removed
   pages, please also modify `app/(profile)/layout.tsx` to reflect the changes in the nav bar.
4. **Schedule** - Edit `app/schedule/page.tsx` to include ics urls of your schedule.
5. **Twitter Timeline** - Modify `timeline_config.ts` to include your [twitter id](https://twiteridfinder.com/). Also,
   change the `id` prop of `<Timeline />` components.
6. **Footer** - Edit `app/(profile)/layout.tsx` to change the content of the footer. To credit me (and yourself)
   properly, you may wish to modify the footer.

Check [FAQ](#faq) for more information.

### Theme

This site uses [catppuccin](https://github.com/catppuccin/catppuccin) as the theme.
It has multiple variants. You can switch to a different variant by modifying `app/layout.tsx`.

To change specific colors, please modify `tailwind.config.js` and `app/globals.css`.

Look for `THEME:` comments in the codebase for more information.

## Deploy

### Without Twitter Timeline

1. Fork this repo. Modify the content in `app/(profile)` folder.
2. Delete `app/api` and `app/admin`. Remove all `<Timeline />` components.
3. [Deploy](https://developers.cloudflare.com/pages/framework-guides/deploy-anything/#deploy-with-cloudflare-pages) your
   website to Cloudflare Pages.
   Please choose `next.js` as the framework, and change the build command to `pnpx @cloudflare/next-on-pages@1`.

### With Twitter Timeline

1. Fork this repo. Modify the content in `app/(profile)` folder.
2. Modify `timeline_config.ts` to include your [twitter id](https://twiteridfinder.com/).
   You can include multiple ids. Only tweets from these ids can be fetched.
3. `pnpx wrangler d1 create DB_TWEET`. Paste the output to `wrangler.toml`.
4. `pnpx wrangler d1 execute DB_TWEET --file=./migrations/up.sql` to setup the database.
5. [Deploy](https://developers.cloudflare.com/pages/framework-guides/deploy-anything/#deploy-with-cloudflare-pages) your
   website to Cloudflare Pages.
   Please choose `next.js` as the framework, and change the build command to `pnpx @cloudflare/next-on-pages@1`.
6. [Bind](https://developers.cloudflare.com/pages/platform/functions/bindings/#d1-databases) your newly created D1
   database as `DB_TWEET` to your page.
   Also, [create](https://developers.cloudflare.com/kv/get-started/#create-a-kv-namespace-via-the-dashboard) a new KV
   namespace and [bind](https://developers.cloudflare.com/pages/platform/functions/bindings/#kv-namespaces) it as
   `__NEXT_ON_PAGES__KV_SUSPENSE_CACHE` to your page.
7. [Add](https://developers.cloudflare.com/pages/platform/build-configuration/#environment-variables) required
   environment variables to cloudflare pages.
    - `TWITTER_API_KEY` - Twitter API Key. You can get one for free
      at [Twitter Developer](https://developer.twitter.com/en/portal/dashboard).
      When it asks for your callback URL, please enter `https://<your domain>/api/auth/twitter/callback`.
    - `TWITTER_API_SECRET` - Twitter API Secret.
    - `AUTH_SECRET` - A random string. `openssl rand -base64 32` is a good way to generate one.
    - `AUTH_URL` - The URL of your website.
8. Go to `/admin`, and you will be redirected to Twitter to login.
   Then, go back to `/admin` and click `Update Token`.

## Development

Run `pnpm run dev` if you don't need to test the twitter timeline. Otherwise, follow the steps below.

1. Set required environment variables as described above. You can use `lvh.me` (resolves to localhost) as callback URL
   to test locally.
2. Set up the D1 database. Go to the end of `next.config.mjs` and modify the database id to your own.
3. Run `pnpm run dev` to start the development server.
4. Run `pnpx @cloudflare/next-on-pages@1` to test build. Check [troubleshooting](#troubleshooting) if you encounter
   errors.

> There's a bug in `@cloudflare/next-on-pages` that prevents us from authenticating with Twitter locally.
>
> Set env var `SKIP_CF_BINDINGS` to `true` when logging in to Twitter. After that, remove this env var to enable
> bindings again.

## Troubleshooting

1. `The following routes were not configured to run with the Edge Runtime: blabla`
    - You need to switch to edge runtime to deploy the website to cloudflare pages.
    - You can do this by adding `export const runtime = "edge"` to `blabla/page.tsx`.
    - If you are using MDX, please create a dummy `layout.tsx` file alongside `blabla/page.mdx`.
      Check [this](app/(profile)/misc/layout.tsx) for example.

## FAQ

1. How to make text italic without being bold in MDX?\
   Use `:it[blabla]`.
2. How to add custom Tailwind styles to paragraphs in MDX?\
   Use `::p[blabla]{.your-class}`.
3. I'd like to add a line break in a paragraph, but not start a new paragraph.\
   Add `\` at the end of the line.
4. `<Image />` component causes error when building.\
   This is a bug in next.js. I've added a workaround. All you need to do is to remove the import statement of `Image` in
   MDX files.
5. How to add a new page?
    - Create a new folder in `app/(profile)`. Add `page.mdx` to the folder.
    - Add it to the nav bar by modifying `app/(profile)/layout.tsx`.
6. I noticed you added some new syntax to MDX. How can I use them / add my own?\
   Check custom components in `mdx-components.tsx`. Also, refer
   to [remark-directive-rehype](https://github.com/IGassmann/remark-directive-rehype).

## License

All rights reserved for images, documents, slides, PDFs, MDXs, and all files under `public`.
The rest of the code is licensed under MIT.

You can use this repo as a template for your own website, but you must replace all the content with your
own. Please also bring your own favicon and avatar.