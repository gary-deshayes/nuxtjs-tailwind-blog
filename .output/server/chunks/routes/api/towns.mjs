import { d as defineEventHandler } from '../../runtime.mjs';
import 'node:http';
import 'node:https';
import 'lru-cache';
import 'fs';
import 'path';
import 'vue';
import 'node:crypto';
import 'node:fs';
import 'node:url';
import 'shiki/core';
import '@shikijs/transformers';
import 'unified';
import 'mdast-util-to-string';
import 'micromark';
import 'unist-util-stringify-position';
import 'micromark-util-character';
import 'micromark-util-chunked';
import 'micromark-util-resolve-all';
import 'micromark-util-sanitize-uri';
import 'slugify';
import 'remark-parse';
import 'remark-rehype';
import 'remark-mdc';
import 'remark-emoji';
import 'remark-gfm';
import 'rehype-external-links';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'detab';
import 'hast-util-to-string';
import 'github-slugger';
import 'xss';
import 'ipx';

const defineSitemapEventHandler = defineEventHandler;

function asSitemapUrl(url) {
  return url;
}

const towns$1 = [
  "Paris",
  "Marseille",
  "Lyon",
  "Toulouse",
  "Nice",
  "Nantes",
  "Strasbourg",
  "Montpellier",
  "Bordeaux",
  "Lille",
  "Rennes",
  "Reims",
  "Le Havre",
  "Saint-\xC9tienne",
  "Toulon",
  "Grenoble",
  "Dijon",
  "Angers",
  "N\xEEmes",
  "Villeurbanne",
  "Clermont-Ferrand",
  "Le Mans",
  "Aix-en-Provence",
  "Brest",
  "Limoges",
  "Tours",
  "Amiens",
  "Metz",
  "Besan\xE7on",
  "Orl\xE9ans",
  "Saint-Denis",
  "Mulhouse",
  "Rouen",
  "Perpignan",
  "Caen",
  "Boulogne-Billancourt",
  "Nancy",
  "Argenteuil",
  "Saint-Paul",
  "Montreuil",
  "Roubaix",
  "Tourcoing",
  "Nanterre",
  "Avignon",
  "Vitry-sur-Seine",
  "Cr\xE9teil",
  "Dunkerque",
  "Poitiers",
  "Asni\xE8res-sur-Seine",
  "Courbevoie",
  "Versailles",
  "Colombes",
  "Fort-de-France",
  "Aubervilliers",
  "Aulnay-sous-Bois",
  "La Rochelle",
  "Rueil-Malmaison",
  "Champigny-sur-Marne",
  "Antibes",
  "Saint-Maur-des-Foss\xE9s",
  "Calais",
  "B\xE9ziers",
  "Cannes",
  "Colmar",
  "Drancy",
  "Ajaccio",
  "Bourges",
  "M\xE9rignac",
  "Saint-Nazaire",
  "Valence",
  "Quimper",
  "Levallois-Perret",
  "Issy-les-Moulineaux",
  "Villeneuve-d'Ascq",
  "Noisy-le-Grand",
  "Neuilly-sur-Seine",
  "Troyes",
  "Antony",
  "Pau",
  "Clichy",
  "Lorient",
  "Niort",
  "Montauban",
  "Ivry-sur-Seine",
  "Sarcelles",
  "Chamb\xE9ry",
  "Les Abymes",
  "Hy\xE8res",
  "\xC9vry-Courcouronnes",
  "Cagnes-sur-Mer",
  "Pessac",
  "Arles",
  "Saint-Quentin",
  "Beauvais",
  "La Seyne-sur-Mer",
  "Cholet",
  "Mantes-la-Jolie",
  "Pantin",
  "Meaux",
  "Ch\xE2lons-en-Champagne",
  "Saint-Brieuc",
  "Montlu\xE7on",
  "Saint-Malo",
  "Albi",
  "Brive-la-Gaillarde",
  "Belfort",
  "Bayonne",
  "Chartres",
  "\xC9pinay-sur-Seine",
  "Jou\xE9-l\xE8s-Tours",
  "Charleville-M\xE9zi\xE8res",
  "Douai",
  "Gap",
  "Sartrouville",
  "Al\xE8s",
  "Castres",
  "Carcassonne",
  "Sevran",
  "Wattrelos",
  "Chelles",
  "Thionville",
  "Rez\xE9",
  "Le Blanc-Mesnil",
  "Mont\xE9limar",
  "Angoul\xEAme",
  "\xC9vreux",
  "Le Cannet",
  "Dieppe",
  "Villejuif",
  "Massy",
  "Blois",
  "Garges-l\xE8s-Gonesse",
  "Thonon-les-Bains",
  "Saint-Ouen",
  "Grasse",
  "Melun",
  "Gennevilliers",
  "Livry-Gargan",
  "Maisons-Alfort",
  "Suresnes",
  "Fontenay-sous-Bois",
  "Boulogne-sur-Mer",
  "Talence",
  "Saint-Herblain",
  "Caluire-et-Cuire",
  "Martigues",
  "Alfortville",
  "Bagneux",
  "Douarnenez",
  "Saint-Priest",
  "Vannes",
  "Puteaux",
  "Chalon-sur-Sa\xF4ne",
  "Saint-Germain-en-Laye",
  "Agen",
  "Roanne",
  "Annemasse",
  "Saint-Beno\xEEt",
  "Vienne",
  "Montmorency",
  "Saint-Rapha\xEBl",
  "Ch\xE2tenay-Malabry",
  "Sainte-Genevi\xE8ve-des-Bois",
  "Le Perreux-sur-Marne",
  "Taverny",
  "Houilles",
  "Charenton-le-Pont",
  "Gagny",
  "Savigny-sur-Orge",
  "Montrouge",
  "S\xE8te",
  "Draguignan",
  "Tournefeuille",
  "Franconville",
  "Maisons-Laffitte",
  "Soissons",
  "Montigny-le-Bretonneux",
  "Cavaillon",
  "Le Chesnay-Rocquencourt",
  "La Courneuve",
  "Saint-Cloud",
  "Clamart",
  "Sannois",
  "Ch\xE2tillon",
  "Houilles",
  "Villefranche-sur-Sa\xF4ne",
  "Nevers",
  "Vierzon",
  "Dole",
  "Oyonnax",
  "\xC9pernay",
  "Sens",
  "Arras",
  "Saint-Di\xE9-des-Vosges",
  "Bastia"
];

const towns = defineSitemapEventHandler(async () => {
  return towns$1.map((town) => {
    const formattedTown = town.toLowerCase().replace(/\s+/g, "-").replace(/[éèêë]/g, "e").replace(/[ç]/g, "c");
    return asSitemapUrl({ loc: `/developpeur-web-fullstack/${formattedTown}` });
  });
});

export { towns as default };
//# sourceMappingURL=towns.mjs.map
