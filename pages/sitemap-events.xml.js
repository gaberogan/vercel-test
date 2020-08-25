import React from "react";
const sm = require("sitemap");

import { events } from "./events";

const SPORTS_MAP = {
  NBA: "nba",
  MLB: "mlb",
  NHL: "nhl",
  NFL: "nfl",
  CFB: "ncaaf",
  CBK: "ncaab",
  XFL: "xfl",
  EPL: "premier-league",
  DEB: "bundesliga",
  MLS: "mls",
  ESP: "la-liga",
  ITSA: "serie-a",
  UCL: "champions-league",
};

const getUrl = (sportKey, pageKey, slugId) => {
  let url = `/${pageKey}/${slugId}`;
  if (sportKey) {
    url = `/${sportKey}` + url;
  }
  return url;
};

export const getServerSideProps = async ({ res }) => {
  const sitemap = sm.createSitemap({
    cacheTime: 600000, // 600 sec - cache purge period
    hostname: "https://betql.co",
  });
  const eventObjs = await events();
  for (const event of eventObjs) {
    sitemap.add({
      changefreq: "daily",
      priority: 0.9,
      url: getUrl(
        SPORTS_MAP[event.league.name],
        "game-predictions",
        event.slugId
      ),
    });
  }
  await new Promise((resolve, reject) => {
    sitemap.toXML((err, xml) => {
        if (err) {
          res.statusCode = 500;
          res.end();
          reject();
          return;
        }
        res.setHeader("Content-Type", "text/xml");
        res.write(xml);
        res.end();
        resolve();
      });
  });
  return {
    props: {},
  };
};

function Sitemap() {
  return <div>sitemap</div>;
}

export default Sitemap;
