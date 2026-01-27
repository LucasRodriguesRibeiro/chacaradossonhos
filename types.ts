
import React from 'react';

export interface FeatureSectionProps {
  id?: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  isReversed?: boolean;
  highlights?: string[];
  icon?: React.ReactNode;
}

export interface Fruit {
  name: string;
  icon: string;
}