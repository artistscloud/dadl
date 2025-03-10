import React, { useEffect, useRef } from 'react';
import { useMLData } from './MLDataContext';
import { ClusteringChart, ConvergenceChart, CommunicationChart, LearningRateChart } from './ChartComponents';
import { InfoIcon, BarChart3Icon, TrendingUpIcon, ServerIcon, CodeIcon, ArrowRightIcon, ClockIcon, ZapIcon, DownloadIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import mermaid from 'mermaid';

interface MermaidProps {
  chart: string;
}

const Mermaid: React.FC<MermaidProps> = ({ chart }) => {
  const mermaidRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: true,
      theme: 'neutral',
      securityLevel: 'loose',
      flowchart: {
        useMaxWidth: true,
        htmlLabels: true,
        curve: 'basis',
      },
    });
    
    if (mermaidRef.current) {
      mermaid.render('mermaid-svg', chart).then((result) => {
        if (mermaidRef.current) {
          mermaidRef.current.innerHTML = result.svg;
        }
      });
    }
  }, [chart]);

  return <div className="mermaid" ref={mermaidRef} />;
};

// Overview Tab
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

// Clustering Tab
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

// Learning Tab
export const LearningTab: React.FC = () => {
  const { dataDistribution, setDataDistribution, learningRateData } = useMLData();
  
  return (
    <div className="p-6 bg-white rounded-2xl shadow-sm animate-fade-in">
      <div className="flex items-center gap-2 mb-4">
        <TrendingUpIcon className="w-5 h-5 text-mlblue" />
        <h3 className="text-lg font-semibold text-mlgray-900">Adaptive Learning Rate</h3>
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
        <LearningRateChart data={learningRateData} height={350} />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="p-5 bg-blue-50 rounded-lg border border-blue-100">
          <h4 className="font-semibold text-mlgray-900 mb-3">Adaptation Factors</h4>
          <div className="space-y-3">
            <div className="flex items-start">
              <div className="mt-1 w-2 h-2 rounded-full bg-mlblue mr-2"></div>
              <div>
                <h5 className="text-sm font-medium text-mlgray-900">Local Density Ratio</h5>
                <p className="text-xs text-mlgray-700">Adjusts learning based on the ratio of local to global data density.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mt-1 w-2 h-2 rounded-full bg-mlblue mr-2"></div>
              <div>
                <h5 className="text-sm font-medium text-mlgray-900">Gradient Magnitude</h5>
                <p className="text-xs text-mlgray-700">Scales learning rate inversely with gradient size to prevent divergence.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mt-1 w-2 h-2 rounded-full bg-mlblue mr-2"></div>
              <div>
                <h5 className="text-sm font-medium text-mlgray-900">Training Progress</h5>
                <p className="text-xs text-mlgray-700">Gradually decreases rate as training progresses for fine-tuning.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mt-1 w-2 h-2 rounded-full bg-mlblue mr-2"></div>
              <div>
                <h5 className="text-sm font-medium text-mlgray-900">Network Conditions</h5>
                <p className="text-xs text-mlgray-700">Adapts to communication latency and available bandwidth.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="p-5 bg-green-50 rounded-lg border border-green-100">
          <h4 className="font-semibold text-mlgray-900 mb-3">Benefits</h4>
          <div className="space-y-3">
            <div className="flex items-start">
              <div className="mt-1 w-2 h-2 rounded-full bg-mlgreen mr-2"></div>
              <div>
                <h5 className="text-sm font-medium text-mlgray-900">35% Faster Convergence</h5>
                <p className="text-xs text-mlgray-700">Reaches optimal model accuracy in fewer iterations compared to fixed rates.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mt-1 w-2 h-2 rounded-full bg-mlgreen mr-2"></div>
              <div>
                <h5 className="text-sm font-medium text-mlgray-900">Improved Stability</h5>
                <p className="text-xs text-mlgray-700">Reduces oscillations in training and prevents divergence in sparse regions.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mt-1 w-2 h-2 rounded-full bg-mlgreen mr-2"></div>
              <div>
                <h5 className="text-sm font-medium text-mlgray-900">Better Non-IID Data Handling</h5>
                <p className="text-xs text-mlgray-700">Intelligently adapts to heterogeneous data distributions across nodes.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="mt-1 w-2 h-2 rounded-full bg-mlgreen mr-2"></div>
              <div>
                <h5 className="text-sm font-medium text-mlgray-900">Reduced Communication</h5>
                <p className="text-xs text-mlgray-700">Lower bandwidth requirements due to faster convergence and fewer updates.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Performance Tab
export const PerformanceTab: React.FC = () => {
  const { 
    dataDistribution, 
    setDataDistribution, 
    consensusMode, 
    setConsensusMode,
    convergenceData,
    communicationData
  } = useMLData();
  
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
          <ConvergenceChart data={convergenceData} height={300} />
          <div className="mt-3 text-xs text-mlgray-600 italic text-center">
            Higher values indicate better accuracy. Our approach converges faster, especially with non-IID data.
          </div>
        </div>
        
        <div className="p-5 bg-mlgray-50 rounded-lg">
          <h4 className="font-medium text-mlgray-800 mb-3">Communication Overhead</h4>
          <CommunicationChart data={communicationData} height={300} />
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

// Implementation Tab - New component
export const ImplementationTab: React.FC = () => {
  const { implementationData } = useMLData();
  
  const heterogeneityFlowchart = `
    flowchart TB
      subgraph DH["Data Heterogeneity Handling"]
        direction TB
        subgraph Detection["Heterogeneity Detection"]
          DD[Distribution Analysis]
          DS[Density Sampling]
          GM[Gradient Monitoring]
        end
        subgraph Adaptation["Adaptation Mechanisms"]
          direction LR
          LN[Local Normalization]
          GT[Gradient Transformation]
          WS[Weight Scaling]
        end
        subgraph Monitoring["Performance Monitoring"]
          direction TB
          VM[Validation Metrics]
          DM[Distribution Metrics]
          CM[Convergence Monitoring]
        end
      end
      Detection --> Adaptation
      Adaptation --> Monitoring
      Monitoring -->|Feedback| Detection
      style Detection fill:#e1f3d8,stroke:#333,stroke-width:2px
      style Adaptation fill:#ffd700,stroke:#333,stroke-width:2px
      style Monitoring fill:#f9f9f9,stroke:#333,stroke-width:2px
  `;

  const architectureFlowchart = `
    flowchart TD
      subgraph LSH["Locality-Sensitive Hashing"]
        direction TB
        HF["Hash Functions"] -->|"Creates"| BK["Buckets"]
        BK -->|"Resolution"| SB["Split by Density"]
      end
      subgraph DBSCAN["Parallel DBSCAN"]
        CP["Core Points"] -->|"Core"| EC["Expand"]
        EC -->|"Boundary"| BR["Resolution"]
      end
      LSH -->|"Data"| DBSCAN
      style LSH fill:#f5f5f5,stroke:#333,stroke-width:2px
      style DBSCAN fill:#e1f3d8,stroke:#333,stroke-width:2px
  `;

  return (
    <div className="p-6 bg-white rounded-2xl shadow-sm animate-fade-in">
      <div className="flex items-center gap-2 mb-4">
        <CodeIcon className="w-5 h-5 text-mlblue" />
        <h3 className="text-lg font-semibold text-mlgray-900">Implementation Strategy</h3>
        <div className="ml-auto">
          <Button 
            variant="outline" 
            size="sm" 
            className="flex items-center gap-1"
            onClick={() => window.open('https://drive.google.com/file/d/1FwAIR4xHE8y9MCxAz9zhDOSZFNMDLiwX/view?usp=sharing', '_blank')}
          >
            <DownloadIcon className="h-4 w-4" />
            Download Documentation
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-6 space-y-5">
          <div className="p-5 bg-mlgray-50 rounded-xl">
            <h4 className="font-medium text-mlgray-800 mb-3">Integration with Established Systems</h4>
            <div className="space-y-4">
              {implementationData.establishedSystems.map((step, index) => (
                <div key={index} className="flex items-start p-4 bg-white rounded-lg shadow-sm border border-mlgray-200">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-mlblue text-white text-sm font-medium mr-3 flex-shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <h5 className="font-medium text-mlgray-900 mb-1">{step}</h5>
                    {index === 0 && (
                      <p className="text-sm text-mlgray-700">
                        Add HyperLogLog and T-Digest structures as monitoring tools alongside your existing system.
                      </p>
                    )}
                    {index === 1 && (
                      <p className="text-sm text-mlgray-700">
                        Modify your existing optimizer to incorporate density-aware learning rate adjustments.
                      </p>
                    )}
                    {index === 2 && (
                      <p className="text-sm text-mlgray-700">
                        Implement mode selection function that monitors network conditions and gradient variance.
                      </p>
                    )}
                    {index === 3 && (
                      <p className="text-sm text-mlgray-700">
                        Add LSH-based partitioning as an optional preprocessing step for new training runs.
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="p-5 bg-mlgray-50 rounded-xl">
            <h4 className="font-medium text-mlgray-800 mb-3">Integration Challenges and Solutions</h4>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg overflow-hidden">
                <thead className="bg-mlgray-100 text-mlgray-800">
                  <tr>
                    <th className="py-3 px-4 text-left font-medium text-sm">Challenge</th>
                    <th className="py-3 px-4 text-left font-medium text-sm">Solution</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-mlgray-200">
                  {implementationData.challenges.map((item, index) => (
                    <tr key={index} className="hover:bg-mlgray-50">
                      <td className="py-3 px-4 text-sm text-mlgray-800 font-medium">{item.challenge}</td>
                      <td className="py-3 px-4 text-sm text-mlgray-700">{item.solution}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-6 space-y-5">
          <div className="p-5 bg-mlgray-50 rounded-xl">
            <h4 className="font-medium text-mlgray-800 mb-3">New System Implementations</h4>
            <div className="space-y-4">
              {implementationData.newImplementations.map((step, index) => (
                <div key={index} className="flex items-start p-4 bg-white rounded-lg shadow-sm border border-mlgray-200">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-mlpurple text-white text-sm font-medium mr-3 flex-shrink-0">
                    {index +
