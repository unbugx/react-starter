module.exports = {
  automock: true,
  verbose: false,
  moduleDirectories: [
    'node_modules',
    'src',
  ],
  moduleNameMapper: {
    // eslint-disable-next-line max-len
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less)$': 'identity-obj-proxy',
    '^components[/](.+)': '<rootDir>/src/components/$1',
    '^constants[/](.+)': '<rootDir>/src/constants/$1',
    '^core[/](.+)': '<rootDir>/src/core/$1',
    '^redux[/](.+)': '<rootDir>/src/redux/$1',
    '^routes[/](.+)': '<rootDir>/src/routes/$1',
  },
  preset: 'ts-jest/presets/js-with-babel',
  testEnvironment: 'node',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  transformIgnorePatterns: [],
  unmockedModulePathPatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/src/constants/',
  ],
};
