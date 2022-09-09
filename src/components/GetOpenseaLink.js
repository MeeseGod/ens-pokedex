export default function GetOpenseaLink(filter){
    const ethers = require('ethers');
    const BigNumber = ethers.BigNumber;
    const utils = ethers.utils;
    const labelHash = utils.keccak256(utils.toUtf8Bytes(filter));
    const tokenId = BigNumber.from(labelHash).toString();

    return tokenId;
};