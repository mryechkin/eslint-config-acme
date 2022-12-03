# Changelog

## [2.0.0] - 2022-12-03

### Added

- Added an override to turn off `react/function-component-definition` rule
- Added `src` alias for import resolver

### Removed

- Removed overrides to `eslint-plugin-jsx-a11y`, as they are no longer required as of Next 13
- Removed `@` alias, as it was causing issues with sorting imports when both relative and alias imports were used
