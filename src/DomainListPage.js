import React, { useState, useEffect } from 'react';
import './DomainListPage.css';

function DomainListPage() {
  const [domains, setDomains] = useState([]);
  const [expandedDomain, setExpandedDomain] = useState(null);
  const [selectedDomain, setSelectedDomain] = useState(null);

  useEffect(() => {
    const initialDomains = [
      { id: 1, name: 'lively.now', price: 1000.00, description: 'A great domain for your business.', availabilityStatus: 0 , searchVolume: 1300 , domainStatus: 3, registar: 0},
      { id: 2, name: 'myportfolio.io', price: 750.00, description: 'Perfect for a personal portfolio site.', availabilityStatus: 1 },
      { id: 3, name: 'startup.dev', price: 1500.00, description: 'Ideal for tech startups and developers.', availabilityStatus: 1 },
      { id: 4, name: 'healthplus.org', price: 900.00, description: 'Great for health-related organizations.', availabilityStatus: 1 },
      { id: 5, name: 'fintechpro.com', price: 5000.00, description: 'The perfect domain for fintech companies.', availabilityStatus: 0 },
      { id: 6, name: 'codehub.dev', price: 1200.00, description: 'Ideal for developer-focused platforms.', availabilityStatus: 1 },
      { id: 7, name: 'shopfast.io', price: 1100.00, description: 'Best for ecommerce and retail businesses.', availabilityStatus: 0 },
      { id: 8, name: 'creativeworld.art', price: 800.00, description: 'For artists and creative platforms.', availabilityStatus: 1 },
      { id: 9, name: 'luxurystays.com', price: 7000.00, description: 'Perfect for luxury travel and stays.', availabilityStatus: 1 },
      { id: 10, name: 'futuretech.ai', price: 4000.00, description: 'Great for AI and tech companies.', availabilityStatus: 1 },
    ];
  
    const sortedDomains = [...initialDomains].sort((a, b) => b.availabilityStatus - a.availabilityStatus);
  
    setDomains(sortedDomains);
  }, []);

  const toggleExpand = (domainId) => {
    setExpandedDomain(expandedDomain === domainId ? null : domainId);
  };

  const handlePurchase = (domain) => {
    alert(`Purchasing ${domain.name} for ${domain.price}`);
  };

  const handleSelectDomain = (domain) => {
    setSelectedDomain(domain);
  };

  const closeDetails = () => {
    setSelectedDomain(null);
  };

  return (
    <div className="domain-page">
      {/* Left container for the details card */}
      <div className="details-container">
        {selectedDomain ? (
          <div className="details-card">
            <div className="details-card-header">
              <h2 className="details-card-name">{selectedDomain.name}</h2>
              <p className="details-card-price">
                {selectedDomain.availabilityStatus !== 0
                  ? formatPrice(selectedDomain.price) + ' USD'
                  : 'SOLD'}
              </p>
            </div>
            <div className='bubble'>
              <i>{selectedDomain.description}</i>
            </div>           

  
            {selectedDomain.availabilityStatus !== 0 && (
              <>
                <div className="info">
                  <h3>SEO Information</h3>
                  <ul>
                    <li><b>Status</b>: {getDomainStatusMessage(selectedDomain.domainStatus)}</li>
                  </ul>
                </div>
  
                <div className="info">
                  <h3>Additional Information</h3>
                  <ul>
                    <li><b>Registrar</b>: {getDomainRegistrar(selectedDomain.domainStatus)}</li>
                  </ul>
                </div>
              </>
            )}
            <div className="button-container">
              {selectedDomain.availabilityStatus !== 0 && (
                <button
                  onClick={() =>
                    alert(`Purchasing ${selectedDomain.name} for $${selectedDomain.price}`)
                  }
                  className="purchase-button"
                >
                  Purchase
                </button>
              )}
              <button onClick={closeDetails} className="close-button">
                Close
              </button>
            </div>
          </div>
        ) : (
          <p className="placeholder-text">Select a domain to see details.</p>
        )}
      </div>
  
      {/* Right container for the domain listings */}
      <div className="domain-list">
        {domains.map((domain) => (
          <div
            key={domain.id}
            className={`domain-item ${
              domain.availabilityStatus === 0 ? 'domain-sold-item' : ''
            }`}
            onClick={() => handleSelectDomain(domain)}
          >
            <div className="domain-header">
              <h2>{domain.name}</h2>
              {domain.availabilityStatus === 0 ? (
                <span className="domain-sold">SOLD</span>
              ) : (
                <span className="domain-price"> {formatPrice(domain.price) + ' USD'}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const formatPrice = (price) => {
  return new Intl.NumberFormat('en-US', { style: 'decimal' }).format(price);
};

function getDomainStatusMessage(availabilityStatus) {
  switch (availabilityStatus) {
    case 1:
      return "Active";
    case 2:
      return "Inactive";
    case 3:
      return "Parked";
    default:
      return "Unknown Status";
  }
}

function getDomainRegistrar(availabilityStatus) {
  switch (availabilityStatus) {
    case 1:
      return "Sedo.com";
    case 2:
      return "Namecheap.com";
    case 3:
      return "GoDaddy.com";
    default:
      return "Private / Unknown Registar";
  }
}

//function getDomainIndustries(industryTags) {
//  switch (number) {
//    case 1:
//      return "Technology";
//    case 3:
//      return "Insurance";
//    case 4:
//      return "Finance and Banking";
//    case 5:
//      return "E-commerce and Retail";
//    case 6:
//      return "Real Estate";
//    case 7:
//      return "Education";
//    case 8:
//      return "Entertainment and Media";
//    case 9:
//      return "Travel and Tourism";
//    case 10:
//      return "Art";
//    case 12:
//      return "Agriculture";
//    case 13:
//      return "Energy and Utilities";
//    case 15:
//      return "Fashion and Apparel";
//    case 16:
//      return "Legal Services";
//    case 19:
//      return "Sports and Recreation";
//    case 20:
//      return "Logistics and Supply Chain Management";
//    case 21:
//      return "Art and Design";
//    case 22:
//      return "Photography";
//    case 23:
//      return "Gaming and Esports";
//    case 24:
//      return "Blockchain and Cryptocurrency"
//  }
//}

export default DomainListPage;
