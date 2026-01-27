
import React from 'react';
import { FeatureSectionProps } from '../types';
import { CheckCircle2 } from 'lucide-react';

const FeatureSection: React.FC<FeatureSectionProps> = ({
  id,
  title,
  description,
  imageUrl,
  imageAlt,
  isReversed = false,
  highlights = [],
  icon
}) => {
  return (
    <section id={id} className="py-20 px-6 max-w-7xl mx-auto overflow-hidden">
      <div className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}>
        <div className="flex-1 w-full space-y-6">
          <div className="space-y-4">
            {icon && <div className="mb-4">{icon}</div>}
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 leading-tight">
              {title}
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              {description}
            </p>
          </div>
          
          {highlights.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-4">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-slate-700 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          )}
        </div>
        
        <div className="flex-1 w-full">
          <div className="relative group">
            <div className="absolute -inset-4 bg-emerald-100/50 rounded-2xl transform rotate-2 transition-transform group-hover:rotate-1"></div>
            <img 
              src={imageUrl} 
              alt={imageAlt}
              className="relative rounded-xl shadow-2xl object-cover w-full aspect-[4/3] transform transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
