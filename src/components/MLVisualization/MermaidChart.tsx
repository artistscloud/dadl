
import React, { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

interface MermaidProps {
  chart: string;
}

const MermaidChart: React.FC<MermaidProps> = ({ chart }) => {
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
    
    const renderChart = async () => {
      if (mermaidRef.current) {
        try {
          // Create a valid ID by removing special characters
          const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`;
          const { svg } = await mermaid.render(id, chart);
          if (mermaidRef.current) {
            mermaidRef.current.innerHTML = svg;
          }
        } catch (error) {
          console.error('Error rendering mermaid chart:', error);
        }
      }
    };
    
    renderChart();
  }, [chart]);

  return <div className="mermaid w-full h-full min-h-[200px] overflow-x-auto" ref={mermaidRef} />;
};

export default MermaidChart;
