import React, { useState } from "react";
import { landscapeData } from "../data/landscapeData";

const LandscapeGrid = ({ selectedCategory, viewMode, searchTerm, zoomLevel }) => {
  // State for collapsed categories - start with all categories collapsed
  const [collapsedCategories, setCollapsedCategories] = useState(new Set(landscapeData.map(cat => cat.category)));

  // Toggle collapse state for a category
  const toggleCategory = (categoryName) => {
    setCollapsedCategories(prev => {
      const newSet = new Set(prev);
      if (newSet.has(categoryName)) {
        newSet.delete(categoryName);
      } else {
        newSet.add(categoryName);
      }
      return newSet;
    });
  };

  // Filter data based on selected category and search term
  const filteredData = landscapeData.filter(category => {
    if (selectedCategory !== 'all' && category.category !== selectedCategory) {
      return false;
    }
    
    // Filter subcategories and companies based on search term
    const filteredSubcategories = category.subcategories.map(subcategory => ({
      ...subcategory,
      companies: subcategory.companies.filter(company =>
        company.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    })).filter(subcategory => subcategory.companies.length > 0);
    
    return filteredSubcategories.length > 0;
  }).map(category => ({
    ...category,
    subcategories: category.subcategories.map(subcategory => ({
      ...subcategory,
      companies: subcategory.companies.filter(company =>
        company.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    })).filter(subcategory => subcategory.companies.length > 0)
  }));

  const containerStyle = {
    transform: `scale(${zoomLevel / 100})`,
    transformOrigin: 'top left',
    transition: 'transform 0.2s ease'
  };

  return (
    <div className="landscape-container" style={containerStyle}>
      {filteredData.map((cat) => {
        const isCollapsed = collapsedCategories.has(cat.category);
        
        return (
          <section key={cat.category} className="landscape-section">
            {/* Section Header */}
            <div 
              className="section-header" 
              style={{ borderLeftColor: cat.color }}
              onClick={() => toggleCategory(cat.category)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  toggleCategory(cat.category);
                }
              }}
              role="button"
              tabIndex={0}
              aria-expanded={!isCollapsed}
              aria-label={`${isCollapsed ? 'Expand' : 'Collapse'} ${cat.category} category`}
            >
              <div className="section-title">
                <h2 className="section-name">{cat.category}</h2>
                <button 
                  className="collapse-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleCategory(cat.category);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      e.stopPropagation();
                      toggleCategory(cat.category);
                    }
                  }}
                  title={isCollapsed ? "Expand category" : "Collapse category"}
                  aria-expanded={!isCollapsed}
                  aria-label={`${isCollapsed ? 'Expand' : 'Collapse'} ${cat.category} category`}
                >
                  <svg 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                    className={`collapse-icon ${isCollapsed ? 'collapsed' : ''}`}
                  >
                    <polyline points="6,9 12,15 18,9"></polyline>
                  </svg>
                </button>
              </div>
            </div>

            {/* Subcategories Grid */}
            <div className={`subcategories-grid ${viewMode} ${isCollapsed ? 'collapsed' : ''}`}>
              {cat.subcategories.map((sub) => (
                <div key={sub.name} className="subcategory-card">
                  <h3 className="subcategory-title" style={{ color: cat.color }}>
                    {sub.name}
                  </h3>
                  <div className={`companies-grid ${viewMode}`}>
                    {sub.companies.map((comp) => (
                      <a
                        key={comp.name}
                        href={comp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`company-card ${viewMode}`}
                        title={comp.name}
                      >
                        <div className="company-logo">
                          <img
                            src={comp.logo}
                            alt={comp.name}
                            className="logo-image"
                            onError={e => { 
                              e.target.onerror = null; 
                              e.target.src = 'https://via.placeholder.com/48?text=?'; 
                            }}
                          />
                        </div>
                        {viewMode === 'card' && (
                          <div className="company-info">
                            <span className="company-name">{comp.name}</span>
                            <span className={`company-type ${comp.type.toLowerCase()}`}>
                              {comp.type}
                            </span>
                            {comp.tags && (
                              <div className="company-tags">
                                {comp.tags.map((tag) => {
                                  // Determine tag class based on content
                                  let tagClass = 'company-tag';
                                  if (tag.toLowerCase().includes('cloudops/')) {
                                    tagClass += ' tag-iactag';
                                  } else if (tag.toLowerCase().includes('cloud')) {
                                    tagClass += ' tag-cloud';
                                  } else if (tag.toLowerCase().includes('on-prem')) {
                                    tagClass += ' tag-on-prem';
                                  } else if (tag.toLowerCase().includes('hybrid')) {
                                    tagClass += ' tag-hybrid';
                                  } else if (tag.toLowerCase().includes('infrastructure') || tag.toLowerCase().includes('itops')) {
                                    tagClass += ' tag-infrastructure';
                                  } else if (tag.toLowerCase().includes('business') || tag.toLowerCase().includes('support')) {
                                    tagClass += ' tag-business';
                                  }
                                  
                                  return (
                                    <span className={tagClass} key={tag}>{tag}</span>
                                  );
                                })}
                              </div>
                            )}
                          </div>
                        )}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default LandscapeGrid; 