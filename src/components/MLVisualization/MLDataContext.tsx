
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Types for the context
type MLDataContextType = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  dataDistribution: 'iid' | 'non-iid';
  setDataDistribution: (distribution: 'iid' | 'non-iid') => void;
  consensusMode: 'sync' | 'async' | 'hybrid';
  setConsensusMode: (mode: 'sync' | 'async' | 'hybrid') => void;
  clusterData: any[];
  convergenceData: {
    'iid': Array<{ iteration: number; proposed: number; dsgd: number; fedavg: number }>;
    'non-iid': Array<{ iteration: number; proposed: number; dsgd: number; fedavg: number }>;
  };
  communicationData: {
    'sync': Array<{ metric: string; proposed: number; dsgd: number; fedavg: number }>;
    'async': Array<{ metric: string; proposed: number; dsgd: number; fedavg: number }>;
    'hybrid': Array<{ metric: string; proposed: number; dsgd: number; fedavg: number }>;
  };
  learningRateData: any[];
  implementationData: {
    establishedSystems: string[];
    newImplementations: string[];
    challenges: Array<{ challenge: string; solution: string }>;
    phases: Array<{ phase: string; timeframe: string; tasks: string[] }>;
  };
};

// Create the context
const MLDataContext = createContext<MLDataContextType | undefined>(undefined);

