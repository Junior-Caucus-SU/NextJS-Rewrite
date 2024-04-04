import Papa from "papaparse";

const id = "1yB7zzw0I3hUjLwgKZXMpBioQ9FNkTg2bp3skTwtatHk";
const revalidate = 3600;

export default async function getData(sheetName: string) {
  try {
    const response = await fetch(
      `https://docs.google.com/spreadsheets/d/${id}/gviz/tq?tqx=out:csv&sheet=${sheetName}`,
      { next: { revalidate: revalidate } }
    );
    const text = await response.text();
    const parsedData = Papa.parse(text, { header: true }).data.reverse();
    return parsedData;
  } catch (err) {
    console.log(err);
  }
}
