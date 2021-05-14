const { defaults } = require('jest-config');

module.exports = {
    ...defaults,
    setupFiles: ['./jest/setupTest.js'],
};