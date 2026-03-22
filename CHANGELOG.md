# Changelog

## [4.0.0] - 2026-03-22

### Added

- ESLint v9+ flat config format support
- New `base` and `typescript` config exports (`eslint-config-acme/base`, `eslint-config-acme/typescript`)
- TypeScript support via `typescript-eslint`
- `@eslint/compat` for backwards compatibility with legacy plugins
- `@stylistic/eslint-plugin` for stylistic rules
- `eslint-import-resolver-typescript` for TypeScript import resolution
- `eslint-plugin-import-x` (replacing `eslint-plugin-import`)
- `globals` and `confusing-browser-globals` as direct dependencies

### Changed

- **BREAKING:** Requires ESLint 9+ minimum (flat config only)
- **BREAKING:** Requires Node.js >= 20
- **BREAKING:** Package is now ESM (`"type": "module"`)
- Migrated from `eslint-config-airbnb` to custom rule configurations
- Replaced `eslint-plugin-import` with `eslint-plugin-import-x`
- Replaced `eslint-import-resolver-custom-alias` with `eslint-import-resolver-typescript`
- Updated Prettier config export from `.prettierrc.json` to `prettier.config.js`
- Bumped all peer dependencies to latest versions

### Removed

- Removed `eslint-config-airbnb` dependency
- Removed `eslint-import-resolver-custom-alias`
- Removed `eslint-plugin-import` (replaced by `eslint-plugin-import-x`)
- Removed `eslint-plugin-prettier`
- Removed legacy `.eslintrc` config format support

## [3.1.0] - 2023-10-20

### Added

- Added `src` aliases `@` and `#` (in addition to existing `src` and `~`)

### Removed

- Removed `eslint-plugin-prettier` as it's no longer used

## [3.0.1] - 2023-10-14

### Added

- Added `@ianvs/prettier-plugin-sort-imports`
- Added `prettier-plugin-packagejson`
- Added shared Prettier config via `eslint-config-acme/prettier` export

### Removed

- Removed `eslint-plugin-simple-import-sort`

## [2.3.0] - 2023-09-17

### Changed

- Migrated to `import-resolver-custom-alias` for custom aliases

## [2.2.1] - 2023-08-26

### Changed

- Bumped `prettier-plugin-tailwindcss` to `^0.5`

## [2.2.0] - 2023-08-04

### Added

- Added [sort-destructure-keys](https://github.com/mthadley/eslint-plugin-sort-destructure-keys) plugin

### Changed

- Updated Prettier to v3

## [2.1.0] - 2023-06-18

### Changed

- Updated `env` to use ES2022
- Updated `simple-import-sort` to include more Node internals
- Cleaned up `peerDependencies` to relax minor versions range

## [2.0.0] - 2022-12-03

### Added

- Added an override to turn off `react/function-component-definition` rule
- Added `src` alias for import resolver

### Removed

- Removed overrides to `eslint-plugin-jsx-a11y`, as they are no longer required as of Next 13
- Removed `@` alias, as it was causing issues with sorting imports when both relative and alias imports were used

## [1.4.0] - 2022-06-30

### Changed

- Bumped deps and fixed usage of TailwindCSS plugin

## [1.3.1] - 2022-06-18

### Fixed

- Updated `tailwindcss` rule to use boolean value

## [1.3.0] - 2022-04-10

### Added

- Added ESLint Tailwind plugin

### Changed

- Updated peer dependencies

## [1.2.0] - 2022-02-03

### Added

- Added official Tailwind Prettier plugin

## [1.1.0] - 2021-12-16

### Changed

- Updated peer dependencies to latest
- Added default import alias resolver

## [1.0.2] - 2021-06-25

### Added

- Added GitHub Actions

### Changed

- Removed Prettier overrides and updated README
