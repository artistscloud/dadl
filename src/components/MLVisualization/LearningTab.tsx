
import React from 'react';
import { TrendingUpIcon } from 'lucide-react';
import { useMLData } from './MLDataContext';
import { LearningRateChart } from './ChartComponents';

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

export default LearningTab;
