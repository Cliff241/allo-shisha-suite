import type { Product } from "@/lib/types";

const img = "/brand/product-placeholder.svg";

function product(
  category: string,
  index: number,
  name: string,
  salePrice: number,
  format = "standard",
  description = "Produit premium ALLÔ SHISHA"
): Product {
  const code = category
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/&/g, " ")
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part.slice(0, 3).toUpperCase())
    .join("")
    .slice(0, 12);
  return {
    sku: `ALS-${code}-${String(index).padStart(3, "0")}`,
    name,
    category,
    description,
    image: img,
    format,
    salePrice,
    purchasePrice: Math.max(100, Math.round(salePrice * 0.55)),
    stock: salePrice >= 100000 ? 6 : 24,
    alertThreshold: salePrice >= 100000 ? 2 : 6,
    criticalThreshold: salePrice >= 100000 ? 1 : 3,
    available: true,
    active: true,
    costEstimated: true
  };
}

export const products: Product[] = [
  product("Champagnes", 1, "Coupe de champagne", 12000, "verre"),
  product("Champagnes", 2, "Piscine de champagne", 15000, "verre"),
  product("Champagnes", 3, "Trouillard Rosé", 70000, "bouteille"),
  product("Champagnes", 4, "Trouillard Demi-Sec", 70000, "bouteille"),
  product("Champagnes", 5, "Trouillard Elexium Brut", 80000, "bouteille"),
  product("Champagnes", 6, "Moët & Chandon Brut", 100000, "bouteille"),
  product("Champagnes", 7, "Veuve Clicquot Brut", 120000, "bouteille"),
  product("Champagnes", 8, "Ruinart Blanc de Blancs", 230000, "bouteille"),
  product("Champagnes", 9, "Dom Pérignon", 360000, "bouteille"),
  product("Champagnes", 10, "Cristal Roederer", 400000, "bouteille"),
  product("Whisky au verre", 1, "Jack Daniel's", 5000, "verre"),
  product("Whisky au verre", 2, "Gentleman Jack", 5000, "verre"),
  product("Whisky au verre", 3, "Johnny Walker Black Label", 8000, "verre"),
  product("Whisky bouteilles", 1, "JB's", 55000, "bouteille"),
  product("Whisky bouteilles", 2, "Jack Daniel's", 55000, "bouteille"),
  product("Whisky bouteilles", 3, "Gentleman Jack", 60000, "bouteille"),
  product("Whisky bouteilles", 4, "Chivas 12", 80000, "bouteille"),
  product("Whisky bouteilles", 5, "Chivas 18", 150000, "bouteille"),
  product("Whisky bouteilles", 6, "Johnny Walker Black Label", 160000, "bouteille"),
  product("Whisky bouteilles", 7, "Johnny Walker Blue Label", 200000, "bouteille"),
  product("Cognac", 1, "Hennessy verre", 7000, "verre"),
  product("Cognac", 2, "Hennessy bouteille", 90000, "bouteille"),
  product("Cognac", 3, "Rémy Martin verre", 8000, "verre"),
  product("Cognac", 4, "Rémy Martin bouteille", 90000, "bouteille"),
  product("Cognac", 5, "Hennessy XO verre", 35000, "verre"),
  product("Cognac", 6, "Hennessy XO bouteille", 400000, "bouteille"),
  product("Bières & alcools", 1, "Smirnoff Ice", 3500, "bouteille"),
  product("Bières & alcools", 2, "Régab 33cl", 2000, "33cl"),
  product("Bières & alcools", 3, "Desperados", 3500, "bouteille"),
  product("Bières & alcools", 4, "Guinness", 2000, "bouteille"),
  product("Bières & alcools", 5, "Heineken", 3500, "bouteille"),
  product("Bières & alcools", 6, "Seau Régab x10", 20000, "seau"),
  product("Bières & alcools", 7, "Seau Desperados x10", 35000, "seau"),
  product("Bières & alcools", 8, "Seau Heineken x10", 35000, "seau"),
  product("Shots & tequila", 1, "Patron", 150000, "bouteille"),
  product("Shots & tequila", 2, "Oméga", 50000, "bouteille"),
  product("Shots & tequila", 3, "Shoot 2000", 20000, "shot"),
  product("Shots & tequila", 4, "Casamigos Blanco", 160000, "bouteille"),
  product("Shots & tequila", 5, "Casamigos Reposado", 170000, "bouteille"),
  product("Shots & tequila", 6, "Casamigos Añejo", 200000, "bouteille"),
  product("Shots & tequila", 7, "Don Julio Blanco", 160000, "bouteille"),
  product("Shots & tequila", 8, "Don Julio Reposado", 180000, "bouteille"),
  product("Shots & tequila", 9, "Don Julio Añejo", 200000, "bouteille"),
  product("Shots & tequila", 10, "Mètre de shots x10", 20000, "mètre"),
  product("Softs", 1, "Coca", 2000, "canette"),
  product("Softs", 2, "Orangina", 2500, "bouteille"),
  product("Softs", 3, "Red Bull", 3000, "canette"),
  product("Jus de fruits", 1, "Ananas", 2000, "verre"),
  product("Jus de fruits", 2, "Mangue", 2000, "verre"),
  product("Jus de fruits", 3, "Orange", 2000, "verre"),
  product("Jus de fruits", 4, "Pomme", 2000, "verre"),
  product("Jus de fruits", 5, "Ananas Coco", 2000, "verre"),
  product("Eaux", 1, "Andza 33cl", 1500, "33cl"),
  product("Eaux", 2, "Tonic Imperial", 2000, "bouteille"),
  product("Eaux", 3, "Akewa 6 verres", 1000, "service"),
  ...["Île de la Passion", "La Déclaration", "Le Soleil Tropical", "Le Volcano", "Le Cocomero", "Le Parrot"].flatMap((name, i) => [
    product("Punchs", i * 6 + 1, `${name} Standard`, 5000, "standard"),
    product("Punchs", i * 6 + 2, `${name} XL 10k`, 10000, "XL"),
    product("Punchs", i * 6 + 3, `${name} XL 15k`, 15000, "XL"),
    product("Punchs", i * 6 + 4, `${name} XL 20k`, 20000, "XL"),
    product("Punchs", i * 6 + 5, `${name} Bouteille 15k`, 15000, "bouteille"),
    product("Punchs", i * 6 + 6, `${name} Bouteille 25k`, 25000, "bouteille")
  ]),
  product("Rhums arrangés", 1, "La Passion du Rhum", 20000, "bouteille"),
  product("Rhums arrangés", 2, "Le Rhum", 20000, "bouteille"),
  product("Rhums arrangés", 3, "La Red Lady", 20000, "bouteille"),
  product("Rhums arrangés", 4, "Old Fashioned", 20000, "bouteille"),
  product("Rhums arrangés", 5, "Le Golden", 25000, "bouteille"),
  product("Rhums arrangés", 6, "Le Grog", 20000, "bouteille"),
  product("Rhums arrangés", 7, "L'Aqua Rhum", 15000, "bouteille"),
  product("Rhums arrangés", 8, "L'Étoile du Rhum", 20000, "bouteille"),
  product("Rhums arrangés", 9, "Venus", 25000, "bouteille"),
  product("Rhums arrangés", 10, "Le Palm", 20000, "bouteille"),
  product("Rhums arrangés", 11, "L'Exotica", 20000, "bouteille"),
  product("Rhums arrangés", 12, "Le Choco Rhum", 15000, "bouteille"),
  product("Rhums arrangés", 13, "Le Mangifera", 20000, "bouteille"),
  product("Rhums arrangés", 14, "La Drupe", 25000, "bouteille"),
  product("Suppléments", 1, "Supplément Desperados ou Corona", 3000, "supplément"),
  product("Suppléments", 2, "Whisky arrangé fumé", 8000, "supplément")
];

export const categories = Array.from(new Set(products.map((productItem) => productItem.category)));
