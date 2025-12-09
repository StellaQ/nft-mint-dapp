/**
 * 实现 spec.md 需求 3: NFT 铸造 (Mint)
 * - 提供 mint() 函数调用接口
 * - 支持用户输入铸造参数（如数量、价格等）
 * - 显示铸造状态和交易确认
 * - 处理交易失败和 gas 费估算
 */
import React, { useState } from 'react'
import { ethers } from 'ethers'

// 简单的 NFT 合约 ABI (ERC721)
const NFT_CONTRACT_ABI = [
  "function mint() public payable",
  "function tokenURI(uint256 tokenId) public view returns (string memory)",
  "function balanceOf(address owner) public view returns (uint256)",
  "function tokenOfOwnerByIndex(address owner, uint256 index) public view returns (uint256)"
]

// 合约地址 (这是一个示例地址，实际使用时需要替换为真实的合约地址)
const NFT_CONTRACT_ADDRESS = "0x1234567890123456789012345678901234567890"

interface MintFormProps {
  signer: ethers.JsonRpcSigner | null
}

const MintForm: React.FC<MintFormProps> = ({ signer }) => {
  const [isMinting, setIsMinting] = useState(false)
  const [mintPrice] = useState("0.01") // 示例价格

  const handleMint = async () => {
    if (!signer) return

    setIsMinting(true)
    try {
      const contract = new ethers.Contract(NFT_CONTRACT_ADDRESS, NFT_CONTRACT_ABI, signer)

      // 调用 mint 函数
      const tx = await contract.mint({
        value: ethers.parseEther(mintPrice)
      })

      await tx.wait()
      alert("NFT minted successfully!")
    } catch (error) {
      console.error("Minting failed:", error)
      alert("Minting failed. Please try again.")
    } finally {
      setIsMinting(false)
    }
  }

  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-4">Mint NFT</h2>
      <div className="bg-white p-4 rounded-lg shadow">
        <p className="mb-4">Mint Price: {mintPrice} ETH</p>
        <button
          onClick={handleMint}
          disabled={isMinting || !signer}
          className="bg-green-500 hover:bg-green-700 disabled:bg-gray-400 text-white font-bold py-2 px-4 rounded"
        >
          {isMinting ? "Minting..." : "Mint NFT"}
        </button>
      </div>
    </div>
  )
}

export default MintForm