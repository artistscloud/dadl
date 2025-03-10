
import React, { ReactElement } from 'react';
import { 
  LineChart, Line, 
  BarChart, Bar, 
  ScatterChart, Scatter,
  XAxis, YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  TooltipProps
} from 'recharts';
import { NameType, ValueType } from 'recharts/types/component/DefaultTooltipContent';

// Custom tooltip component for tooltips
const CustomTooltip = ({
  active,
  payload,
  label,
}: TooltipProps<ValueType, NameType>): ReactElement | null => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 shadow-md rounded-md border border-mlgray-200">
        <p className="text-xs font-medium text-mlgray-800">{`${label}`}</p>
        <div className="mt-1">
          {payload.map((entry, index) => (
            <p key={`item-${index}`} className="text-xs" style={{ color: entry.color }}>
              {`${entry.name}: ${entry.value}`}
            </p>
          ))}
        </div>
      </div>
    );
  }
  return null;
};

// Clustering Chart Component
interface ClusteringChartProps {
  data: any[];
  height?: number;
}

export const ClusteringChart: React.FC<ClusteringChartProps> = ({ data, height = 400 }) => {
  return (
    <div className="chart-container" style={{ height: `${height}px` }}>
      <ResponsiveContainer width="100%" height="100%">
        <ScatterChart margin={{ top: 20, right: 30, bottom: 20, left: 20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e5ea" />
          <XAxis 
            type="number" 
            dataKey="x" 
            name="X" 
            stroke="#8e8e93" 
            tick={{ fontSize: 12 }}
            domain={['dataMin - 0.5', 'dataMax + 0.5']}
          />
          <YAxis 
            type="number" 
            dataKey="y" 
            name="Y" 
            stroke="#8e8e93" 
            tick={{ fontSize: 12 }}
            domain={['dataMin - 0.5', 'dataMax + 0.5']}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Scatter 
            name="Traditional Clustering" 
            data={data.filter(d => d.method === 'Traditional')} 
            fill="#FF9500" 
            opacity={0.7}
          />
          <Scatter 
            name="Density-Aware Clustering" 
            data={data.filter(d => d.method === 'Density-Aware')} 
            fill="#0A84FF" 
            opacity={0.7}
          />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
};

// Convergence Chart Component
interface ConvergenceChartProps {
  data: any[];
  height?: number;
}

export const ConvergenceChart: React.FC<ConvergenceChartProps> = ({ data, height = 400 }) => {
  return (
    <div className="chart-container" style={{ height: `${height}px` }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 20, right: 30, bottom: 20, left: 20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e5ea" />
          <XAxis 
            dataKey="iteration" 
            stroke="#8e8e93" 
            tick={{ fontSize: 12 }}
            label={{ value: 'Iterations', position: 'insideBottom', offset: -10, fontSize: 12 }}
          />
          <YAxis 
            stroke="#8e8e93" 
            tick={{ fontSize: 12 }}
            label={{ value: 'Accuracy', angle: -90, position: 'insideLeft', offset: -5, fontSize: 12 }}
            domain={[0, 1]}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="proposed" 
            name="Our Approach" 
            stroke="#0A84FF" 
            strokeWidth={2} 
            activeDot={{ r: 6 }}
          />
          <Line 
            type="monotone" 
            dataKey="dsgd" 
            name="Distributed SGD" 
            stroke="#FF9500" 
            strokeWidth={2} 
            activeDot={{ r: 6 }}
          />
          <Line 
            type="monotone" 
            dataKey="fedavg" 
            name="Federated Avg" 
            stroke="#34C759" 
            strokeWidth={2} 
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

// Communication Chart Component
interface CommunicationChartProps {
  data: any[];
  height?: number;
}

export const CommunicationChart: React.FC<CommunicationChartProps> = ({ data, height = 400 }) => {
  return (
    <div className="chart-container" style={{ height: `${height}px` }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 20, right: 30, bottom: 20, left: 20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e5ea" />
          <XAxis 
            dataKey="metric" 
            stroke="#8e8e93" 
            tick={{ fontSize: 12 }}
          />
          <YAxis 
            stroke="#8e8e93" 
            tick={{ fontSize: 12 }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Bar 
            dataKey="proposed" 
            name="Our Approach" 
            fill="#0A84FF" 
          />
          <Bar 
            dataKey="dsgd" 
            name="Distributed SGD" 
            fill="#FF9500" 
          />
          <Bar 
            dataKey="fedavg" 
            name="Federated Avg" 
            fill="#34C759" 
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

// Learning Rate Chart Component
interface LearningRateChartProps {
  data: any[];
  height?: number;
}

export const LearningRateChart: React.FC<LearningRateChartProps> = ({ data, height = 400 }) => {
  return (
    <div className="chart-container" style={{ height: `${height}px` }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 20, right: 30, bottom: 20, left: 20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e5ea" />
          <XAxis 
            dataKey="iteration" 
            stroke="#8e8e93" 
            tick={{ fontSize: 12 }}
            label={{ value: 'Training Iteration', position: 'insideBottom', offset: -10, fontSize: 12 }}
          />
          <YAxis 
            stroke="#8e8e93" 
            tick={{ fontSize: 12 }}
            label={{ value: 'Learning Rate', angle: -90, position: 'insideLeft', offset: -5, fontSize: 12 }}
            domain={[0, 0.12]}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="baseRate" 
            name="Standard Rate" 
            stroke="#FF9500" 
            strokeWidth={2}
            dot={false}
          />
          <Line 
            type="monotone" 
            dataKey="adaptedRate" 
            name="Density-Adapted" 
            stroke="#0A84FF" 
            strokeWidth={2}
            dot={false}
          />
          <Line 
            type="monotone" 
            dataKey="densityRatio" 
            name="Density Ratio" 
            stroke="#34C759" 
            strokeWidth={2}
            strokeDasharray="5 5"
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
