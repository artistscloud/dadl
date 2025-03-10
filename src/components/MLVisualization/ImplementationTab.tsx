
import React from 'react';
import { CodeIcon, DownloadIcon } from 'lucide-react';
import { useMLData } from './MLDataContext';
import { Button } from '@/components/ui/button';
import MermaidChart from './MermaidChart';

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
                    {index + 1}
                  </div>
                  <div>
                    <h5 className="font-medium text-mlgray-900 mb-1">{step}</h5>
                    {index === 0 && (
                      <p className="text-sm text-mlgray-700">
                        Begin with core probabilistic data structures and build the LSH partitioning with density-aware bucket splitting.
                      </p>
                    )}
                    {index === 1 && (
                      <p className="text-sm text-mlgray-700">
                        Choose a distributed computing framework like Ray or Dask that allows for flexible deployment models.
                      </p>
                    )}
                    {index === 2 && (
                      <p className="text-sm text-mlgray-700">
                        Design the communication protocol to support both synchronous and asynchronous patterns with priority mechanisms.
                      </p>
                    )}
                    {index === 3 && (
                      <p className="text-sm text-mlgray-700">
                        Implement comprehensive telemetry to track performance metrics and automatically adapt system parameters.
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="p-5 bg-mlgray-50 rounded-xl">
            <h4 className="font-medium text-mlgray-800 mb-3">Heterogeneity Handling</h4>
            <MermaidChart chart={heterogeneityFlowchart} />
          </div>
          
          <div className="p-5 bg-mlgray-50 rounded-xl mt-6">
            <h4 className="font-medium text-mlgray-800 mb-3">Architecture Overview</h4>
            <MermaidChart chart={architectureFlowchart} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImplementationTab;
