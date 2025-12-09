/**
 * 实现 spec.md 需求 4: NFT 画廊 (Gallery)
 * - 从智能合约读取用户的 tokenURI
 * - 显示用户拥有的 NFT 列表
 * - 支持 NFT 图片和元数据的展示
 * - 提供分页或滚动浏览功能
 */
import React, { useState, useEffect } from 'react'
import { ethers } from 'ethers'

// 简单的 NFT 合约 ABI (ERC721)
const NFT_CONTRACT_ABI = [
  "function tokenURI(uint256 tokenId) public view returns (string memory)",
  "function balanceOf(address owner) public view returns (uint256)",
  "function tokenOfOwnerByIndex(address owner, uint256 index) public view returns (uint256)"
]

// 合约地址 (这是一个示例地址，实际使用时需要替换为真实的合约地址)
const NFT_CONTRACT_ADDRESS = "0x1234567890123456789012345678901234567890"

interface NFTGalleryProps {
  account: string
  provider: ethers.BrowserProvider | null
}

interface NFT {
  id: string
  uri: string
  image?: string
  name?: string
  description?: string
}

const NFTGallery: React.FC<NFTGalleryProps> = ({ account, provider }) => {
  const [nfts, setNfts] = useState<NFT[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (account && provider) {
      loadNFTs()
    }
  }, [account, provider])

  const loadNFTs = async () => {
    if (!provider || !account) return

    setLoading(true)
    try {
      const contract = new ethers.Contract(NFT_CONTRACT_ADDRESS, NFT_CONTRACT_ABI, provider)
      const balance = await contract.balanceOf(account)
      const nftPromises: Promise<NFT>[] = []

      for (let i = 0; i < balance; i++) {
        nftPromises.push(
          (async () => {
            const tokenId = await contract.tokenOfOwnerByIndex(account, i)
            const tokenURI = await contract.tokenURI(tokenId)
            return { id: tokenId.toString(), uri: tokenURI }
          })()
        )
      }

      const nftData = await Promise.all(nftPromises)
      setNfts(nftData)
    } catch (error) {
      console.error("Error loading NFTs:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-4">My NFT Gallery</h2>
      {loading ? (
        <p>Loading NFTs...</p>
      ) : nfts.length === 0 ? (
        <p>No NFTs found. Mint your first NFT!</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {nfts.map((nft) => (
            <div key={nft.id} className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold">Token ID: {nft.id}</h3>
              <p className="text-sm text-gray-600 truncate">URI: {nft.uri}</p>
              {/* 这里可以添加图片显示，如果有的话 */}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default NFTGallery