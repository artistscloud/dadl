
import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define the types for our data
type DataDistribution = 'iid' | 'non-iid';
type ConsensusMode = 'sync' | 'async' | 'hybrid';
type Tab = 'overview' | 'clustering' | 'learning' | 'performance';

// Data types
interface ConvergenceDataPoint {
  iteration: number;
  proposed: number;
  dsgd: number;
  fedavg: number;
}

interface CommunicationDataPoint {
  metric: string;
  proposed: number;
  dsgd: number;
  fedavg: number;
}

interface ClusterDataPoint {
  x: number;
  y: number;
  method: 'Traditional' | 'Density-Aware';
}

interface LearningRateDataPoint {
  iteration: number;
  densityRatio: number;
  baseRate: number;
  adaptedRate: number;
}

// Define the context type
interface MLDataContextType {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
  dataDistribution: DataDistribution;
  setDataDistribution: (distribution: DataDistribution) => void;
  consensusMode: ConsensusMode;
  setConsensusMode: (mode: ConsensusMode) => void;
  convergenceData: ConvergenceDataPoint[];
  communicationData: CommunicationDataPoint[];
  clusterData: ClusterDataPoint[];
  learningRateData: LearningRateDataPoint[];
  generateClusterData: () => ClusterDataPoint[];
}

// Create the context
const MLDataContext = createContext<MLDataContextType | undefined>(undefined);

// Context provider component
export const MLDataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [activeTab, setActiveTab] = useState<Tab>('overview');
  const [dataDistribution, setDataDistribution] = useState<DataDistribution>('non-iid');
  const [consensusMode, setConsensusMode] = useState<ConsensusMode>('hybrid');

  // Generate convergence data
  const convergenceDataMap = {
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

  // Generate communication data
  const communicationDataMap = {
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

  // Generate learning rate data
  const generateLearningRateData = (): LearningRateDataPoint[] => {
    return Array.from({ length: 50 }, (_, i) => {
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
  };

  // Generate cluster data
  const generateClusterData = (): ClusterDataPoint[] => {
    const traditionalClusters: ClusterDataPoint[] = [];
    const densityAwareClusters: ClusterDataPoint[] = [];
    
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

  // Current data based on selected options
  const convergenceData = convergenceDataMap[dataDistribution];
  const communicationData = communicationDataMap[consensusMode];
  const learningRateData = generateLearningRateData();
  const clusterData = generateClusterData();

  return (
    <MLDataContext.Provider
      value={{
        activeTab,
        setActiveTab,
        dataDistribution,
        setDataDistribution,
        consensusMode,
        setConsensusMode,
        convergenceData,
        communicationData,
        clusterData,
        learningRateData,
        generateClusterData
      }}
    >
      {children}
    </MLDataContext.Provider>
  );
};

// Custom hook to use the context
export const useMLData = () => {
  const context = useContext(MLDataContext);
  if (context === undefined) {
    throw new Error('useMLData must be used within a MLDataProvider');
  }
  return context;
};
