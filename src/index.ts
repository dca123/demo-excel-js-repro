import { Workbook } from "exceljs";
import { createReadStream, readFileSync } from "fs";

async function main() {
  console.time("main");
  console.time("createWorkbook");
  const workbook = new Workbook();
  console.timeEnd("createWorkbook");

  console.time("readFile");
  const csv = createReadStream("./src/input/coffee.csv");
  console.timeEnd("readFile");

  console.time("attachSheet");
  await workbook.csv.read(csv);
  console.timeEnd("attachSheet");

  console.time("writeFile");
  await workbook.xlsx.writeFile("./src/output/coffee.xlsx");
  console.timeEnd("writeFile");

  console.timeEnd("main");
}
main();
