/**
 * 实现 spec.md 需求 2: 余额显示
 * - 显示用户当前账户的 ETH 余额
 * - 实时更新余额信息
 * - 支持不同网络的余额查询
 */
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