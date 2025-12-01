import React from 'react'

interface WalletConnectProps {
  account: string
  onConnect: () => void
  onDisconnect: () => void
}

const WalletConnect: React.FC<WalletConnectProps> = ({ account, onConnect, onDisconnect }) => {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-4">Wallet Connection</h2>
      {!account ? (
        <button
          onClick={onConnect}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Connect Wallet
        </button>
      ) : (
        <div className="flex items-center space-x-4">
          <span className="text-gray-700">
            Connected: {account.slice(0, 6)}...{account.slice(-4)}
          </span>
          <button
            onClick={onDisconnect}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Disconnect
          </button>
        </div>
      )}
    </div>
  )
}

export default WalletConnect