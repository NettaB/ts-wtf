module.exports = {
  testMatch: ["<rootDir>**/?(*.)+(spec).(jsx|jsx|ts|tsx)" ],
  moduleFileExtensions:["js", "jsx", "ts", "tsx"],
  setupTestFrameworkScriptFile: "<rootDir>test/setup.js",
  moduleNameMapper: {
    "^Components$(.*)$": "<rootDir>src/components$1",
    "^Store(.*)$": "<rootDir>src/store$1",
    "^Util(.*)$": "<rootDir>/src/util$1",
    "^Types(.*)$": "<rootDir>src/types$1",
    "^Assets(.*)$": "<rootDir>assets$1",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/test/stub.js",
    "\\.(css|scss)$": "identity-obj-proxy",
  },
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest"
  },
  bail:true,
  restoreMocks: true,
  resetModules: true,
  timers:"fake"
};
