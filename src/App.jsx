import React, { useState } from 'react';
import './App.css';
import LandscapeGrid from './components/LandscapeGrid';
import NavigationBar from './components/NavigationBar';
import StatsView from './components/StatsView';

function App() {
  const [activeTab, setActiveTab] = useState('explore');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [zoomLevel, setZoomLevel] = useState(100);

  return (
    <div className="app">
      <NavigationBar 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        viewMode={viewMode}
        setViewMode={setViewMode}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        zoomLevel={zoomLevel}
        setZoomLevel={setZoomLevel}
      />
      <main className="main-content">
        {activeTab === 'explore' && (
          <LandscapeGrid 
            selectedCategory={selectedCategory}
            viewMode={viewMode}
            searchTerm={searchTerm}
            zoomLevel={zoomLevel}
          />
        )}
        {activeTab === 'stats' && (
          <StatsView />
        )}
      </main>
    </div>
  );
}

export default App;
