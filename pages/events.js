import { request } from "graphql-request";

const query = `
  query {
    auth {
      slugs(leagues: [NFL, NBA, NHL, MLB, CFB, CBK, XFL, EPL, DEB, MLS, ESP, ITSA, UCL]) {
        slugId
        league {
          name
        }
      }
    }
  }
`;

const events = async () => {
  try {
    const res = await request("https://api.betql.co/graphql", query);
    return res.auth.slugs;
  } catch (e) {
    console.log("[sitemap-articles] error: ", e);
    return [];
  }
};

export { events };
