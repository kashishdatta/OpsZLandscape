import React, { useMemo } from 'react';
import { landscapeData } from '../data/landscapeData';

const StatsView = () => {
  // Calculate company frequency across all categories
  const companyStats = useMemo(() => {
    const companyCount = {};
    const categoryStats = {};
    
    landscapeData.forEach(category => {
      categoryStats[category.category] = 0;
      
      category.subcategories.forEach(subcategory => {
        subcategory.companies.forEach(company => {
          // Count total occurrences
          companyCount[company.name] = (companyCount[company.name] || 0) + 1;
          categoryStats[category.category] += 1;
        });
      });
    });
    
    // Sort companies by frequency
    const sortedCompanies = Object.entries(companyCount)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 20); // Top 20 companies
    
    return {
      companyCount,
      categoryStats,
      topCompanies: sortedCompanies,
      totalCompanies: Object.keys(companyCount).length,
      totalOccurrences: Object.values(companyCount).reduce((sum, count) => sum + count, 0)
    };
  }, []);

  return (
    <div className="stats-container">
      <div className="stats-header">
        <h1 className="stats-title">Landscape Statistics</h1>
        <p className="stats-subtitle">Analysis of company distribution across categories</p>
      </div>

      {/* Summary Cards */}
      <div className="stats-summary">
        <div className="summary-card">
          <div className="summary-number">{landscapeData.length}</div>
          <div className="summary-label">Categories</div>
        </div>
        <div className="summary-card">
          <div className="summary-number">
            {landscapeData.reduce((sum, cat) => sum + cat.subcategories.length, 0)}
          </div>
          <div className="summary-label">Subcategories</div>
        </div>
        <div className="summary-card">
          <div className="summary-number">{companyStats.totalCompanies}</div>
          <div className="summary-label">Unique Companies</div>
        </div>
        <div className="summary-card">
          <div className="summary-number">{companyStats.totalOccurrences}</div>
          <div className="summary-label">Total Occurrences</div>
        </div>
      </div>

      {/* Top Companies Chart */}
      <div className="stats-section">
        <h2 className="section-title">Most Frequent Companies</h2>
        <p className="section-description">Companies that appear most frequently across all categories</p>
        
        <div className="chart-container">
          {companyStats.topCompanies.map(([companyName, count], index) => (
            <div key={companyName} className="chart-bar">
              <div className="bar-info">
                <span className="company-name">{companyName}</span>
                <span className="company-count">{count} occurrences</span>
              </div>
              <div className="bar-container">
                <div 
                  className="bar-fill"
                  style={{ 
                    width: `${(count / companyStats.topCompanies[0][1]) * 100}%`,
                    backgroundColor: index < 3 ? '#a259ff' : '#4ade80'
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Category Distribution */}
      <div className="stats-section">
        <h2 className="section-title">Companies per Category</h2>
        <p className="section-description">Number of companies in each category</p>
        
        <div className="category-grid">
          {Object.entries(companyStats.categoryStats).map(([category, count]) => (
            <div key={category} className="category-card">
              <div className="category-name">{category}</div>
              <div className="category-count">{count}</div>
              <div className="category-bar">
                <div 
                  className="category-fill"
                  style={{ 
                    width: `${(count / Math.max(...Object.values(companyStats.categoryStats))) * 100}%`
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Analysis */}
      <div className="stats-section">
        <h2 className="section-title">Detailed Analysis</h2>
        
        <div className="analysis-grid">
          <div className="analysis-card">
            <h3>Category Breakdown</h3>
            <div className="breakdown-list">
              {landscapeData.map(category => (
                <div key={category.category} className="breakdown-item">
                  <span className="breakdown-name">{category.category}</span>
                  <span className="breakdown-count">{category.subcategories.length} subcategories</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="analysis-card">
            <h3>Company Types</h3>
            <div className="type-stats">
              {(() => {
                const typeCount = {};
                landscapeData.forEach(category => {
                  category.subcategories.forEach(subcategory => {
                    subcategory.companies.forEach(company => {
                      typeCount[company.type] = (typeCount[company.type] || 0) + 1;
                    });
                  });
                });
                return Object.entries(typeCount).map(([type, count]) => (
                  <div key={type} className="type-item">
                    <span className="type-name">{type}</span>
                    <span className="type-count">{count}</span>
                  </div>
                ));
              })()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsView; 