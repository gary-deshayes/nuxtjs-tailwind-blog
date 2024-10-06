import { defineEventHandler } from 'file://C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/node_modules/h3/dist/index.mjs';
import { towns as towns$1 } from 'C:/Users/Gary/Documents/Projets/nuxtjs-tailwind-blog/data/town';

const defineSitemapEventHandler = defineEventHandler;

function asSitemapUrl(url) {
  return url;
}

const towns = defineSitemapEventHandler(async () => {
  return towns$1.map((town) => {
    const formattedTown = town.toLowerCase().replace(/\s+/g, "-").replace(/[éèêë]/g, "e").replace(/[ç]/g, "c");
    return asSitemapUrl({ loc: `https://portfolio.gary-deshayes.com/developpeur-web-fullstack/${formattedTown}` });
  });
});

export { towns as default };
//# sourceMappingURL=towns.mjs.map
