pragma solidity ^0.4.24;

interface IToken {
  function name() external view returns(string);

  function symbol() external view returns(string);

  function decimals() external view returns(uint8);

  function totalSupply() external view returns (uint256);

  function balanceOf(address who) external view returns (uint256);

  function allowance(address owner, address spender) external view returns (uint256);

  function transfer(address to, uint256 value) external returns (bool);

  function approve(address spender, uint256 value) external returns (bool);

  function transferFrom(address from, address to, uint256 value) external returns (bool);

  function increaseAllowance(address spender, uint256 addedValue) external returns (bool);

  function decreaseAllowance(address spender, uint256 subtractedValue) external returns (bool);

  function mint(address to, uint256 value) external returns (bool);

  function burn(address from, uint256 value) external returns (bool);

  function isMinter(address account) external returns (bool);

  event Transfer(
    address indexed from,
    address indexed to,
    uint256 value
  );

  event Approval(
    address indexed owner,
    address indexed spender,
    uint256 value
  );

  event Paused(address account);
  event Unpaused(address account);
}