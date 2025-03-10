
import React from 'react';
import { ServerIcon } from 'lucide-react';
import { useMLData } from './MLDataContext';
import { ClusteringChart } from './ChartComponents';

export const ClusteringTab: React.FC = () => {
  const { dataDistribution, setDataDistribution, clusterData } = useMLData();
  
  return (
    <div className="p-6 bg-white rounded-2xl shadow-sm animate-fade-in">
      <div className="flex items-center gap-2 mb-4">
        <ServerIcon className="w-5 h-5 text-mlblue" />
        <h3 className="text-lg font-semibold text-mlgray-900">Clustering Comparison</h3>
      </div>
      
      <div className="mb-6">
        <div className="select-wrapper inline-block">
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
      </div>
      
      <div className="mb-6">
        <ClusteringChart data={clusterData} height={350} />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="p-5 bg-amber-50 rounded-lg border border-amber-100">
          <div className="flex items-center mb-3">
            <div className="w-3 h-3 rounded-full bg-mlorange mr-2"></div>
            <h4 className="font-semibold text-mlgray-900">Traditional Clustering</h4>
          </div>
          <ul className="space-y-2 text-sm text-mlgray-800">
            <li className="flex items-start">
              <span className="text-mlorange mr-1.5">•</span>
              <span>Fixed distance metrics that don't adapt to data characteristics</span>
            </li>
            <li className="flex items-start">
              <span className="text-mlorange mr-1.5">•</span>
              <span>Uniform density assumption across all regions</span>
            </li>
            <li className="flex items-start">
              <span className="text-mlorange mr-1.5">•</span>
              <span>Global parameters that can't adjust to local variations</span>
            </li>
            <li className="flex items-start">
              <span className="text-mlorange mr-1.5">•</span>
              <span>Less adaptive to local patterns and outliers</span>
            </li>
            <li className="flex items-start">
              <span className="text-mlorange mr-1.5">•</span>
              <span>Poor handling of non-IID data distributions</span>
            </li>
          </ul>
        </div>
        
        <div className="p-5 bg-blue-50 rounded-lg border border-blue-100">
          <div className="flex items-center mb-3">
            <div className="w-3 h-3 rounded-full bg-mlblue mr-2"></div>
            <h4 className="font-semibold text-mlgray-900">Density-Aware Clustering</h4>
          </div>
          <ul className="space-y-2 text-sm text-mlgray-800">
            <li className="flex items-start">
              <span className="text-mlblue mr-1.5">•</span>
              <span>Adaptive distance metrics that respond to data density</span>
            </li>
            <li className="flex items-start">
              <span className="text-mlblue mr-1.5">•</span>
              <span>Local density consideration for improved boundary detection</span>
            </li>
            <li className="flex items-start">
              <span className="text-mlblue mr-1.5">•</span>
              <span>Dynamic parameters that adjust to cluster characteristics</span>
            </li>
            <li className="flex items-start">
              <span className="text-mlblue mr-1.5">•</span>
              <span>Better pattern recognition in complex data distributions</span>
            </li>
            <li className="flex items-start">
              <span className="text-mlblue mr-1.5">•</span>
              <span>Superior performance on heterogeneous data sets</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ClusteringTab;
