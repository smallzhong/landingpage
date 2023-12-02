import NextAuth from "next-auth";
import Twitter from "next-auth/providers/twitter";

export const { handlers: { GET, POST }, auth } = NextAuth({
  providers: [
    Twitter({
      clientId: process.env.TWITTER_CLIENT_ID,
      clientSecret: process.env.TWITTER_CLIENT_SECRET
    })
  ],
  callbacks: {
    session: async ({ session, token, user }) => {
      // @ts-ignore
      const { access_token, refresh_token, expires_at } = token.account;
      return { account: { access_token, refresh_token, expires_at, id: token.sub }, ...session };
    },
    jwt: async ({ token, user, account, profile }) => {
      console.log("jwt", { token, user, account, profile });
      return { account, ...token };
    }
  }
});