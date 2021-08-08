/**
 * メインコンポーネントファイル
 */

import './App.css';
import { ethers } from "ethers";
import {abi,bytecode} from "../../contracts/artifacts/contracts/NFT.sol/NFT.json";

// プロバイダー変数を定義する。(Metamaskをインジェクションする。)
const provider = new ethers.providers.Web3Provider(window.ethereum);
// NFTのdeploy時のアドレスを指定する。
let address = "";

/**
 * 「NFTデプロイ」ボタンを押した時の処理
 */
const buttonDeploy = async() => {
  // プロバイダーから署名者の情報を取得する。
  const signer = provider.getSigner();
  // コントラクト用のファクトリーを生成
  const factory = new ethers.ContractFactory(abi,bytecode,signer);
  // コントラクトをデプロイする。
  const contract = await factory.deploy();
  // deployしたアドレスを取得する。
  address = contract.address;
  console.log(contract);
  console.log(address);
  // ネットワーク情報を取得する。
  const net = await signer.provider.getNetwork();
  if( net.chainId == 4) {
    console.log("https://rinkeby.etherscan.io/tx/" + contract.deployTransaction.hash);
  }
}

/**
 * 「NFT名取得」ボタンを押した時の処理
 */
const buttonGetName = async() => {

}

/**
 * 「NFT発行」ボタンを押した時の処理
 */
const buttonMint = async() => {

}

/**
 * 「NFT総供給量」ボタンを押した時の処理
 */
const buttonSupply = async() => {

}

/**
 * App関数を定義する。(本体)
 */
function App () {
  // JSXを返す。
  return (
    <div className="App">
      <p>動作</p>
      <button id="test" onClick={buttonDeploy}>NFTデプロイ</button><br/>
      <button id="test1" onClick={buttonGetName}>NFT名取得</button><br/>
      <button id="test2" onClick={buttonMint}>NFT発行</button><br/>
      <button id="test3" onClick={buttonSupply}>NFT総供給量</button>
    </div>
  );
}

// 外部にコンポーネントを公開する。
export default App;