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
 * App関数を定義する。(本体)
 */
function App () {
  // JSXを返す。
  return (
    <div className="App">
      <p>動作</p>
      <button id="test" onClick={buttonDeploy}>NFT deploy</button><br/>
      <button id="test1" onClick={buttonGetName}>NFT get name</button><br/>
      <button id="test2" onClick={buttonMint}>NFT mint</button><br/>
      <button id="test3" onClick={buttonSupply}>NFT totalSupply</button>
    </div>
  );
}

// 外部にコンポーネントを公開する。
export default App;