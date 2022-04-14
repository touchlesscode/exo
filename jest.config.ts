/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
export default {
  preset: 'ts-jest',
  clearMocks: true,
  collectCoverage: true,
  testEnvironment: 'jsdom',
  testURL: 'http://localhost',
  transform: { '^.+\\.[tj]sx?$': 'ts-jest' },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.spec.json',
    },
    __PATH_PREFIX__: '',
  },
}
