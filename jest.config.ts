/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
export default {
  preset: 'ts-jest',
  clearMocks: true,
  collectCoverage: true,
  testEnvironment: "jsdom",
  testURL: `http://localhost`,
  transform: { '^.+\\.[tj]sx?$': 'ts-jest' },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect',
  ],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.spec.json',
    },
    __PATH_PREFIX__: ``,
  },
};

// /** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
// import type { Config } from '@jest/types'

// // Sync object
// const config: Config.InitialOptions = {
//   preset: 'ts-jest',
//   testEnvironment: 'node',
//   transform: {
//     '^.+\\.tsx?$': 'ts-jest',
//   },
//   setupFilesAfterEnv: [
//     '@testing-library/react/cleanup-after-each',
//     '@testing-library/jest-dom/extend-expect',
//   ],
//   testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
//   moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
// }
// export default config
