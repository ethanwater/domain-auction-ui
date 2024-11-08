import React, { useState, useEffect } from 'react';
import './DomainListPage.css';

function DomainListPage() {
  const [domains, setDomains] = useState([]);
  const [expandedDomain, setExpandedDomain] = useState(null);

  useEffect(() => {
    const initialDomains = [
      { id: 1, name: 'lively.now', price: 1000.00, description: 'A great domain for your business.', status: 0 },
      { id: 2, name: 'myportfolio.io', price: 750.00, description: 'Perfect for a personal portfolio site.', status: 1 },
      { id: 3, name: 'startup.dev', price: 1500.00, description: 'Ideal for tech startups and developers.', status: 1 },
      { id: 4, name: 'healthplus.org', price: 900.00, description: 'Great for health-related organizations.', status: 1 },
      { id: 5, name: 'fintechpro.com', price: 5000.00, description: 'The perfect domain for fintech companies.', status: 0 },
      { id: 6, name: 'codehub.dev', price: 1200.00, description: 'Ideal for developer-focused platforms.', status: 1 },
      { id: 7, name: 'shopfast.io', price: 1100.00, description: 'Best for ecommerce and retail businesses.', status: 0 },
      { id: 8, name: 'creativeworld.art', price: 800.00, description: 'For artists and creative platforms.', status: 1 },
      { id: 9, name: 'luxurystays.com', price: 7000.00, description: 'Perfect for luxury travel and stays.', status: 1 },
      { id: 10, name: 'futuretech.ai', price: 4000.00, description: 'Great for AI and tech companies.', status: 1 },
    ];
  
    const sortedDomains = [...initialDomains].sort((a, b) => b.status - a.status);
  
    setDomains(sortedDomains);
  }, []);

  const toggleExpand = (domainId) => {
    setExpandedDomain(expandedDomain === domainId ? null : domainId);
  };

  const handlePurchase = (domain) => {
    alert(`Purchasing ${domain.name} for ${domain.price}`);
  };

  return (
    <div className="domain-list">
      {domains.map((domain) => (
        <div
          key={domain.id}
          className={`domain-item ${domain.status === 0 ? 'domain-sold-item' : ''}`}
        >
          <div className="domain-header" onClick={() => toggleExpand(domain.id)}>
            <h2>{domain.name}</h2>
            {domain.status === 0 ? (
              <span className="domain-sold">SOLD</span>
            ) : (
              <span className="domain-price">{formatPrice(domain.price)} USD</span>
            )}
          </div>
          {expandedDomain === domain.id && (
            <div className="domain-details">
              <p>{domain.description}</p>
              {domain.status !== 0 && (
                <button
                  onClick={() => handlePurchase(domain)}
                  className="purchase-button"
                >
                  Purchase
                </button>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

const formatPrice = (price) => {
  return new Intl.NumberFormat('en-US', { style: 'decimal' }).format(price);
};

export default DomainListPage;
