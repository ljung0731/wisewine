/**
 * products.js
 *
 * The store's products are defined as an Array of product Objects.
 * Each product Object includes the following properties:
 *
 *  - id: String, a unique product identifier (e.g., "P1", "P2")
 *  - title: String, a short name for the product (e.g., "Gingerbread Cookie")
 *  - description: String, a description of the product
 *  - price: Number, the unit price of the item in whole cents (e.g., 100 = $1.00, 5379 = $53.79)
 *  - discontinued: Boolean, whether or not the product has been discontinued
 *  - categories: Array, the category id or ids to which this product belongs (e.g., ["c1"] or ["c1", "c2"])
 */

window.products = [
  {
    /*The follwing images are used for the purpose of this assignment only.
      The images are from vivino.com */

    //c1
    id: "p1",
    title: "Gaja Barbaresco",
    description: "Nebbiolo/14% ABV/Piedmonte, Italy",
    price: 26997,
    discontinued: false,
    categories: ["c1"],
    imageUrl: "img/Gaja_Barbaresco.png"
  },
  {
    id: "p2",
    title: "Louis Latour Corton Grancey",
    description: "Pinot Noir/13.5% ABV/Burgundy, France",
    price: 6994,
    discontinued: false,
    categories: ["c1"],
    imageUrl: "img/Louis_Latour.png"
  },
  {
    id: "p3",
    title: "Macan clasico",
    description: "Red Blend/14.5% ABV/Rioja, Spain",
    price: 17500,
    discontinued: false,
    categories: ["c1"],
    imageUrl: "img/Macan_Classico.png"
  },
  {
    id: "p4",
    title: "Prazo De Roriz Douro",
    description: "Red Blend/14.3% ABV/Portugal",
    price: 1599,
    discontinued: true,
    categories: ["c1"],
    imageUrl: "img/Prazo_de_roriz.png"
  },
  {
    id: "p5",
    title: "Tyler Winery Sanford and Benedict Pinot Noir 2019",
    description: "Pinot Noir/13.5% ABV/Santa Barbara, California.",
    price: 9999,
    discontinued: false,
    categories: ["c1"],
    imageUrl: "img/Tyler_pinot2019.png"
  },
  {
    id: "p6",
    title: "Charles Krug Cabernet Sauvignon",
    description: "Cabernet Sauvignon/14.1% ABV/Napa Valley, California, United States",
    price: 3188,
    discontinued: false,
    categories: ["c1"],
    imageUrl: "img/Charles_CS.png"
  },
  {
    id: "p7",
    title: "Ruffino Riserva Ducale Chianti Classico",
    description: "Red Blend/14% ABV/Tuscany, Italy",
    price: 2699,
    discontinued: false,
    categories: ["c1"],
    imageUrl: "img/Ruffino_riserva.png"
  },
  {
    id: "p8",
    title: "La Vieille Ferme Rouge",
    description: "Red Blend/13.5% ABV/Rhone, France",
    price: 899,
    discontinued: false,
    categories: ["c1"],
    imageUrl: "img/La_vieille.png"
  },
  {
    id: "p9",
    title: "Santa Margherita Chianti Classico Riserva DOCG",
    description: "Red Blend/13.5% ABV/Tuscany, Italy",
    price: 2529,
    discontinued: false,
    categories: ["c1"],
    imageUrl: "img/Santa_margherita_chianti_classico.png"
  },
  {
    id: "p10",
    title: "Chateau Lyonnat Bordeaux",
    description: "Red Blend/13.5% ABV/Saint-Emilion, Bordeaux, France",
    price: 2399,
    discontinued: false,
    categories: ["c1"],
    imageUrl: "img/Gaja_Barbaresco.png"
  },
  {
    id: "p11",
    title: "Ruffino Il Ducale Toscana IGT",
    description: "Proprietary Red Blend/13.7% ABV/Tuscany, Italy",
    price: 2399,
    discontinued: false,
    categories: ["c1"],
    imageUrl: "img/Louis_Latour.png"
  },
  {
    id: "p12",
    title: "Alamos Malbec",
    description: "Malbec/13.6% ABV/Mendoza, Argentina",
    price: 1454,
    discontinued: false,
    categories: ["c1"],
    imageUrl: "img/Macan_Classico.png"
  },
  {
    id: "p13",
    title: "Antigal Uno Malbec",
    description: "Malbec/13.9% ABV/Mendoza, Argentina",
    price: 1799,
    discontinued: true,
    categories: ["c1"],
    imageUrl: "img/Prazo_de_roriz.png"
  },
  {
    id: "p14",
    title: "Francis Coppola Diamond Collection Malbec",
    description: "Malbec/14.1% ABV/California, United States",
    price: 2199,
    discontinued: false,
    categories: ["c1"],
    imageUrl: "img/Charles_CS.png"
  },
  {
    id: "p15",
    title: "Duckhorn Vineyards Napa Valley Merlot",
    description: "Merlot/14.5% ABV/California, United States",
    price: 5579,
    discontinued: false,
    categories: ["c1"],
    imageUrl: "img/Louis_Latour.png"
  },
  {
    id: "p16",
    title: "Recanati Upper Galilee Merlot",
    description: "Merlot/14% ABV/Galilee, Israel",
    price: 2199,
    discontinued: false,
    categories: ["c1"],
    imageUrl: "img/Macan_Classico.png"
  },
  {
    id: "p17",
    title: "Culitos Merlot",
    description: "Merlot/11.5% ABV/Chile",
    price: 1199,
    discontinued: false,
    categories: ["c1"],
    imageUrl: "img/Ruffino_riserva.png"
  },
  {
    id: "p18",
    title: "Domaine Faiveley Mercurey Rouge",
    description: "Pinot Noir/13.5% ABV/Burgundy, France",
    price: 7999,
    discontinued: false,
    categories: ["c1"],
    imageUrl: "img/Tyler_pinot2019.png"
  },
  {
    id: "p19",
    title: "Amayna Pinot Noir",
    description: "Pinot Noir/14.5% ABV/Chile",
    price: 3699,
    discontinued: false,
    categories: ["c1"],
    imageUrl: "img/Macan_Classico.png"
  },
  {
    id: "p20",
    title: "Il Borro Toscana",
    description: "Red Blend/Tuscany IGT, Tuscany, Italy",
    price: 2955,
    discontinued: false,
    categories: ["c1"],
    imageUrl: "img/Tyler_pinot2019.png"
  },
  //c2
  {
    id: "p21",
    title: "Bartenura Moscato",
    description: "Moscato/5% ABV/Lombardy, Italy",
    price: 2199,
    discontinued: false,
    categories: ["c2"],
    imageUrl: "img/Charles_CS.png"
  },
  {
    id: "p22",
    title: "Oyster Bay Sauvignon Blanc",
    description: "Sauvignon Blanc/13% ABV/Marlborough, New Zealand",
    price: 1899,
    discontinued: true,
    categories: ["c2"],
    imageUrl: "img/Louis_Latour.png"
  },
  {
    id: "p23",
    title: "Murphy-Goode North Coast Sauvignon Blanc",
    description: "Sauvignon Blanc/13.5% ABV/Sonoma County, California, United States",
    price: 1699,
    discontinued: true,
    categories: ["c2"],
    imageUrl: "img/Macan_Classico.png"
  },
  {
    id: "p24",
    title: "Bonterra Organic Sauvignon Blanc",
    description: "Sauvignon Blanc/13% ABV/California, United States",
    price: 1899,
    discontinued: false,
    categories: ["c2"],
    imageUrl: "img/Tyler_pinot2019.png"
  },
  {
    id: "p25",
    title: "19 Crimes Sauvignon Block",
    description: "Sauvignon Blanc/12% ABV/Australia",
    price: 1999,
    discontinued: false,
    categories: ["c2"],
    imageUrl: "img/Santa_margherita_chianti_classico.png"
  },
  {
    id: "p26",
    title: "Fournier Sancerre",
    description: "Sauvignon Blanc/1.5% ABV/Loire, France",
    price: 1999,
    discontinued: false,
    categories: ["c2"],
    imageUrl: "img/Tyler_pinot2019.png"
  },
  {
    id: "p27",
    title: "Ponga Sauvignon Blanc",
    description: "Sauvignon Blanc/12.5% ABV/New Zealand",
    price: 11004,
    discontinued: false,
    categories: ["c2"],
    imageUrl: "img/Tyler_pinot2019.png"
  },
  {
    id: "p28",
    title: "Domaine Cherrier Sancerre",
    description: "Sauvignon Blanc/12.5% ABV/Loire, France",
    price: 4555,
    discontinued: false,
    categories: ["c2"],
    imageUrl: "img/Gaja_Barbaresco.png"
  },
  {
    id: "p29",
    title: "Vietti Moscato d'Asti Cascinetta Vietti",
    description: "Moscato/5% ABV/Piedmonte, Italy",
    price: 9999,
    discontinued: false,
    categories: ["c2"],
    imageUrl: "img/Prazo_de_roriz.png"
  },
  {
    id: "p30",
    title: "Marco Negri Moscato D Asti",
    description: "Moscato/5.5% ABV/Piedmonte, Italy",
    price: 2345,
    discontinued: false,
    categories: ["c2"],
    imageUrl: "img/Gaja_Barbaresco.png"
  },
  {
    id: "p31",
    title: "90+ Cellars Pinot Grigio (Lot 42)",
    description: "Pinot Grigio/14.5% ABV/Trentino-Alto Adige, Italy",
    price: 1199,
    discontinued: true,
    categories: ["c2"],
    imageUrl: "img/Charles_CS.png"
  },
  {
    id: "p32",
    title: "La Crema Monterey Pinot Gris",
    description: "Pinot Grigio/13.5% ABV Monterey County, California, United States",
    price: 1954,
    discontinued: true,
    categories: ["c2"],
    imageUrl: "img/Prazo_de_roriz.png"
  },
  {
    id: "p33",
    title: "Italo Cescon Pinot Grigio",
    description: "Pinot Grigio/12% ABV/Alto adige, Italy",
    price: 1954,
    discontinued: false,
    categories: ["c2"],
    imageUrl: "img/Ruffino_riserva.png"
  },
  {
    id: "p34",
    title: "Josh Cellars Chardonnay",
    description: "Chardonnay/13.5% ABV/California, United States",
    price: 9999,
    discontinued: false,
    categories: ["c2"],
    imageUrl: "img/Santa_margherita_chianti_classico.png"
  },
  {
    id: "p35",
    title: "Bread & Butter Chardonnay",
    description: "Chardonnay/13.5% ABV/California, United States",
    price: 1799,
    discontinued: false,
    categories: ["c2"],
    imageUrl: "img/Prazo_de_roriz.png"
  },
  {
    id: "p36",
    title: "Gerard Bertrand Cote des Roses Chardonnay",
    description: "Chardonnay/13% ABV/Languedoc, Languedoc-Roussillon, France",
    price: 2145,
    discontinued: true,
    categories: ["c2"],
    imageUrl: "img/Louis_Latour.png"
  },
  {
    id: "p37",
    title: "Albert Bichot Pouilly-Fuisse Blanc",
    description: "Chardonnay/13.5% ABV/Burgundy, France",
    price: 5599,
    discontinued: false,
    categories: ["c2"],
    imageUrl: "img/Prazo_de_roriz.png"
  },
  {
    id: "p38",
    title: "Schmitt Sohne Rieslingc",
    description: "Riesling/9.5% ABV/Germany",
    price: 1324,
    discontinued: false,
    categories: ["c2"],
    imageUrl: "img/Gaja_Barbaresco.png"
  },
  {
    id: "p39",
    title: "Gobelsburger Riesling",
    description: "Riesling/12.5% ABV/Austria",
    price: 2199,
    discontinued: false,
    categories: ["c2"],
    imageUrl: "img/Tyler_pinot2019.png"
  },
  {
    id: "p40",
    title: "Knoll Smaragd Loibenberg Riesling 2015",
    description: "Riesling/12.5% ABV/Austria",
    price: 6000,
    discontinued: false,
    categories: ["c2"],
    imageUrl: "img/Louis_Latour.png"
  },
  {
    id: "p41",
    title: "Rock Angel Rosé",
    description: "Pink Wine/14% ABV/Côtes de Provence, Provence, France",
    price: 3599,
    discontinued: false,
    categories: ["c3"],
    imageUrl: "img/Ruffino_riserva.png"
  },
  {
    id: "p42",
    title: "Alpes de Haute Lavendette Provence Rosé",
    description: "Pink Wine/13.5% ABV/Provence, France",
    price: 1599,
    discontinued: false,
    categories: ["c3"],
    imageUrl: "img/Santa_margherita_chianti_classico.png"
  },
  {
    id: "p43",
    title: "Cote Mas Rosé Aurore",
    description: "Pink Wine/13% ABV/Languedoc, France",
    price: 1399,
    discontinued: false,
    categories: ["c3"],
    imageUrl: "img/Gaja_Barbaresco.png"
  },
  {
    id: "p44",
    title: "Chateau Ste. Michelle Columbia Valley Rosé",
    description: "Pink Wine/13% ABV/United States",
    price: 1399,
    discontinued: false,
    categories: ["c3"],
    imageUrl: "img/Louis_Latour.png"
  },
  {
    id: "p45",
    title: "La Crema Monterey Pinot Noir Rose",
    description: "Pink Wine/13.5% ABV/Monterey, Monterey County, California, United States",
    price: 1999,
    discontinued: true,
    categories: ["c3"],
    imageUrl: "img/Prazo_de_roriz.png"
  },
  {
    id: "p46",
    title: "Chloe Rosé Wine",
    description: "Pink Wine/11% ABV/California, United States",
    price: 1599,
    discontinued: false,
    categories: ["c3"],
    imageUrl: "img/Macan_Classico.png"
  },
  {
    id: "p47",
    title: "Diora La Belle Fete Rosé of Pinot Noir",
    description: "Pink Wine/13% ABV/California, United States",
    price: 1899,
    discontinued: false,
    categories: ["c3"],
    imageUrl: "img/Tyler_pinot2019.png"
  },
  {
    id: "p48",
    title: "Copain Les Voisins Rose Wine",
    description: "Pink Wine/13% ABV/United States",
    price: 8699,
    discontinued: false,
    categories: ["c3"],
    imageUrl: "img/Charles_CS.png"
  },
  {
    id: "p49",
    title: "Il Conte Stella Rosa Berry",
    description: "Pink Wine/5.5% ABV/Piedmonte, Italy",
    price: 45099,
    discontinued: false,
    categories: ["c3"],
    imageUrl: "img/Ruffino_riserva.png"
  },
  {
    id: "p50",
    title: "Castello Del Poggio Rosé",
    description: "Pink Wine/7% ABV/Italy",
    price: 1699,
    discontinued: false,
    categories: ["c3"],
    imageUrl: "img/La_vieille.png"
  },
  {
    id: "p51",
    title: "Pratello Sant'Emiliano Chiaretto Rose D.O.C.",
    description: "Pink Wine/12.5% ABV/Lombardy, Italy",
    price: 2799,
    discontinued: false,
    categories: ["c3"],
    imageUrl: "img/Gaja_Barbaresco.png"
  },
  {
    id: "p52",
    title: "Va Vina Aljibles Rosé",
    description: "Pink Wine/12.5% ABV/Spain",
    price: 1123,
    discontinued: false,
    categories: ["c3"],
    imageUrl: "img/Louis_Latour.png"
  },
  {
    id: "p53",
    title: "Armas De Guerra Mencia Rosé",
    description: "Pink Wine/12.5% ABV/Castilla y Leon, Spain",
    price: 1398,
    discontinued: true,
    categories: ["c3"],
    imageUrl: "img/Macan_Classico.png"
  },
  {
    id: "p54",
    title: "Lopez De Heredia Vina Tondonia Rose",
    description: "Pink Wine/13% ABV/Rioja, Spain",
    price: 5899,
    discontinued: false,
    categories: ["c3"],
    imageUrl: "img/Prazo_de_roriz.png"
  },
  {
    id: "p55",
    title: "Casal Garcia Vinho Verde Rosé",
    description: "Pink Wine/9.5% ABV/Minho, Portugal",
    price: 989,
    discontinued: false,
    categories: ["c3"],
    imageUrl: "img/Tyler_pinot2019.png"
  },
  {
    id: "p56",
    title: "Ventozela Espadeiro Rosé",
    description: "Pink Wine/11.5% ABV/Minho, Portugall",
    price: 1499,
    discontinued: true,
    categories: ["c3"],
    imageUrl: "img/Charles_CS.png"
  },
  {
    id: "p57",
    title: "Banshee Rosé Pinot Noir Mendocino County",
    description: "Pink Wine/13.5% ABV/California, United States",
    price: 2199,
    discontinued: false,
    categories: ["c3"],
    imageUrl: "img/Ruffino_riserva.png"
  },
  {
    id: "p58",
    title: "Wölffer Estate Rosé",
    description: "Pink Wine/12.8% ABV/New York, United States",
    price: 1899,
    discontinued: false,
    categories: ["c3"],
    imageUrl: "img/La_vieille.png"
  },
  {
    id: "p59",
    title: "Erath Rosé of Pinot Noir",
    description: "Pink Wine/13% ABV/Oregon, United States",
    price: 1499,
    discontinued: false,
    categories: ["c3"],
    imageUrl: "img/Tyler_pinot2019.png"
  },
  {
    id: "p59",
    title: "Purato Terre Siciliane Rosé",
    description: "Pink Wine/12.5% ABV/Sicily, Italy",
    price: 1299,
    discontinued: false,
    categories: ["c3"],
    imageUrl: "img/Louis_Latour.png"
  },
  {
    id: "p60",
    title: "Le Due Arbie Rosato",
    description: "Pink Wine/13% ABV/Tuscany, Italy",
    price: 1116,
    discontinued: false,
    categories: ["c3"],
    imageUrl: "img/Prazo_de_roriz.png"
  }
];

//
