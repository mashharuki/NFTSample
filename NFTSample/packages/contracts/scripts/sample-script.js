/**
 * コントラクトデプロイ用のファイル
 */

// 必要なモジュールをインポートする・
const hre = require("hardhat");

/**
 * メイン関数を定義
 */
async function main() {
  // コントラクト情報を読み取る。
  const NFT = await hre.ethers.getContractFactory("NFT");
  // コントラクトをデプロイする。
  const nft = await NFT.deploy();
  await nft.deployed();
  console.log("Nft deployed to:", nft.address);
}

// メイン関数の呼び出し
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
});