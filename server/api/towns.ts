import { asSitemapUrl, defineSitemapEventHandler } from '#imports'
import { towns } from '~/data/town';

export default defineSitemapEventHandler(async () => {
    return towns.map(town => {
        const formattedTown = town.toLowerCase()
          .replace(/\s+/g, '-')
          .replace(/[éèêë]/g, 'e')
          .replace(/[ç]/g, 'c');
        return asSitemapUrl({ loc: `https://portfolio.gary-deshayes.com/developpeur-web-fullstack/${formattedTown}`});
      });
})
