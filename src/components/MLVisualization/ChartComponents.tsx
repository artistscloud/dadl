
import React, { useState } from 'react';
import { 
  LineChart, Line, BarChart, Bar, ScatterChart, Scatter, 
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  TooltipProps
} from 'recharts';
import { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent';

interface ChartWrapperProps {
  children: React.ReactNode;
  height?: number | string;
  className?: string;
}

export const ChartWrapper: React.FC<ChartWrapperProps> = ({ 
  children, 
  height = 300,
  className = "" 
}) => {
  return (
    <div className={`w-full transition-all duration-500 ease-out ${className}`} style={{ height }}>
      <ResponsiveContainer width="100%" height="100%">
        {children}
      </ResponsiveContainer>
    </div>
  );
};

interface CustomTooltipProps extends TooltipProps<ValueType, NameType> {
  labelFormatter?: (value: any) => string;
}

export const CustomTooltip: React.FC<CustomTooltipProps> = ({ 
  active, 
  payload, 
  label,
  labelFormatter 
}) => {
  if (!active || !payload || payload.length === 0) return null;
  
  return (
    <div className="bg-white/90 backdrop-blur-md p-3 rounded-lg shadow-lg border border-black/5 text-mlgray-900">
      <p className="text-xs font-medium mb-1">
        {labelFormatter ? labelFormatter(label) : label}
      </p>
      <div className="space-y-1">
        {payload.map((entry, index) => (
          <div key={index} className="flex items-center text-xs">
            <div 
              className="w-2 h-2 rounded-full mr-1.5" 
              style={{ backgroundColor: entry.color }} 
            />
            <span className="font-medium mr-1.5">{entry.name}:</span>
            <span>{typeof entry.value === 'number' ? entry.value.toFixed(2) : entry.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

interface ConvergenceChartProps {
  data: Array<{
    iteration: number;
    proposed: number;
    dsgd: number;
    fedavg: number;
  }>;
  height?: number;
}

export const ConvergenceChart: React.FC<ConvergenceChartProps> = ({ data, height = 300 }) => {
  return (
    <ChartWrapper height={height}>
      <LineChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e5e5ea" opacity={0.6} />
        <XAxis 
          dataKey="iteration" 
          label={{ 
            value: 'Iterations', 
            position: 'insideBottomRight', 
            offset: -5,
            fontSize: 12,
            fill: '#8E8E93'
          }} 
          tick={{ fontSize: 11, fill: '#8E8E93' }}
        />
        <YAxis 
          label={{ 
            value: 'Accuracy', 
            angle: -90, 
            position: 'insideLeft',
            fontSize: 12,
            fill: '#8E8E93'
          }} 
          tick={{ fontSize: 11, fill: '#8E8E93' }}
        />
        <Tooltip content={<CustomTooltip labelFormatter={(value) => `Iteration ${value}`} />} />
        <Legend wrapperStyle={{ fontSize: 12 }} />
        <Line 
          type="monotone" 
          dataKey="proposed" 
          name="Our Approach" 
          stroke="#0A84FF" 
          strokeWidth={2.5}
          dot={{ r: 3, strokeWidth: 0, fill: '#0A84FF' }}
          activeDot={{ r: 5, strokeWidth: 0 }}
          animationDuration={1000}
          animationEasing="ease-out"
        />
        <Line 
          type="monotone" 
          dataKey="dsgd" 
          name="Distributed SGD" 
          stroke="#FF9500" 
          strokeWidth={2}
          dot={{ r: 2.5, strokeWidth: 0, fill: '#FF9500' }}
          activeDot={{ r: 4, strokeWidth: 0 }}
          animationDuration={1000}
          animationEasing="ease-out"
          animationBegin={300}
        />
        <Line 
          type="monotone" 
          dataKey="fedavg" 
          name="Federated Averaging" 
          stroke="#34C759" 
          strokeWidth={2}
          dot={{ r: 2.5, strokeWidth: 0, fill: '#34C759' }}
          activeDot={{ r: 4, strokeWidth: 0 }}
          animationDuration={1000}
          animationEasing="ease-out"
          animationBegin={600}
        />
      </LineChart>
    </ChartWrapper>
  );
};

interface CommunicationChartProps {
  data: Array<{
    metric: string;
    proposed: number;
    dsgd: number;
    fedavg: number;
  }>;
  height?: number;
}

export const CommunicationChart: React.FC<CommunicationChartProps> = ({ data, height = 300 }) => {
  return (
    <ChartWrapper height={height}>
      <BarChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e5e5ea" opacity={0.6} />
        <XAxis 
          dataKey="metric" 
          tick={{ fontSize: 11, fill: '#8E8E93' }}
        />
        <YAxis 
          tick={{ fontSize: 11, fill: '#8E8E93' }}
        />
        <Tooltip content={<CustomTooltip />} />
        <Legend wrapperStyle={{ fontSize: 12 }} />
        <Bar 
          dataKey="proposed" 
          name="Our Approach" 
          fill="#0A84FF"
          radius={[4, 4, 0, 0]}
          animationDuration={1000}
          animationEasing="ease-out"
        />
        <Bar 
          dataKey="dsgd" 
          name="Distributed SGD" 
          fill="#FF9500"
          radius={[4, 4, 0, 0]}
          animationDuration={1000}
          animationEasing="ease-out"
          animationBegin={300}
        />
        <Bar 
          dataKey="fedavg" 
          name="Federated Averaging" 
          fill="#34C759"
          radius={[4, 4, 0, 0]}
          animationDuration={1000}
          animationEasing="ease-out"
          animationBegin={600}
        />
      </BarChart>
    </ChartWrapper>
  );
};

interface ClusteringChartProps {
  data: Array<{
    x: number;
    y: number;
    method: string;
  }>;
  height?: number;
}

export const ClusteringChart: React.FC<ClusteringChartProps> = ({ data, height = 300 }) => {
  const [hovered, setHovered] = useState<string | null>(null);
  
  const traditionalData = data.filter(d => d.method === 'Traditional');
  const densityAwareData = data.filter(d => d.method === 'Density-Aware');
  
  const handleMouseEnter = (method: string) => {
    setHovered(method);
  };
  
  const handleMouseLeave = () => {
    setHovered(null);
  };

  return (
    <ChartWrapper height={height}>
      <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e5e5ea" opacity={0.6} />
        <XAxis 
          type="number" 
          dataKey="x" 
          name="X" 
          tick={{ fontSize: 11, fill: '#8E8E93' }}
        />
        <YAxis 
          type="number" 
          dataKey="y" 
          name="Y" 
          tick={{ fontSize: 11, fill: '#8E8E93' }}
        />
        <Tooltip 
          cursor={{ strokeDasharray: '3 3' }} 
          content={<CustomTooltip labelFormatter={() => 'Cluster Point'} />} 
        />
        <Legend 
          wrapperStyle={{ fontSize: 12 }}
          onMouseEnter={(e) => handleMouseEnter(e.dataKey)}
          onMouseLeave={handleMouseLeave}
        />
        <Scatter 
          name="Traditional Clustering" 
          data={traditionalData} 
          fill="#FF9500"
          fillOpacity={hovered === null || hovered === 'Traditional Clustering' ? 0.7 : 0.2}
          animationDuration={1000}
          animationEasing="ease-out"
        />
        <Scatter 
          name="Density-Aware Clustering" 
          data={densityAwareData} 
          fill="#0A84FF"
          fillOpacity={hovered === null || hovered === 'Density-Aware Clustering' ? 0.7 : 0.2}
          animationDuration={1000}
          animationEasing="ease-out"
          animationBegin={300}
        />
      </ScatterChart>
    </ChartWrapper>
  );
};

interface LearningRateChartProps {
  data: Array<{
    iteration: number;
    densityRatio: number;
    baseRate: number;
    adaptedRate: number;
  }>;
  height?: number;
}

export const LearningRateChart: React.FC<LearningRateChartProps> = ({ data, height = 300 }) => {
  return (
    <ChartWrapper height={height}>
      <LineChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e5e5ea" opacity={0.6} />
        <XAxis 
          dataKey="iteration" 
          label={{ 
            value: 'Training Iteration', 
            position: 'insideBottomRight', 
            offset: -5,
            fontSize: 12,
            fill: '#8E8E93'
          }} 
          tick={{ fontSize: 11, fill: '#8E8E93' }}
        />
        <YAxis 
          label={{ 
            value: 'Learning Rate', 
            angle: -90, 
            position: 'insideLeft',
            fontSize: 12,
            fill: '#8E8E93'
          }} 
          domain={[0, 0.12]} 
          tick={{ fontSize: 11, fill: '#8E8E93' }}
        />
        <Tooltip content={<CustomTooltip labelFormatter={(value) => `Iteration ${value}`} />} />
        <Legend wrapperStyle={{ fontSize: 12 }} />
        <Line 
          type="monotone" 
          dataKey="baseRate" 
          name="Standard Learning Rate" 
          stroke="#FF9500" 
          strokeWidth={2}
          dot={false}
          animationDuration={1000}
          animationEasing="ease-out"
        />
        <Line 
          type="monotone" 
          dataKey="adaptedRate" 
          name="Density-Adapted Rate" 
          stroke="#0A84FF" 
          strokeWidth={2}
          dot={false}
          animationDuration={1000}
          animationEasing="ease-out"
          animationBegin={300}
        />
        <Line 
          type="monotone" 
          dataKey="densityRatio" 
          name="Local/Global Density Ratio" 
          stroke="#34C759" 
          strokeWidth={2}
          strokeDasharray="5 5"
          dot={false}
          animationDuration={1000}
          animationEasing="ease-out"
          animationBegin={600}
        />
      </LineChart>
    </ChartWrapper>
  );
};
