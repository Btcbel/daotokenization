
# Smart Contract Documentation


## [Token.sol:Token](./contracts/Token.sol)
`Solidity version 0.4.24+commit.59dbf8f1`


 ##### function name `0x06fdde03` 
 constant view 


___
 ##### function approve `0x095ea7b3` 
  nonpayable 


 Type | Name |
--- | --- |
| address | spender |
| uint256 | value |
___
 ##### function totalSupply `0x18160ddd` 
 constant view 
Total number of tokens in existence

___
 ##### function transferFrom `0x23b872dd` 
  nonpayable 


 Type | Name |
--- | --- |
| address | from |
| address | to |
| uint256 | value |
___
 ##### function decimals `0x313ce567` 
 constant view 


___
 ##### function increaseAllowance `0x39509351` 
  nonpayable 


 Type | Name |
--- | --- |
| address | spender |
| uint256 | addedValue |
___
 ##### function unpause `0x3f4ba83a` 
  nonpayable 
called by the owner to unpause, returns to normal state

___
 ##### function mint `0x40c10f19` 
  nonpayable 
Function to mint tokens

 Type | Name |
--- | --- |
| address | to |
| uint256 | value |
___
 ##### function isPauser `0x46fbf68e` 
 constant view 


 Type | Name |
--- | --- |
| address | account |
___
 ##### function paused `0x5c975abb` 
 constant view 


___
 ##### function renouncePauser `0x6ef8d66d` 
  nonpayable 


___
 ##### function balanceOf `0x70a08231` 
 constant view 
Gets the balance of the specified address.

 Type | Name |
--- | --- |
| address | owner |
___
 ##### function addPauser `0x82dc1ec4` 
  nonpayable 


 Type | Name |
--- | --- |
| address | account |
___
 ##### function pause `0x8456cb59` 
  nonpayable 


___
 ##### function symbol `0x95d89b41` 
 constant view 


___
 ##### function addMinter `0x983b2d56` 
  nonpayable 


 Type | Name |
--- | --- |
| address | account |
___
 ##### function renounceMinter `0x98650275` 
  nonpayable 


___
 ##### function burn `0x9dc29fac` 
  nonpayable 
Burns a specific amount of tokens.

 Type | Name |
--- | --- |
| address | from |
| uint256 | value |
___
 ##### function decreaseAllowance `0xa457c2d7` 
  nonpayable 


 Type | Name |
--- | --- |
| address | spender |
| uint256 | subtractedValue |
___
 ##### function transfer `0xa9059cbb` 
  nonpayable 


 Type | Name |
--- | --- |
| address | to |
| uint256 | value |
___
 ##### function isMinter `0xaa271e1a` 
 constant view 


 Type | Name |
--- | --- |
| address | account |
___
 ##### function allowance `0xdd62ed3e` 
 constant view 
Function to check the amount of tokens that an owner allowed to a spender.

 Type | Name |
--- | --- |
| address | owner |
| address | spender |
___
 ##### constructor  `` 
  nonpayable 


 Type | Name |
--- | --- |
| string | name |
| string | symbol |
| uint8 | decimals |
___
 ##### event Paused `0x62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258` 
   


 Type | Name |
--- | --- |
| address | account |
___
 ##### event Unpaused `0x5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa` 
   


 Type | Name |
--- | --- |
| address | account |
___
 ##### event PauserAdded `0x6719d08c1888103bea251a4ed56406bd0c3e69723c8a1686e017e7bbe159b6f8` 
   


 Type | Name |
--- | --- |
| address | account |
___
 ##### event PauserRemoved `0xcd265ebaf09df2871cc7bd4133404a235ba12eff2041bb89d9c714a2621c7c7e` 
   


 Type | Name |
--- | --- |
| address | account |
___
 ##### event MinterAdded `0x6ae172837ea30b801fbfcdd4108aa1d5bf8ff775444fd70256b44e6bf3dfc3f6` 
   


 Type | Name |
--- | --- |
| address | account |
___
 ##### event MinterRemoved `0xe94479a9f7e1952cc78f2d6baab678adc1b772d936c6583def489e524cb66692` 
   


 Type | Name |
--- | --- |
| address | account |
___
 ##### event Transfer `0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef` 
   


 Type | Name |
--- | --- |
| address | from |
| address | to |
| uint256 | value |
___
 ##### event Approval `0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925` 
   


 Type | Name |
--- | --- |
| address | owner |
| address | spender |
| uint256 | value |
___


## [libraries/Roles.sol:Roles](./contracts/libraries/Roles.sol)
`Solidity version 0.4.24+commit.59dbf8f1`




## [libraries/SafeERC20.sol:SafeERC20](./contracts/interfaces/IToken.sol)
`Solidity version 0.4.24+commit.59dbf8f1`




## [libraries/SafeMath.sol:SafeMath](./contracts/libraries/SafeMath.sol)
`Solidity version 0.4.24+commit.59dbf8f1`
SafeMath


---
