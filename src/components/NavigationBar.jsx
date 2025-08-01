import React from 'react';
import { landscapeData } from '../data/landscapeData';

const NavigationBar = ({ 
  activeTab, 
  setActiveTab, 
  selectedCategory, 
  setSelectedCategory, 
  viewMode, 
  setViewMode, 
  searchTerm, 
  setSearchTerm, 
  zoomLevel, 
  setZoomLevel 
}) => {
  const categories = ['all', ...landscapeData.map(cat => cat.category)];

  return (
    <nav className="navigation-bar">
      <div className="nav-container">
        {/* Logo and Title */}
        <div className="nav-brand">
          <h1 className="nav-title">OpsZ Landscape</h1>
        </div>

        {/* Main Navigation Tabs */}
        <div className="nav-tabs">
          <button 
            className={`nav-tab ${activeTab === 'explore' ? 'active' : ''}`}
            onClick={() => setActiveTab('explore')}
          >
            Explore
          </button>
          <button 
            className={`nav-tab ${activeTab === 'stats' ? 'active' : ''}`}
            onClick={() => setActiveTab('stats')}
          >
            Stats
          </button>
        </div>

        {/* Filters and Controls */}
        <div className="nav-controls">
          {/* Category Filter */}
          <div className="filter-group">
            <label htmlFor="category-filter" className="filter-label">Category:</label>
            <select 
              id="category-filter"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="filter-select"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
          </div>

          {/* Search Bar */}
          <div className="search-group">
            <input
              type="text"
              placeholder="Search companies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <button className="search-button">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.35-4.35"/>
              </svg>
            </button>
          </div>

          {/* View Toggle */}
          <div className="view-toggle">
            <button 
              className={`toggle-btn ${viewMode === 'grid' ? 'active' : ''}`}
              onClick={() => setViewMode('grid')}
              title="Grid View"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="7" height="7"/>
                <rect x="14" y="3" width="7" height="7"/>
                <rect x="14" y="14" width="7" height="7"/>
                <rect x="3" y="14" width="7" height="7"/>
              </svg>
            </button>
            <button 
              className={`toggle-btn ${viewMode === 'card' ? 'active' : ''}`}
              onClick={() => setViewMode('card')}
              title="Card View"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <line x1="9" y1="9" x2="15" y2="9"/>
                <line x1="9" y1="12" x2="15" y2="12"/>
                <line x1="9" y1="15" x2="15" y2="15"/>
              </svg>
            </button>
          </div>

          {/* Zoom Controls */}
          <div className="zoom-controls">
            <button 
              className="zoom-btn"
              onClick={() => setZoomLevel(Math.max(50, zoomLevel - 10))}
              title="Zoom Out"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/>
                <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                <line x1="8" y1="11" x2="14" y2="11"/>
              </svg>
            </button>
            <span className="zoom-level">{zoomLevel}%</span>
            <button 
              className="zoom-btn"
              onClick={() => setZoomLevel(Math.min(200, zoomLevel + 10))}
              title="Zoom In"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/>
                <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                <line x1="11" y1="8" x2="11" y2="14"/>
                <line x1="8" y1="11" x2="14" y2="11"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar; 