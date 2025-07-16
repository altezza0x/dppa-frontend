import React from 'react';
import { LucideIcon, ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon: Icon,
  title,
  description,
  href,
  className = ''
}) => {
  const content = (
    <div className={`flex items-center gap-3 p-3 rounded-xl hover:bg-white/10 transition-all duration-300 cursor-pointer group ${className}`}>
      <div className="w-8 h-8 bg-white/10 group-hover:bg-emerald-500/20 rounded-lg flex items-center justify-center transition-colors">
        <Icon size={16} className="text-gray-300 group-hover:text-emerald-300 transition-colors" />
      </div>
      <div className="flex-1">
        <div className="text-sm font-medium text-white">{title}</div>
        <div className="text-xs text-gray-400">{description}</div>
      </div>
      <div className="transition-all duration-300">
        <ArrowRight size={14} className="text-gray-400 group-hover:text-emerald-300 transition-colors" />
      </div>
    </div>
  );

  if (href) {
    return <a href={href}>{content}</a>;
  }

  return content;
};

export default ServiceCard;
