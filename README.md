1. Skapa en nextjs app 
2. Skapa olika sidor/routes
3. Göra navigation med Link till de olika sidorna
4. Lägg till statisk metadata
5. Hämta data med fetch från API i page (utan use client, useEffect och useState)
6. Visa datan på sidan med hjälp av tsx och ev map
7. Gör en eller flera komponenter med props som tar emot datan och returnerar t ex  ett kort eller dylikt med det ni vill visa (gärna med Image från nextjs)
8. Använda css modules eller tailwind för att göra komponenten lite snygg
9. Göra dynamisk route (med t ex id) och sen använda params för att använda detta id
10. (Hämta ny data från api med endpoint för ett specifikt id t ex och visa den på den nya sidan)
11. Skapa metadata med generateMetaData()
12. Hantera fel och göra felmeddelanden för både användare och för utvecklaren
13. Skapa interaktivitet med knappar och useClient (ex för att lägga till saker i en kundvagn, paginering, sortering osv)
14. Använda hooks som useState, useSearchParams, useRouter, usePathname, useContext, (ev useReducer och useEffect men inget måste)

-----

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
