module.exports = {
    experimental: {},
  
    // rewrites, redirects, and headers are out of `experimental`
    async rewrites() {
      return [
        {
          "source": "/:sport(nba|nfl|ncaaf|ncaab|mlb|nhl|xfl|bundesliga|premier-league|mls|la-liga|serie-a|champions-league)?/:page(news|betting-guides|sharp-betting|public-picks)/:slug",
          "destination": "/article"
        },
        {
          "source": "/:sport(nba|nfl|ncaaf|ncaab|mlb|nhl|xfl|bundesliga|premier-league|mls|la-liga|serie-a|champions-league)/:page(odds|free-pick-predictions|public-betting|sharp-picks|line-movement)/:filter?/:conference?",
          "destination": "/games"
        }
      ];
    },
  }