// Provider component
export const MLDataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [dataDistribution, setDataDistribution] = useState<'iid' | 'non-iid'>('non-iid');
  const [consensusMode, setConsensusMode] = useState<'sync' | 'async' | 'hybrid'>('hybrid');
  
  // Generate sample node data for clustering visualization
  const generateClusterData = () => {
    const traditionalClusters = [];
    const densityAwareClusters = [];
    
    // Generate clusters with different distributions based on selection
    if (dataDistribution === 'iid') {
      // More uniform distribution
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 40; j++) {
          const centerX = i * 2 + 1;
          const centerY = 1.5;
          traditionalClusters.push({
            x: centerX + (Math.random() - 0.5) * 1,
            y: centerY + (Math.random() - 0.5) * 1,
            method: 'Traditional'
          });
          
          densityAwareClusters.push({
            x: centerX + 4 + (Math.random() - 0.5) * 0.8,
            y: centerY + (Math.random() - 0.5) * 0.8,
            method: 'Density-Aware'
          });
        }
      }
    } else {
      // Non-IID - clusters with varying density and distribution
      // Cluster 1 - Dense
      for (let j = 0; j < 70; j++) {
        traditionalClusters.push({
          x: 1 + (Math.random() - 0.5) * 0.7,
          y: 1 + (Math.random() - 0.5) * 0.7,
          method: 'Traditional'
        });
        
        densityAwareClusters.push({
          x: 5 + (Math.random() - 0.5) * 0.4,
          y: 1 + (Math.random() - 0.5) * 0.4,
          method: 'Density-Aware'
        });
      }
      
      // Cluster 2 - Medium
      for (let j = 0; j < 40; j++) {
        traditionalClusters.push({
          x: 3 + (Math.random() - 0.5) * 1,
          y: 1.5 + (Math.random() - 0.5) * 1,
          method: 'Traditional'
        });
        
        densityAwareClusters.push({
          x: 7 + (Math.random() - 0.5) * 0.6,
          y: 1.5 + (Math.random() - 0.5) * 0.6,
          method: 'Density-Aware'
        });
      }
      
      // Cluster 3 - Sparse
      for (let j = 0; j < 15; j++) {
        traditionalClusters.push({
          x: 5 + (Math.random() - 0.5) * 1.5,
          y: 1.2 + (Math.random() - 0.5) * 1.5,
          method: 'Traditional'
        });
        
        densityAwareClusters.push({
          x: 9 + (Math.random() - 0.5) * 0.8,
          y: 1.2 + (Math.random() - 0.5) * 0.8,
          method: 'Density-Aware'
        });
      }
    }
    
    return [...traditionalClusters, ...densityAwareClusters];
  };
  
  // Sample performance data
  const convergenceData = {
    'iid': [
      { iteration: 0, proposed: 0.2, dsgd: 0.2, fedavg: 0.2 },
      { iteration: 20, proposed: 0.55, dsgd: 0.4, fedavg: 0.45 },
      { iteration: 40, proposed: 0.75, dsgd: 0.55, fedavg: 0.6 },
      { iteration: 60, proposed: 0.85, dsgd: 0.65, fedavg: 0.7 },
      { iteration: 80, proposed: 0.9, dsgd: 0.75, fedavg: 0.8 },
      { iteration: 100, proposed: 0.92, dsgd: 0.82, fedavg: 0.85 }
    ],
    'non-iid': [
      { iteration: 0, proposed: 0.2, dsgd: 0.2, fedavg: 0.2 },
      { iteration: 20, proposed: 0.45, dsgd: 0.3, fedavg: 0.35 },
      { iteration: 40, proposed: 0.65, dsgd: 0.4, fedavg: 0.45 },
      { iteration: 60, proposed: 0.8, dsgd: 0.5, fedavg: 0.55 },
      { iteration: 80, proposed: 0.85, dsgd: 0.6, fedavg: 0.65 },
      { iteration: 100, proposed: 0.9, dsgd: 0.7, fedavg: 0.75 }
    ]
  };
  
  const communicationData = {
    'sync': [
      { metric: 'Data Transfer (GB)', proposed: 38, dsgd: 48, fedavg: 42 },
      { metric: 'Messages (K)', proposed: 220, dsgd: 485, fedavg: 420 },
      { metric: 'Memory Usage (GB)', proposed: 5.6, dsgd: 8.1, fedavg: 7.2 }
    ],
    'async': [
      { metric: 'Data Transfer (GB)', proposed: 32, dsgd: 40, fedavg: 38 },
      { metric: 'Messages (K)', proposed: 185, dsgd: 410, fedavg: 380 },
      { metric: 'Memory Usage (GB)', proposed: 4.9, dsgd: 7.4, fedavg: 6.8 }
    ],
    'hybrid': [
      { metric: 'Data Transfer (GB)', proposed: 25, dsgd: 48, fedavg: 42 },
      { metric: 'Messages (K)', proposed: 150, dsgd: 485, fedavg: 420 },
      { metric: 'Memory Usage (GB)', proposed: 4.2, dsgd: 8.1, fedavg: 7.2 }
    ]
  };
  
  const learningRateData = Array.from({ length: 50 }, (_, i) => {
    const iteration = i;
    const densityRatio = dataDistribution === 'iid' 
      ? Math.sin(i / 10) * 0.1 + 1  // Small variations for IID
      : Math.sin(i / 5) * 0.4 + 1;  // Larger variations for non-IID
    
    const baseRate = 0.1 * Math.pow(0.98, i);
    const adaptedRate = baseRate * Math.exp(-0.5 * Math.abs(1 - densityRatio));
    
    return {
      iteration,
      densityRatio,
      baseRate,
      adaptedRate
    };
  });

  // Implementation data
  const implementationData = {
    establishedSystems: [
      "Begin with Density Estimation Layer",
      "Introduce Adaptive Learning Rates",
      "Hybrid Consensus Mechanism",
      "Data Partitioning Enhancement"
    ],
    newImplementations: [
      "Foundational Components",
      "Distributed Framework Selection",
      "Communication Protocol Design",
      "Monitoring and Adaptation"
    ],
    challenges: [
      { challenge: "Legacy code dependencies", solution: "Create wrapper classes that translate between your architecture and the existing system" },
      { challenge: "Performance overhead", solution: "Implement lightweight versions of HyperLogLog and T-Digest that minimize additional computation" },
      { challenge: "System monitoring", solution: "Add instrumentation to measure before/after performance improvements to justify further integration" },
      { challenge: "Backward compatibility", solution: "Design a fallback mechanism to revert to original behavior if issues arise" }
    ],
    phases: [
      { 
        phase: "Core Functionality", 
        timeframe: "1-3 months",
        tasks: [
          "Implement basic data structures (HyperLogLog, T-Digest)",
          "Basic density calculations and metrics",
          "Simple adaptive learning rate mechanism"
        ]
      },
      {
        phase: "Distribution and Scaling",
        timeframe: "2-4 months",
        tasks: [
          "LSH partitioning with density-aware modifications",
          "Parallel DBSCAN implementation",
          "Distributed communication protocols"
        ]
      },
      {
        phase: "Advanced Features",
        timeframe: "3-6 months",
        tasks: [
          "Hybrid consensus mechanism with mode selection",
          "Comprehensive security features",
          "Performance optimization and tuning"
        ]
      }
    ]
  };
  
  const value = {
    activeTab,
    setActiveTab,
    dataDistribution,
    setDataDistribution,
    consensusMode,
    setConsensusMode,
    clusterData: generateClusterData(),
    convergenceData,
    communicationData,
    learningRateData,
    implementationData
  };
  
  return (
    <MLDataContext.Provider value={value}>
      {children}
    </MLDataContext.Provider>
  );
};

// Custom hook to use the ML data context
export const useMLData = () => {
  const context = useContext(MLDataContext);
  if (context === undefined) {
    throw new Error('useMLData must be used within a MLDataProvider');
  }
  return context;
};
