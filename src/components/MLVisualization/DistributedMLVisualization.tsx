
import React, { useState, useEffect } from 'react';
import { MLDataProvider, useMLData } from './MLDataContext';
import { OverviewTab, ClusteringTab, LearningTab, PerformanceTab, ImplementationTab } from './TabContent';
import { InfoIcon, ServerIcon, TrendingUpIcon, BarChart3Icon, CodeIcon } from 'lucide-react';

// TabButton Component
interface TabButtonProps {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
}
const TabButton: React.FC<TabButtonProps> = ({
  active,
  onClick,
  icon,
  label
}) => {
  return <button className={`tab-button flex items-center px-4 py-3 font-medium rounded-t-lg transition-all duration-300 ${active ? 'bg-white text-mlblue shadow-sm active' : 'bg-mlgray-100 text-mlgray-600 hover:bg-mlgray-200'}`} onClick={onClick}>
      <div className="mr-2">{icon}</div>
      <span>{label}</span>
    </button>;
};

// Tabs Navigation Component
const TabsNavigation: React.FC = () => {
  const {
    activeTab,
    setActiveTab
  } = useMLData();
  return <div className="flex overflow-x-auto gap-1 pb-1">
      <TabButton active={activeTab === 'overview'} onClick={() => setActiveTab('overview')} icon={<InfoIcon className="w-4 h-4" />} label="Overview" />
      <TabButton active={activeTab === 'clustering'} onClick={() => setActiveTab('clustering')} icon={<ServerIcon className="w-4 h-4" />} label="Clustering" />
      <TabButton active={activeTab === 'learning'} onClick={() => setActiveTab('learning')} icon={<TrendingUpIcon className="w-4 h-4" />} label="Adaptive Learning" />
      <TabButton active={activeTab === 'performance'} onClick={() => setActiveTab('performance')} icon={<BarChart3Icon className="w-4 h-4" />} label="Performance" />
      <TabButton active={activeTab === 'implementation'} onClick={() => setActiveTab('implementation')} icon={<CodeIcon className="w-4 h-4" />} label="Implementation" />
    </div>;
};

// Tab Content Renderer
const TabContentRenderer: React.FC = () => {
  const {
    activeTab
  } = useMLData();
  const [key, setKey] = useState(0);

  // Reset key when tab changes to trigger animation
  useEffect(() => {
    setKey(prevKey => prevKey + 1);
  }, [activeTab]);
  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <OverviewTab key={key} />;
      case 'clustering':
        return <ClusteringTab key={key} />;
      case 'learning':
        return <LearningTab key={key} />;
      case 'performance':
        return <PerformanceTab key={key} />;
      case 'implementation':
        return <ImplementationTab key={key} />;
      default:
        return <div>Select a tab to view content</div>;
    }
  };
  return renderContent();
};

// Main Component with Provider
const DistributedMLVisualization: React.FC = () => {
  return <MLDataProvider>
      <div className="min-h-screen bg-mlgray-50 py-8 px-4 sm:px-6 md:px-8">
        <div className="w-full max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-mlblue to-mlpurple rounded-2xl overflow-hidden shadow-lg animate-fade-in">
            <div className="p-8 text-white">
              <div className="flex justify-center mb-4">
                <img 
                  src="/lovable-uploads/e6e1f1a2-f15d-45e1-9301-8b1ac4857d57.png" 
                  alt="DADL Logo" 
                  className="h-12"
                />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 tracking-tight text-center">DADL Density Aware Distributed Learning</h2>
              <p className="mt-2 opacity-90 font-light text-center">
                Advanced architecture for efficient distributed learning in heterogeneous environments
              </p>
            </div>
          </div>
          
          <div className="mt-6 bg-mlgray-100 p-1 rounded-t-xl shadow-sm">
            <TabsNavigation />
          </div>
          
          <TabContentRenderer />
        </div>
      </div>
    </MLDataProvider>;
};
export default DistributedMLVisualization;
