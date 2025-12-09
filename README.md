# NFT Mint DApp 🖼️⛓️

A modern Web3 decentralized application for minting and managing NFTs, built with React, TypeScript, and ethers.js. This project demonstrates full-stack Web3 frontend development capabilities including wallet integration, smart contract interaction, and responsive UI design.

一个基于Web3的现代化去中心化NFT铸造和管理应用，使用React、TypeScript和ethers.js构建。本项目展示了完整的Web3前端开发能力，包括钱包集成、智能合约交互和响应式UI设计。

![NFT Mint DApp Preview](https://stellaq.github.io/nft-mint-dapp/)

## ✨ Features / 功能特性

### 🔗 Wallet Integration / 钱包集成
- **MetaMask Connection**: Seamless integration with popular Web3 wallets
- **MetaMask连接**：与主流Web3钱包的无缝集成
- **Real-time Status**: Live connection status and account address display
- **实时状态**：实时连接状态和账户地址显示
- **Error Handling**: Comprehensive error handling for connection failures and user rejections
- **错误处理**：连接失败和用户拒绝的全面错误处理
- **Network Support**: Compatible with Ethereum mainnet and testnets
- **网络支持**：兼容以太坊主网和测试网

### 💰 Balance Management / 余额管理
- **ETH Balance Display**: Display of account ETH balance (updated on connection)
- **ETH余额显示**：账户ETH余额的显示（连接时更新）
- **Auto-formatting**: Clean display with appropriate decimal precision
- **自动格式化**：适当小数精度的清晰显示
- **Basic Network Support**: Works with connected wallet's current network
- **基本网络支持**：适用于连接钱包的当前网络

### 🛠️ NFT Minting / NFT铸造
- **Smart Contract Integration**: Basic interaction with ERC721 NFT contracts (sample contract)
- **智能合约集成**：与ERC721 NFT合约的基本交互（示例合约）
- **Mint Function**: Simple minting workflow with transaction handling
- **铸造功能**：简单的铸造工作流程和交易处理
- **Fixed Pricing**: Pre-configured mint price (0.01 ETH)
- **固定定价**：预配置的铸造价格（0.01 ETH）
- **Status Tracking**: Basic minting progress and confirmation alerts
- **状态跟踪**：基本的铸造进度和确认提醒

### 🎨 NFT Gallery / NFT画廊
- **Token Discovery**: Basic discovery of user's NFT holdings (using sample contract)
- **代币发现**：用户NFT持有量的基本发现（使用示例合约）
- **Basic Display**: Display of NFT token IDs and URIs
- **基本显示**：NFT代币ID和URI的基本显示
- **Grid Layout**: Simple responsive grid layout
- **网格布局**：简单的响应式网格布局
- **Future Enhancement**: Ready for metadata parsing and image display
- **未来增强**：为元数据解析和图片显示做好准备

## 🛠️ Tech Stack / 技术栈

### Frontend Framework / 前端框架
- **React 18** - Modern React with hooks and concurrent features
- **React 18** - 具有hooks和并发功能的现代React
- **TypeScript** - Type-safe development with full IntelliSense support
- **TypeScript** - 具有完整IntelliSense支持的类型安全开发
- **Vite** - Fast build tool and development server
- **Vite** - 快速构建工具和开发服务器

### Web3 Integration / Web3集成
- **ethers.js v6** - Ethereum blockchain interaction library
- **ethers.js v6** - 以太坊区块链交互库
- **BrowserProvider** - Modern Web3 provider for wallet connections
- **BrowserProvider** - 用于钱包连接的现代Web3提供商
- **ERC721 Standard** - NFT smart contract compatibility
- **ERC721标准** - NFT智能合约兼容性

### Styling & UI / 样式和UI
- **Tailwind CSS v4** - Utility-first CSS framework with custom components
- **Tailwind CSS v4** - 实用优先的CSS框架，包含自定义组件样式
- **Responsive Grid Layout** - Mobile-first grid system (1/2/3 columns)
- **响应式网格布局** - 移动优先的网格系统（1/2/3列布局）
- **Modern UI Components** - Cards, buttons, and form elements with hover states
- **现代化UI组件** - 卡片、按钮和表单元素，包含悬停状态

### Development Tools / 开发工具
- **ESLint** - Code quality and consistency enforcement
- **ESLint** - 代码质量和一致性执行
- **PostCSS** - CSS processing and optimization
- **PostCSS** - CSS处理和优化
- **GitHub Actions** - Automated deployment pipeline
- **GitHub Actions** - 自动化部署管道

## 🚀 Quick Start / 快速开始

### Prerequisites / 先决条件
- Node.js 18+ and npm
- Node.js 18+ 和 npm
- MetaMask or compatible Web3 wallet
- MetaMask 或兼容的Web3钱包
- Git

### Installation / 安装

1. **Clone the repository** / **克隆仓库**
   ```bash
   git clone https://github.com/StellaQ/nft-mint-dapp.git
   cd nft-mint-dapp
   ```

2. **Install dependencies** / **安装依赖**
   ```bash
   npm install
   ```

3. **Start development server** / **启动开发服务器**
   ```bash
   npm run dev
   ```

4. **Open in browser** / **在浏览器中打开**
   ```
   http://localhost:5173
   ```

### Build for Production / 生产构建
```bash
npm run build
```

### Deploy to GitHub Pages / 部署到GitHub Pages
```bash
npm run deploy
```

## 📖 Usage Guide / 使用指南

### 1. Wallet Connection / 钱包连接
1. Click "Connect Wallet" button / 点击"Connect Wallet"按钮
2. Approve connection in MetaMask popup / 在MetaMask弹窗中批准连接
3. View your connected account address and ETH balance / 查看连接的账户地址和ETH余额

### 2. Minting NFTs / 铸造NFT
1. Ensure wallet is connected / 确保钱包已连接
2. Click "Mint NFT" button / 点击"Mint NFT"按钮
3. Confirm transaction in MetaMask / 在MetaMask中确认交易
4. Wait for transaction confirmation / 等待交易确认
5. View minted NFT in your gallery / 在画廊中查看铸造的NFT

### 3. Viewing NFT Gallery / 查看NFT画廊
1. Connect your wallet / 连接钱包
2. Navigate to "My NFT Gallery" section / 导航到"My NFT Gallery"部分
3. View all NFTs owned by connected account / 查看连接账户拥有的所有NFT
4. Each NFT shows Token ID and metadata URI / 每个NFT显示代币ID和元数据URI

## 🏗️ Project Structure / 项目结构

```
nft-mint-dapp/
├── src/
│   ├── components/
│   │   ├── WalletConnect.tsx    # Wallet connection component / 钱包连接组件
│   │   ├── BalanceDisplay.tsx   # ETH balance display / ETH余额显示
│   │   ├── MintForm.tsx         # NFT minting interface / NFT铸造界面
│   │   └── NFTGallery.tsx       # NFT collection display / NFT收藏显示
│   ├── App.tsx                  # Main application component / 主应用组件
│   ├── main.tsx                 # Application entry point / 应用入口点
│   └── index.css                # Global styles / 全局样式
├── public/
├── .github/
│   └── workflows/
│       └── deploy.yml           # GitHub Actions deployment / GitHub Actions部署
├── package.json
├── vite.config.ts
├── tailwind.config.js
└── README.md
```

## 🔧 Configuration / 配置

### Smart Contract Setup / 智能合约设置
Update contract address in component files: / 在组件文件中更新合约地址：
```typescript
// In MintForm.tsx and NFTGallery.tsx
// 在MintForm.tsx和NFTGallery.tsx中
const NFT_CONTRACT_ADDRESS = "0xYourContractAddressHere"
```

### Network Configuration / 网络配置
The app automatically detects the user's wallet network. For custom network support, modify the provider configuration in `App.tsx`.

应用会自动检测用户的钱包网络。要支持自定义网络，请修改`App.tsx`中的提供商配置。

## ⚠️ Current Limitations / 当前限制

This is a learning project demonstrating Web3 frontend fundamentals. Some advanced features are not yet implemented:

这是一个学习项目，展示Web3前端基础功能。部分高级功能尚未实现：

- **Sample Contract**: Uses placeholder contract address - needs real deployed contract
- **示例合约**：使用占位符合约地址 - 需要真实的已部署合约
- **No Metadata Parsing**: NFT gallery shows only token IDs and URIs, no images or metadata
- **无元数据解析**：NFT画廊仅显示代币ID和URI，无图片或元数据
- **No Real-time Updates**: Balance doesn't update after transactions
- **无实时更新**：余额在交易后不会更新
- **No Gas Estimation**: No transaction cost preview
- **无Gas估算**：无交易成本预览
- **Fixed Parameters**: Mint price and parameters are hardcoded
- **固定参数**：铸造价格和参数是硬编码的

## 🚀 Future Improvements / 未来改进

Planned enhancements for production use:
生产使用计划的增强功能：

- Deploy real NFT smart contract / 部署真实的NFT智能合约
- Add metadata parsing and image display / 添加元数据解析和图片显示
- Implement real-time balance updates / 实现实时余额更新
- Add gas estimation and transaction previews / 添加gas估算和交易预览
- Support dynamic mint parameters / 支持动态铸造参数
- Add pagination for large NFT collections / 为大型NFT收藏添加分页

## 🌐 Live Demo / 在线演示

[View Live Demo](https://stellaq.github.io/nft-mint-dapp/) / [查看在线演示](https://stellaq.github.io/nft-mint-dapp/)

## 🤝 Contributing / 贡献

1. Fork the repository / 分叉仓库
2. Create a feature branch (`git checkout -b feature/amazing-feature`) / 创建功能分支
3. Commit changes (`git commit -m 'Add amazing feature'`) / 提交更改
4. Push to branch (`git push origin feature/amazing-feature`) / 推送到分支
5. Open a Pull Request / 开启拉取请求

## 📝 Development Notes / 开发笔记

### Smart Contract Compatibility / 智能合约兼容性
- Compatible with standard ERC721 contracts / 兼容标准ERC721合约
- Supports payable mint functions / 支持可支付的铸造功能
- Handles tokenURI metadata retrieval / 处理tokenURI元数据检索

### Error Handling / 错误处理
- Network connection errors / 网络连接错误
- Transaction failures / 交易失败
- Wallet disconnection handling / 钱包断开连接处理
- User rejection scenarios / 用户拒绝场景

### Performance Optimizations / 性能优化
- React hooks for efficient re-rendering / 使用React hooks进行高效重新渲染
- Vite for fast development and building / 使用Vite进行快速开发和构建
- Modular component architecture / 模块化组件架构

## 📄 License / 许可证

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

本项目采用MIT许可证授权 - 查看[LICENSE](LICENSE)文件了解详情。


## 🙏 Acknowledgments / 致谢

- [ethers.js](https://docs.ethers.org/) - Ethereum library for blockchain interaction / 以太坊区块链交互库
- [React](https://reactjs.org/) - UI library / UI库
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework / 实用优先的CSS框架
- [Vite](https://vitejs.dev/) - Build tool / 构建工具

---

⭐ **Star this repo if you found it helpful!** / **如果这个仓库对你有帮助，请给它加星！**

*Built with ❤️ for the Web3 community* / *为Web3社区用❤️构建*