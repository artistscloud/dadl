
import React from 'react';
import { BarChart3Icon } from 'lucide-react';
import { useMLData } from './MLDataContext';
import { ConvergenceChart, CommunicationChart } from './ChartComponents';

export const PerformanceTab: React.FC = () => {
  const { 
    dataDistribution, 
    setDataDistribution, 
    consensusMode, 
    setConsensusMode,
    convergenceData,
    communicationData
  } = useMLData();
  
  // Select the appropriate data based on current selections
  const selectedConvergenceData = convergenceData[dataDistribution] || [];
  const selectedCommunicationData = communicationData[consensusMode] || [];
  
  return (
    <div className="p-6 bg-white rounded-2xl shadow-sm animate-fade-in">
      <div className="flex items-center gap-2 mb-4">
        <BarChart3Icon className="w-5 h-5 text-mlblue" />
        <h3 className="text-lg font-semibold text-mlgray-900">Performance Comparison</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="select-wrapper">
          <label className="mr-2 font-medium text-mlgray-800 text-sm">Data Distribution:</label>
          <select 
            value={dataDistribution} 
            onChange={(e) => setDataDistribution(e.target.value as 'iid' | 'non-iid')}
            className="border border-mlgray-300 rounded-md px-3 py-1.5 text-sm bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-mlblue/30 focus:border-mlblue"
          >
            <option value="iid">IID (Uniform)</option>
            <option value="non-iid">Non-IID (Heterogeneous)</option>
          </select>
        </div>
        
        <div className="select-wrapper">
          <label className="mr-2 font-medium text-mlgray-800 text-sm">Consensus Mode:</label>
          <select 
            value={consensusMode} 
            onChange={(e) => setConsensusMode(e.target.value as 'sync' | 'async' | 'hybrid')}
            className="border border-mlgray-300 rounded-md px-3 py-1.5 text-sm bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-mlblue/30 focus:border-mlblue"
          >
            <option value="sync">Synchronous</option>
            <option value="async">Asynchronous</option>
            <option value="hybrid">Hybrid (Adaptive)</option>
          </select>
        </div>
      </div>
      
      <div className="space-y-8">
        <div className="p-5 bg-mlgray-50 rounded-lg">
          <h4 className="font-medium text-mlgray-800 mb-3">Convergence Speed</h4>
          <ConvergenceChart data={selectedConvergenceData} height={300} />
          <div className="mt-3 text-xs text-mlgray-600 italic text-center">
            Higher values indicate better accuracy. Our approach converges faster, especially with non-IID data.
          </div>
        </div>
        
        <div className="p-5 bg-mlgray-50 rounded-lg">
          <h4 className="font-medium text-mlgray-800 mb-3">Communication Overhead</h4>
          <CommunicationChart data={selectedCommunicationData} height={300} />
          <div className="mt-3 text-xs text-mlgray-600 italic text-center">
            Lower values indicate more efficient resource usage. Our approach significantly reduces communication overhead.
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-white rounded-lg shadow-sm border border-mlgray-200">
            <div className="chip bg-blue-100 text-blue-700 mb-2">Our Approach</div>
            <h5 className="font-medium text-mlgray-900 mb-2">Density-Aware Optimization</h5>
            <ul className="text-sm space-y-1 text-mlgray-700">
              <li className="flex items-start">
                <span className="text-mlblue mr-1.5">•</span>
                <span>Adaptive to data distribution</span>
              </li>
              <li className="flex items-start">
                <span className="text-mlblue mr-1.5">•</span>
                <span>Hybrid consensus mechanism</span>
              </li>
              <li className="flex items-start">
                <span className="text-mlblue mr-1.5">•</span>
                <span>Optimized communication patterns</span>
              </li>
            </ul>
          </div>
          
          <div className="p-4 bg-white rounded-lg shadow-sm border border-mlgray-200">
            <div className="chip bg-orange-100 text-orange-700 mb-2">Distributed SGD</div>
            <h5 className="font-medium text-mlgray-900 mb-2">Traditional Approach</h5>
            <ul className="text-sm space-y-1 text-mlgray-700">
              <li className="flex items-start">
                <span className="text-mlorange mr-1.5">•</span>
                <span>Fixed learning rate</span>
              </li>
              <li className="flex items-start">
                <span className="text-mlorange mr-1.5">•</span>
                <span>Synchronous updates only</span>
              </li>
              <li className="flex items-start">
                <span className="text-mlorange mr-1.5">•</span>
                <span>High message overhead</span>
              </li>
            </ul>
          </div>
          
          <div className="p-4 bg-white rounded-lg shadow-sm border border-mlgray-200">
            <div className="chip bg-green-100 text-green-700 mb-2">Federated Averaging</div>
            <h5 className="font-medium text-mlgray-900 mb-2">Alternative Approach</h5>
            <ul className="text-sm space-y-1 text-mlgray-700">
              <li className="flex items-start">
                <span className="text-mlgreen mr-1.5">•</span>
                <span>Client-server architecture</span>
              </li>
              <li className="flex items-start">
                <span className="text-mlgreen mr-1.5">•</span>
                <span>Periodic model averaging</span>
              </li>
              <li className="flex items-start">
                <span className="text-mlgreen mr-1.5">•</span>
                <span>Better than DSGD but more centralized</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceTab;
