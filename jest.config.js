module.exports = {
    // roots: ['<rootDir>/src'],
    watchPathIgnorePatterns: ['/logs/'],
    testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],
    transform: {
      '^.+\\.(ts|tsx)$': 'ts-jest',
    },
    testEnvironment: 'node',
  };
  