# timely

Quick command line tool helper to quickly generate meeting times across specified timezones.

## Disclaimer
This was just a fun evening project that isn't going to be maintained/improved (unless the mood strikes me), nor was it written to be 'production-ready' in any sense.

Some areas where I might expand this further in the future are:
* Automatic copying of the generated string to the clipboard
* Reading from an environment file of the various locations and using a package to get the time offsets (rather than hard coding them as I did for the initial proof of concept)



## Installation

`npm install`

## Usage

```
npm run build
cd lib
node ./index.js -t <hour of time to convert>
```

Example of the last command: `node ./index.js -t 12`

Example output: `Toronto: 12 // Chicago: 11 // SF: 9`
