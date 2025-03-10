
import React from 'react';
import { InfoIcon, ServerIcon, BarChart3Icon, TrendingUpIcon } from 'lucide-react';

export const OverviewTab: React.FC = () => {
  return (
    <div className="p-6 bg-white rounded-2xl shadow-sm animate-fade-in">
      <div className="flex items-center gap-2 mb-4">
        <InfoIcon className="w-5 h-5 text-mlblue" />
        <h3 className="text-lg font-semibold text-mlgray-900">System Architecture Overview</h3>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8 space-y-5">
          <div className="p-5 bg-mlgray-50 rounded-xl">
            <h4 className="font-medium text-mlgray-800 mb-3">Key Components</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="group p-4 bg-white rounded-lg shadow-sm border border-mlgray-200 hover:shadow-md transition-all duration-300 card-hover">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 text-mlblue">
                    <ServerIcon className="w-4 h-4" />
                  </div>
                  <h5 className="font-medium text-mlblue">Data Partitioning</h5>
                </div>
                <ul className="text-sm space-y-2 text-mlgray-700">
                  <li className="flex items-start">
                    <span className="text-mlblue mr-1.5">•</span>
                    <span>Locality-Sensitive Hashing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-mlblue mr-1.5">•</span>
                    <span>Density-Aware Bucketing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-mlblue mr-1.5">•</span>
                    <span>Adaptive Bucket Width</span>
                  </li>
                </ul>
              </div>
              
              <div className="group p-4 bg-white rounded-lg shadow-sm border border-mlgray-200 hover:shadow-md transition-all duration-300 card-hover">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-green-100 text-mlgreen">
                    <BarChart3Icon className="w-4 h-4" />
                  </div>
                  <h5 className="font-medium text-mlgreen">Density Estimation</h5>
                </div>
                <ul className="text-sm space-y-2 text-mlgray-700">
                  <li className="flex items-start">
                    <span className="text-mlgreen mr-1.5">•</span>
                    <span>HyperLogLog Counter</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-mlgreen mr-1.5">•</span>
                    <span>T-Digest Algorithm</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-mlgreen mr-1.5">•</span>
                    <span>Unified Density Metric</span>
                  </li>
                </ul>
              </div>
              
              <div className="group p-4 bg-white rounded-lg shadow-sm border border-mlgray-200 hover:shadow-md transition-all duration-300 card-hover">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-purple-100 text-mlpurple">
                    <TrendingUpIcon className="w-4 h-4" />
                  </div>
                  <h5 className="font-medium text-mlpurple">Consensus</h5>
                </div>
                <ul className="text-sm space-y-2 text-mlgray-700">
                  <li className="flex items-start">
                    <span className="text-mlpurple mr-1.5">•</span>
                    <span>Hybrid Sync/Async Updates</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-mlpurple mr-1.5">•</span>
                    <span>Adaptive Learning Rates</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-mlpurple mr-1.5">•</span>
                    <span>Dynamic Mode Selection</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-5 p-5 bg-white rounded-lg shadow-sm border border-mlgray-200">
              <h5 className="font-medium text-mlgray-800 mb-2">Key Innovations</h5>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3 text-sm">
                <div className="p-3 bg-amber-50 rounded-lg text-amber-800 border border-amber-100">
                  <div className="font-medium mb-1 flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-1.5"></span>
                    Query Latency
                  </div>
                  <div className="text-2xs">48.2% reduction vs traditional</div>
                </div>
                
                <div className="p-3 bg-blue-50 rounded-lg text-blue-800 border border-blue-100">
                  <div className="font-medium mb-1 flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-1.5"></span>
                    False Merges
                  </div>
                  <div className="text-2xs">69.1% fewer in data clustering</div>
                </div>
                
                <div className="p-3 bg-green-50 rounded-lg text-green-800 border border-green-100">
                  <div className="font-medium mb-1 flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-1.5"></span>
                    Storage Efficiency
                  </div>
                  <div className="text-2xs">29.6% improvement</div>
                </div>
                
                <div className="p-3 bg-purple-50 rounded-lg text-purple-800 border border-purple-100">
                  <div className="font-medium mb-1 flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mr-1.5"></span>
                    Non-IID Data
                  </div>
                  <div className="text-2xs">Superior heterogeneous handling</div>
                </div>
                
                <div className="p-3 bg-teal-50 rounded-lg text-teal-800 border border-teal-100">
                  <div className="font-medium mb-1 flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mr-1.5"></span>
                    Network Robustness
                  </div>
                  <div className="text-2xs">Resilient to communication delays</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-4">
          <div className="p-5 bg-mlgray-50 rounded-xl h-full">
            <h4 className="font-medium text-mlgray-800 mb-3">Applications</h4>
            <div className="space-y-4">
              <div className="group p-4 bg-white rounded-lg shadow-sm border border-mlgray-200 hover:shadow-md transition-all duration-300 card-hover">
                <div className="chip bg-red-100 text-red-600 mb-2">Edge Computing</div>
                <h5 className="font-medium text-mlgray-900 mb-1">Resource Optimization</h5>
                <p className="text-sm text-mlgray-700">Efficient learning on resource-constrained devices with reduced communication overhead and adaptive computation scheduling.</p>
              </div>
              
              <div className="group p-4 bg-white rounded-lg shadow-sm border border-mlgray-200 hover:shadow-md transition-all duration-300 card-hover">
                <div className="chip bg-indigo-100 text-indigo-600 mb-2">Healthcare Analytics</div>
                <h5 className="font-medium text-mlgray-900 mb-1">Privacy-preserving ML</h5>
                <p className="text-sm text-mlgray-700">Collaborative learning for medical diagnosis and treatment while maintaining patient data privacy through federated computation.</p>
              </div>
              
              <div className="group p-4 bg-white rounded-lg shadow-sm border border-mlgray-200 hover:shadow-md transition-all duration-300 card-hover">
                <div className="chip bg-teal-100 text-teal-600 mb-2">Industrial IoT</div>
                <h5 className="font-medium text-mlgray-900 mb-1">Anomaly Detection</h5>
                <p className="text-sm text-mlgray-700">Real-time anomaly detection and predictive maintenance with 99.9% accuracy even under variable network conditions.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewTab;
