import { Workbook } from "exceljs";
import { createReadStream, readFileSync } from "fs";

async function main() {
  const workbook = new Workbook();
  const csv = createReadStream("./src/input/coffee.csv");
  await workbook.csv.read(csv);
  await workbook.xlsx.writeFile("./src/output/coffee.xlsx");
}
console.time("main");
main();
console.timeEnd("main");
