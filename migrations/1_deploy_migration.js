// eslint-disable-next-line no-undef
const Migration = artifacts.require("Migration");

module.exports = function(deployer) {
    deployer.deploy(Migration);
};