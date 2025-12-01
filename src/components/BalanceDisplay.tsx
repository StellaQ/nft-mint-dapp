import React from 'react'

interface BalanceDisplayProps {
  balance: string
}

const BalanceDisplay: React.FC<BalanceDisplayProps> = ({ balance }) => {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-4">Account Balance</h2>
      <div className="bg-white p-4 rounded-lg shadow">
        <p className="text-lg">
          <span className="font-medium">ETH Balance:</span> {parseFloat(balance).toFixed(4)} ETH
        </p>
      </div>
    </div>
  )
}

export default BalanceDisplay