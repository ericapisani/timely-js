#!/usr/bin/env node
import { Command } from "commander";

const program = new Command();

program
  .requiredOption(
    "-t, --time <number>",
    "The time you want to convert. e.g: 12, 3"
  )
  .parse();

const options = program.opts();

// Offsets were grabbed from
// https://gist.github.com/aviflax/a4093965be1cd008f172
const local = { city: "Toronto", offset: -5 };
const timezonesToConvertToOffsets = [
  { city: "Chicago", offset: -6 },
  { city: "SF", offset: -8 },
  { city: "Berlin", offset: 1}
];

const timeToConvert = parseInt(options.time, 10);
let outputString = `${local.city}: ${timeToConvert}`;

timezonesToConvertToOffsets.forEach((cityWithTzOffset) => {
  const { city, offset } = cityWithTzOffset;
  const offsetToAdjustBy = -1 * local.offset - -1 * offset;
  let modifiedTime = timeToConvert + offsetToAdjustBy;

  if (modifiedTime > 12) {
    modifiedTime = modifiedTime % 12;
  }

  outputString = `${outputString} // ${city}: ${modifiedTime}`;
});

console.log("Here's your string!\n", outputString);
