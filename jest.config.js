module.exports = {
    preset: 'ts-jest',
    globals: {
      'ts-jest': {
        tsconfig: './tsconfig.json',
      },
    },
    testEnvironment: 'node',
    transform: {'^.+\.tsx?$': 'ts-jest'},
  };
