/**
 * NFTを発行するためのコントラクトを実装したファイル
 */

pragma solidity ^0.8.0;

// 必要なモジュールをインポートする。
import "../node_modules/hardhat/console.sol";
import "../node_modules/@openzeppelin/contracts/token/ERC721/presets/ERC721PresetMinterPauserAutoId.sol";

/**
 * NFTコントラクトを定義する。
 * (ERC721PresetMinterPauserAutoIdを継承して実装)
 */
contract NFT is ERC721PresetMinterPauserAutoId {
    // コンストラクター 
    constructor() ERC721PresetMinterPauserAutoId("name", "symbol", "http://localhost:3000") {}
}