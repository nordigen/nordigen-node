# Changelog

## [2.0.0] - 2025-01-13

- Rewrite in TypeScript
- Generates types from the OA specification
- Added `countries` array with `{ id: CountryCode, name: "Country Name" }` objects (eg. `{ id: "CZ", name: "Czechia" }`)
- generateToken() now updates the `NordigenClient.token` property
- [BC break] Restructuring of files, therefore direct imports may not work the same way

## [1.4.0] - 2024-02-15

- Update docs and remove discontinued premium endpoints.

## [1.3.1] - 2024-02-14

- Regenerate TypeScript types and update rollup dev dependencies

## [1.3.0] - 2024-02-12

- Updated baseUrl to <https://bankaccountdata.gocardless.com/api/v2>

## [1.2.5] - 2023-06-22

- Change Nordigen URLs to GC

## [1.2.4] - 2023-04-14

- Fix TypeScript types

## [1.2.3] - 2023-02-16

- Fix path to types in `package.json`

## [1.2.2] - 2023-02-16

- Add `.cjs` support
- Make `ssn`, `redirectImmediate`, `accountSelection` and  `reference` optional for requisition

## [1.2.1] - 2023-01-16

- Fix requisition parameters name casing

## [1.2.0] - 2023-01-02

- Migrate from node-fetch to axios
- Add missing parameters to requisition

## [1.1.1] - 2022-11-24

- Fix: add country param to premium transactions API

## [1.1.0] - 2022-06-16

- Add premium endpoints to accounts API
- Fix misspelled variable in accounts API

## [1.0.2] - 2022-05-18

- Fix TypeScript Type definitions
- Update JSDoc

## [1.0.1] - 2022-03-16

- Add TypeScript Type definitions
- Add date filters for transactions
- Add agreementId to requisition request
- Fixed token setter, docs and main.js

## [1.0.0] - 2022-01-10

- Initial release
