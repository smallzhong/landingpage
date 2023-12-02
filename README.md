# LightQuantum's Profile Page

Website: [lightquantum.me](https://lightquantum.me)

## Twitter Timeline

1. Modify `timeline_config.ts` to include your twitter id. (https://twiteridfinder.com/)
2. Add `<Timeline id="1727578673375760384" />` to wherever you want to display the timeline.
   > If you are using MDX, please beware that you need to switch to edge runtime to deploy the website to cloudflare
   pages.
   >
   > You can do this by add an dummy `layout.tsx` file with route segment config set. Check [this](app/(profile)/misc/layout.tsx) for example.
3. Add required enviroment variables to cloudflare pages.
   - `TWITTER_API_KEY` - Twitter API Key. You can get one for free at [Twitter Developer](https://developer.twitter.com/en/portal/dashboard).
      When it asks for your callback URL, please enter `https://<your domain>/api/auth/twitter/callback`.
   - `TWITTER_API_SECRET` - Twitter API Secret.
   - `AUTH_SECRET` - A random string. `openssl rand -base64 32` is a good way to generate one.
   - `AUTH_URL` - The URL of your website.
4. Go to `/admin` to add your Twitter account.