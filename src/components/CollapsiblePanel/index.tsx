import { useState } from 'react';
import './styles.css';

interface CollapsiblePanelProps {
  title: string
  children: React.ReactNode
};

export const CollapsiblePanel = ({ title, children }: CollapsiblePanelProps) => {
  const [isCollapsed, setCollapsed] = useState(true);

  return (
    <div className="collapsible">
      <div className="collapsible-title row" onClick={() => setCollapsed(!isCollapsed)}>
        <span>{title}</span>
        <span>{isCollapsed ? ' 🔽' : ' 🔼'}</span>
      </div>
      {!isCollapsed && children}
    </div>
  )
}