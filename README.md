# Rooms & Shops for Rent

A small website listing my rooms and shops for rent. Visitors reach it by scanning a QR code on a poster.

## Files you will edit

| What | File |
|---|---|
| Properties: add, edit, or mark as rented | `data/properties.ts` |
| Phone number, WhatsApp number, public location, Get Directions destination | `data/site.ts` |
| Photos | `public/images/<property-id>/` |

Everything else is in `app/` and rarely needs changes.

## Run locally

```bash
npm install
npm run dev        # open http://localhost:3000
```

## Mark a property as rented or available

In `data/properties.ts`, set `available: false` (rented) or `available: true`, then push to GitHub. Vercel redeploys automatically. The QR code stays the same.

## Add photos

1. Put the files in `public/images/room-01/` (for example `1.jpg`, `2.jpg`). Keep each one under about 500 KB; photos resized to about 1600px wide are plenty.
2. List them in the property: `images: ["/images/room-01/1.jpg", "/images/room-01/2.jpg"]`. The first photo is used on the card.

You can also use Cloudinary links (`https://res.cloudinary.com/...`).

## Deploy (Vercel, free)

1. Push this folder to a GitHub repository.
2. On vercel.com, click Add New → Project, import the repository, then Deploy. No settings are needed.
3. Your address will be `https://<project-name>.vercel.app`. Choose the project name carefully, because the QR code will point to it.
