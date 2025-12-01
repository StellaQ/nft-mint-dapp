import { useState } from 'react'
import { ethers } from 'ethers'
import WalletConnect from './components/WalletConnect'
import BalanceDisplay from './components/BalanceDisplay'
import MintForm from './components/MintForm'
import NFTGallery from './components/NFTGallery'
import './App.css'

function App() {
  const [provider, setProvider] = useState<ethers.BrowserProvider | null>(null)
  const [signer, setSigner] = useState<ethers.JsonRpcSigner | null>(null)
  const [account, setAccount] = useState<string>('')
  const [balance, setBalance] = useState<string>('0')

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum)
        await provider.send("eth_requestAccounts", [])
        const signer = await provider.getSigner()
        const account = await signer.getAddress()
        const balance = await provider.getBalance(account)

        setProvider(provider)
        setSigner(signer)
        setAccount(account)
        setBalance(ethers.formatEther(balance))
      } catch (error) {
        console.error("Error connecting wallet:", error)
      }
    } else {
      alert("Please install MetaMask!")
    }
  }

  const disconnectWallet = () => {
    setProvider(null)
    setSigner(null)
    setAccount('')
    setBalance('0')
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold">NFT Mint DApp</h1>
      </header>

      <main className="container mx-auto p-4">
        <WalletConnect
          account={account}
          onConnect={connectWallet}
          onDisconnect={disconnectWallet}
        />

        {account && (
          <>
            <BalanceDisplay balance={balance} />
            <MintForm signer={signer} />
            <NFTGallery account={account} provider={provider} />
          </>
        )}
      </main>
    </div>
  )
}

export default App