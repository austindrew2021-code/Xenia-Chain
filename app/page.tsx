'use client';

import { useState } from 'react';
import { ArrowRight, Coins, TrendingUp, Shield, Users, Zap, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

export default function Home() {
  const [email, setEmail] = useState('');
  const currentStage = 3;

  const handleConnectWallet = () => {
    console.log('Connect Wallet clicked');
  };

  const handleNewsletterSignup = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  const roadmapStages = [
    {
      stage: 1,
      title: 'Concept & Audit',
      quarter: 'Q4 2025',
      description: 'Smart contract development and comprehensive security auditing by leading firms.',
      details: 'Complete protocol architecture, multiple security audits, and documentation.'
    },
    {
      stage: 2,
      title: 'Testnet Launch',
      quarter: 'Q1 2026',
      description: 'Beta borrowing and lending platform on Solana devnet.',
      details: 'Public testing phase with early adopters, bug bounty program, and feature refinement.'
    },
    {
      stage: 3,
      title: 'Community Airdrop',
      quarter: 'Q1 2026',
      description: 'Token distribution to early community members and testers.',
      details: 'Reward early supporters with governance tokens, establish initial token holders.'
    },
    {
      stage: 4,
      title: 'Mainnet Deployment',
      quarter: 'Q2 2026',
      description: 'Full protocol launch on Solana mainnet with real assets.',
      details: 'Production-ready platform with multiple asset support and optimized gas fees.'
    },
    {
      stage: 5,
      title: 'Liquidity Integration',
      quarter: 'Q2 2026',
      description: 'Establish liquidity pools with Orca and Raydium DEXs.',
      details: 'Deep liquidity provision, automated market making, and incentive programs.'
    },
    {
      stage: 6,
      title: 'AI Oracle Rollout',
      quarter: 'Q3 2026',
      description: 'Deploy AI-powered predictive lending rates and risk assessment.',
      details: 'Machine learning models for optimal rate prediction and default risk analysis.'
    },
    {
      stage: 7,
      title: 'Governance Activation',
      quarter: 'Q3 2026',
      description: 'Enable DAO voting system for protocol proposals.',
      details: 'Community-driven decision making, proposal submission, and on-chain voting.'
    },
    {
      stage: 8,
      title: 'Ecosystem Expansion',
      quarter: 'Q4 2026',
      description: 'Strategic partnerships and cross-chain bridge implementation.',
      details: 'Multi-chain support, institutional partnerships, and expanded use cases.'
    }
  ];

  const tokenomics = [
    { category: 'Liquidity Provision', percentage: '40%', amount: '400M', description: 'DEX pools and market making' },
    { category: 'Team & Development', percentage: '20%', amount: '200M', description: '4-year vesting schedule' },
    { category: 'Community Rewards', percentage: '15%', amount: '150M', description: 'Staking and incentives' },
    { category: 'Ecosystem Fund', percentage: '15%', amount: '150M', description: 'Partnerships and grants' },
    { category: 'Treasury', percentage: '10%', amount: '100M', description: 'Protocol reserves' }
  ];

  return (
    <div className="min-h-screen bg-[#1a0d2e] text-white">
      <nav className="fixed top-0 w-full z-50 bg-[#1a0d2e]/80 backdrop-blur-lg border-b border-[#7c3aed]/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Coins className="h-8 w-8 text-[#7c3aed]" />
            <span className="text-2xl font-bold">BorroeFi</span>
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#protocol" className="hover:text-[#7c3aed] transition-colors">Protocol</a>
            <a href="#tokenomics" className="hover:text-[#7c3aed] transition-colors">Tokenomics</a>
            <a href="#roadmap" className="hover:text-[#7c3aed] transition-colors">Roadmap</a>
            <a href="#community" className="hover:text-[#7c3aed] transition-colors">Community</a>
          </div>
          <Button onClick={handleConnectWallet} className="bg-[#7c3aed] hover:bg-[#6d28d9]">
            Connect Wallet
          </Button>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block px-4 py-2 bg-[#7c3aed]/10 border border-[#7c3aed]/30 rounded-full mb-6">
            <span className="text-[#7c3aed] font-semibold">Powered by Solana & AI</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Revolutionize Borrowing<br />with <span className="text-[#7c3aed]">AI</span>
          </h1>
          <p className="text-xl text-gray-400 mb-10 max-w-3xl mx-auto">
            Experience the future of DeFi lending with ultra-low fees, AI-powered rates, and lightning-fast settlements on Solana. Borrow and lend with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#7c3aed] hover:bg-[#6d28d9] text-lg px-8">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-[#7c3aed] text-[#7c3aed] hover:bg-[#7c3aed]/10 text-lg px-8">
              Read Docs
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
            <Card className="bg-[#2a1a4e] border-[#7c3aed]/30">
              <CardContent className="pt-6">
                <TrendingUp className="h-12 w-12 text-[#7c3aed] mb-4 mx-auto" />
                <h3 className="text-2xl font-bold mb-2">0.01% Fees</h3>
                <p className="text-gray-400">Industry-leading low transaction costs on Solana</p>
              </CardContent>
            </Card>
            <Card className="bg-[#2a1a4e] border-[#7c3aed]/30">
              <CardContent className="pt-6">
                <Zap className="h-12 w-12 text-[#7c3aed] mb-4 mx-auto" />
                <h3 className="text-2xl font-bold mb-2">400ms Settlement</h3>
                <p className="text-gray-400">Lightning-fast transactions powered by Solana</p>
              </CardContent>
            </Card>
            <Card className="bg-[#2a1a4e] border-[#7c3aed]/30">
              <CardContent className="pt-6">
                <Shield className="h-12 w-12 text-[#7c3aed] mb-4 mx-auto" />
                <h3 className="text-2xl font-bold mb-2">Audited</h3>
                <p className="text-gray-400">Security-first approach with multiple audits</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="protocol" className="py-20 px-6 bg-[#0f0720]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            How <span className="text-[#7c3aed]">BorroeFi</span> Works
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            <Card className="bg-[#2a1a4e] border-[#7c3aed]/30">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <TrendingUp className="h-6 w-6 text-[#7c3aed]" />
                  Lending
                </CardTitle>
                <CardDescription className="text-gray-400">Supply assets and earn competitive yields</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <ChevronRight className="h-5 w-5 text-[#7c3aed] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Deposit assets to the protocol</p>
                      <p className="text-sm text-gray-400">Supply SOL, USDC, or other supported tokens</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="h-5 w-5 text-[#7c3aed] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Earn AI-optimized interest rates</p>
                      <p className="text-sm text-gray-400">APY: 4.2% - 12.8% based on market conditions</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="h-5 w-5 text-[#7c3aed] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Withdraw anytime with no lock-up</p>
                      <p className="text-sm text-gray-400">Full liquidity and instant access to funds</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-[#2a1a4e] border-[#7c3aed]/30">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Coins className="h-6 w-6 text-[#7c3aed]" />
                  Borrowing
                </CardTitle>
                <CardDescription className="text-gray-400">Access liquidity with flexible collateral</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <ChevronRight className="h-5 w-5 text-[#7c3aed] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Deposit collateral assets</p>
                      <p className="text-sm text-gray-400">Minimum 150% collateralization ratio</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="h-5 w-5 text-[#7c3aed] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Borrow at competitive rates</p>
                      <p className="text-sm text-gray-400">APR: 2.1% - 8.5% with AI rate optimization</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <ChevronRight className="h-5 w-5 text-[#7c3aed] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Repay with flexible terms</p>
                      <p className="text-sm text-gray-400">No prepayment penalties, automated liquidation protection</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="tokenomics" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="text-[#7c3aed]">Token</span> Economics
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg">Total Supply: 1,000,000,000 BRRO</p>
          <div className="grid gap-6 mb-12">
            {tokenomics.map((item, index) => (
              <Card key={index} className="bg-[#2a1a4e] border-[#7c3aed]/30">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-1">{item.category}</h3>
                      <p className="text-sm text-gray-400">{item.description}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-3xl font-bold text-[#7c3aed]">{item.percentage}</p>
                      <p className="text-sm text-gray-400">{item.amount} tokens</p>
                    </div>
                  </div>
                  <div className="mt-4 bg-[#1a0d2e] rounded-full h-3 overflow-hidden">
                    <div
                      className="bg-[#7c3aed] h-full rounded-full transition-all duration-500"
                      style={{ width: item.percentage }}
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <Card className="bg-[#2a1a4e] border-[#7c3aed]/30">
            <CardHeader>
              <CardTitle className="text-2xl">Token Utility</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-bold mb-2 text-[#7c3aed]">Governance</h4>
                  <p className="text-sm text-gray-400">Vote on protocol proposals, parameter changes, and treasury allocation</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-[#7c3aed]">Staking Rewards</h4>
                  <p className="text-sm text-gray-400">Stake tokens to earn protocol revenue share and enhanced yields</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2 text-[#7c3aed]">Fee Discounts</h4>
                  <p className="text-sm text-gray-400">Reduced borrowing fees and priority access to new features</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="roadmap" className="py-20 px-6 bg-[#0f0720]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Development <span className="text-[#7c3aed]">Roadmap</span>
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg">Currently at Stage {currentStage} of 8</p>

          <div className="relative mb-20">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-[#2a1a4e] -translate-y-1/2" />
            <div
              className="absolute top-1/2 left-0 h-1 bg-[#7c3aed] -translate-y-1/2 transition-all duration-1000"
              style={{ width: `${(currentStage / roadmapStages.length) * 100}%` }}
            />
            <div className="relative flex justify-between">
              {roadmapStages.map((stage) => (
                <TooltipProvider key={stage.stage}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button
                        className={`w-12 h-12 rounded-full border-4 transition-all duration-300 hover:scale-110 ${
                          stage.stage <= currentStage
                            ? 'bg-[#7c3aed] border-[#7c3aed] shadow-lg shadow-[#7c3aed]/50'
                            : 'bg-[#2a1a4e] border-[#2a1a4e]'
                        } ${stage.stage === currentStage ? 'ring-4 ring-[#7c3aed]/30 animate-pulse' : ''}`}
                      >
                        <span className="font-bold">{stage.stage}</span>
                      </button>
                    </TooltipTrigger>
                    <TooltipContent
                      side="top"
                      className="bg-[#2a1a4e] border-[#7c3aed]/50 p-4 max-w-xs"
                    >
                      <p className="font-bold text-[#7c3aed] mb-1">{stage.title}</p>
                      <p className="text-xs text-gray-400 mb-2">{stage.quarter}</p>
                      <p className="text-sm">{stage.details}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roadmapStages.map((stage) => (
              <Card
                key={stage.stage}
                className={`transition-all duration-300 hover:scale-105 cursor-pointer ${
                  stage.stage === currentStage
                    ? 'bg-[#7c3aed]/20 border-[#7c3aed] shadow-lg shadow-[#7c3aed]/20'
                    : stage.stage < currentStage
                    ? 'bg-[#2a1a4e] border-[#7c3aed]/50'
                    : 'bg-[#2a1a4e] border-[#7c3aed]/20 opacity-70'
                }`}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-sm font-semibold ${stage.stage === currentStage ? 'text-[#7c3aed]' : 'text-gray-400'}`}>
                      {stage.quarter}
                    </span>
                    {stage.stage === currentStage && (
                      <span className="px-2 py-1 bg-[#7c3aed] text-xs rounded-full">Current</span>
                    )}
                    {stage.stage < currentStage && (
                      <span className="text-[#7c3aed]">✓</span>
                    )}
                  </div>
                  <CardTitle className="text-lg">Stage {stage.stage}</CardTitle>
                  <CardDescription className="text-white font-semibold">{stage.title}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-400">{stage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="community" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join the <span className="text-[#7c3aed]">Community</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Be part of the future of decentralized lending. Connect with thousands of users worldwide.
          </p>

          <div className="flex justify-center gap-6 mb-12">
            <a href="#" className="w-14 h-14 rounded-full bg-[#2a1a4e] border border-[#7c3aed]/30 flex items-center justify-center hover:bg-[#7c3aed]/20 transition-colors">
              <Users className="h-6 w-6" />
            </a>
            <a href="#" className="w-14 h-14 rounded-full bg-[#2a1a4e] border border-[#7c3aed]/30 flex items-center justify-center hover:bg-[#7c3aed]/20 transition-colors">
              <Users className="h-6 w-6" />
            </a>
            <a href="#" className="w-14 h-14 rounded-full bg-[#2a1a4e] border border-[#7c3aed]/30 flex items-center justify-center hover:bg-[#7c3aed]/20 transition-colors">
              <Users className="h-6 w-6" />
            </a>
            <a href="#" className="w-14 h-14 rounded-full bg-[#2a1a4e] border border-[#7c3aed]/30 flex items-center justify-center hover:bg-[#7c3aed]/20 transition-colors">
              <Users className="h-6 w-6" />
            </a>
          </div>

          <Card className="bg-[#2a1a4e] border-[#7c3aed]/30">
            <CardHeader>
              <CardTitle className="text-2xl">Stay Updated</CardTitle>
              <CardDescription className="text-gray-400">Get the latest news and updates delivered to your inbox</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleNewsletterSignup} className="flex gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-[#1a0d2e] border-[#7c3aed]/30 focus:border-[#7c3aed]"
                  required
                />
                <Button type="submit" className="bg-[#7c3aed] hover:bg-[#6d28d9]">
                  Subscribe
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="border-t border-[#7c3aed]/20 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Coins className="h-6 w-6 text-[#7c3aed]" />
                <span className="text-xl font-bold">BorroeFi</span>
              </div>
              <p className="text-sm text-gray-400">AI-powered lending protocol on Solana</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Protocol</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-[#7c3aed]">Documentation</a></li>
                <li><a href="#" className="hover:text-[#7c3aed]">Whitepaper</a></li>
                <li><a href="#" className="hover:text-[#7c3aed]">Audit Reports</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Developers</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-[#7c3aed]">GitHub</a></li>
                <li><a href="#" className="hover:text-[#7c3aed]">API Docs</a></li>
                <li><a href="#" className="hover:text-[#7c3aed]">Bug Bounty</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-[#7c3aed]">Terms of Service</a></li>
                <li><a href="#" className="hover:text-[#7c3aed]">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-[#7c3aed]">Risk Disclosure</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[#7c3aed]/20 pt-8 text-center text-sm text-gray-400">
            <p className="mb-4">
              <strong>DISCLAIMER:</strong> BorroeFi is a decentralized protocol. Cryptocurrency investments carry significant risk.
              Always conduct your own research and consult with a financial advisor before participating in DeFi protocols.
              Past performance does not guarantee future results.
            </p>
            <p>&copy; 2025 BorroeFi. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
