import { FileBlob, SpreadsheetFile } from "@oai/artifact-tool";

const inputPath =
  "/Users/amutterj/Library/CloudStorage/OneDrive-OracleCorporation/My Mac/All that is required/Federal Bank/Renewal + Expansion 2026/Copy of v2.0_Venkat_Answered_CX_Detailed_Feature_Explanations.xlsx";

const input = await FileBlob.load(inputPath);
const workbook = await SpreadsheetFile.importXlsx(input);

const summary = await workbook.inspect({
  kind: "workbook,sheet,table",
  maxChars: 12000,
  tableMaxRows: 12,
  tableMaxCols: 12,
  tableMaxCellChars: 220,
});
console.log("===SUMMARY===");
console.log(summary.ndjson);

const matches = await workbook.inspect({
  kind: "match",
  searchTerm: "Aashish|Ashish|Mobile Application|Feasibility Confirmation|Oracle Modules Required",
  options: { useRegex: true, maxResults: 200 },
  maxChars: 20000,
});
console.log("===MATCHES===");
console.log(matches.ndjson);

const federal = await workbook.inspect({
  kind: "region",
  sheetId: "Federal_Bank_Requirements",
  range: "A1:H14",
  maxChars: 50000,
  tableMaxRows: 20,
  tableMaxCols: 8,
  tableMaxCellChars: 1200,
});
console.log("===FEDERAL_FULL===");
console.log(federal.ndjson);

const backup = await workbook.inspect({
  kind: "region",
  sheetId: "BackuopSheet",
  range: "A1:H14",
  maxChars: 50000,
  tableMaxRows: 20,
  tableMaxCols: 8,
  tableMaxCellChars: 1200,
});
console.log("===BACKUP_FULL===");
console.log(backup.ndjson);
