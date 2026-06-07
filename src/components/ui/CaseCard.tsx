'use client';

interface CaseCardProps {
  number: string;
  title: string;
  description: string;
  tags: string[];
  color: 'blue' | 'purple' | 'cyan';
}

const colorMap = {
  blue: {
    border: 'border-blue-500/30',
    number: 'text-blue-400',
    tag: 'bg-blue-500/10 text-blue-300',
  },
  purple: {
    border: 'border-purple-500/30',
    number: 'text-purple-400',
    tag: 'bg-purple-500/10 text-purple-300',
  },
  cyan: {
    border: 'border-cyan-500/30',
    number: 'text-cyan-400',
    tag: 'bg-cyan-500/10 text-cyan-300',
  },
};

export default function CaseCard({ number, title, description, tags, color }: CaseCardProps) {
  const colors = colorMap[color];

  return (
    <div className={`glass-card rounded-xl p-6 border ${colors.border} hover:scale-[1.02] transition-transform cursor-default`}>
      <div className="flex items-start justify-between mb-4">
        <span className={`text-3xl font-bold ${colors.number} font-mono opacity-60`}>
          {number}
        </span>
      </div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className={`text-xs px-2.5 py-1 rounded-full ${colors.tag}`}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
