# Junior Caucus Website (Rewrite)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Visit our timeline [here](https://github.com/Junior-Caucus-SU/Caucus_Guidelines/blob/main/TIMELINE.md).

## Quick Start

To run main branch on localhost, do this:

```shell
git clone https://github.com/Junior-Caucus-SU/NextJS-Rewrite.git
cd NextJS-Rewrite
npm i
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Other Commands

Bundles the app into static files for production.

```shell
npx next build
```

## Setting the Google Sheets File

To run correctly, this project parses data from google sheets – the specific google sheets structure that needs to be used will be explained at a later point.

To setting the schedule, here are the special keywords.

| dayType    | Meaning |
| -------- | ------- |
| Conference | Conference Day for Teachers |
| Extended | Extended Homeroom Schedule |
| Homeroom | Normal Homeroom Day |
| Regular | Regular School Day |
| TF | Thursday-Friday Schedule|
| No School | No School |

## Next Steps for this project.

1. Organize the code so it relies on fewer api calls and less javascript
2. Rework the README so this could be run by anyone
3. Optimize the code

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
