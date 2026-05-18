# ALLÔ SHISHA Suite

Application professionnelle pour lounge/bar : POS, commande QR table, catalogue, stock, finances, RH, émargement, facturation et reporting.

## Stack

- Next.js 16, React 19, TypeScript, Tailwind CSS
- PostgreSQL 18 via Prisma
- Redis prêt pour cache, queues et temps réel
- Docker Compose + Nginx pour VPS Ubuntu
- PWA installable mobile/tablette

## Démarrage local

```bash
cp .env.example .env
npm install
npx prisma generate
npm run dev
```

Ouvrir `http://localhost:3000`.

## Démarrage Docker

```bash
cp .env.example .env
docker compose up -d --build
docker compose exec app npx prisma migrate deploy
docker compose exec app npm run prisma:seed
```

## Écrans inclus

- `/` dashboard performance
- `/pos` caisse et commandes
- `/qr/demo-table` parcours client par QR code
- `/stock` inventaire et alertes
- `/finance` charges, COGS et marges
- `/hr` employés et émargement
- `/invoices` facture A4 et ticket
- `/reports` exports et rentabilité

## Données seed

Le catalogue initial contient tous les produits demandés : champagnes, whiskys, cognac, bières, shots, softs, jus, eaux, punchs, rhums arrangés et suppléments.

Les prix d'achat sont estimés à 55 % du prix de vente avec `costEstimated = true`. Avant une exploitation réelle, remplacer ces coûts par les prix fournisseurs exacts.

## Production VPS

1. Installer Docker et Docker Compose sur Ubuntu.
2. Cloner le dépôt.
3. Copier `.env.example` vers `.env`.
4. Changer `DATABASE_URL`, `JWT_SECRET`, `QR_TOKEN_SECRET`.
5. Lancer `docker compose up -d --build`.
6. Ajouter HTTPS avec Certbot ou un reverse proxy type Traefik/Caddy.
7. Planifier un backup PostgreSQL quotidien.

## Prochaines briques recommandées

- Auth complète staff avec rôles et permissions.
- WebSocket Socket.io ou service Laravel Reverb séparé si migration Laravel.
- Génération PDF serveur avec Chrome headless.
- Paiements Mobile Money réels selon le provider choisi.
- Mode multi-établissement si ALLÔ SHISHA ouvre plusieurs lounges.
