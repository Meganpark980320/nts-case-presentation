'use client';

const cases = [
  {
    id: 1,
    theme: '아비트라지',
    category: 'DEX 차익거래',
    description: 'MEV 봇 및 차익거래자의 수익 구조 분석과 과세 이벤트 식별',
    difficulty: '상',
    chains: ['Ethereum', 'BSC'],
  },
  {
    id: 2,
    theme: 'Token Sale',
    category: 'ICO/IDO',
    description: '토큰 세일 참여부터 언락, 매도까지의 전체 라이프사이클 추적',
    difficulty: '중상',
    chains: ['Ethereum', 'Solana'],
  },
  {
    id: 3,
    theme: 'Polymarket',
    category: '예측 시장',
    description: '예측 시장 플랫폼에서의 대규모 베팅과 수익 실현 추적',
    difficulty: '상',
    chains: ['Polygon', 'Ethereum'],
  },
];

export default function CaseSelection() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-8 md:px-16">
      <div className="text-center mb-10">
        <span className="text-sm tracking-widest text-accent-cyan uppercase mb-2 block">
          Case Selection
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          실전 케이스 선정
        </h2>
        <p className="text-gray-400 text-lg">
          3개 맞춤형 케이스 테마
        </p>
      </div>

      <div className="w-full max-w-5xl overflow-hidden rounded-xl glass-card">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-700/50">
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">#</th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">테마</th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">카테고리</th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider hidden md:table-cell">설명</th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">난이도</th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider hidden lg:table-cell">체인</th>
            </tr>
          </thead>
          <tbody>
            {cases.map((c) => (
              <tr
                key={c.id}
                className="border-b border-gray-800/50 hover:bg-white/[0.02] transition-colors"
              >
                <td className="px-6 py-4 text-sm font-mono text-accent-blue">{String(c.id).padStart(2, '0')}</td>
                <td className="px-6 py-4">
                  <span className="text-white font-semibold">{c.theme}</span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-300">{c.category}</td>
                <td className="px-6 py-4 text-sm text-gray-400 hidden md:table-cell max-w-xs truncate">{c.description}</td>
                <td className="px-6 py-4">
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    c.difficulty === '상' ? 'bg-orange-500/20 text-orange-300' :
                    'bg-yellow-500/20 text-yellow-300'
                  }`}>
                    {c.difficulty}
                  </span>
                </td>
                <td className="px-6 py-4 hidden lg:table-cell">
                  <div className="flex gap-1">
                    {c.chains.map(chain => (
                      <span key={chain} className="text-xs px-2 py-0.5 rounded bg-dark-700 text-gray-400">
                        {chain}
                      </span>
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
