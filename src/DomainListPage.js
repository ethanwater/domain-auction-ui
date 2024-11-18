import React, { useState, useEffect } from 'react';
import './DomainListPage.css';

//function FetchDomains() {
//  const AWS = require('aws-sdk');
//
//  // Configure AWS DynamoDB
//  AWS.config.update({ region: 'your-region' }); // e.g., 'us-west-2'
//  const dynamoDB = new AWS.DynamoDB.DocumentClient();
//
//  /**
//   * Fetch all items classified as "art" from DynamoDB.
//   * @param {string} tableName - The name of the DynamoDB table.
//   * @param {string} classificationKey - The attribute used for classification.
//   * @param {string} classificationValue - The value to filter by (e.g., "art").
//   * @returns {Promise<Array>} - An array of items matching the classification.
//   */
//  async function fetchTechItems(tableName, classificationKey, classificationValue) {
//    const params = {
//      TableName: tableName,
//      IndexName: 'your-index-name', // Optional: Use this if querying a GSI
//      FilterExpression: `${classificationKey} = :classificationValue`,
//      ExpressionAttributeValues: {
//        ':classificationValue': classificationValue,
//      },
//    };
//
//    try {
//      const result = await dynamoDB.scan(params).promise();
//      return result.Items;
//    } catch (error) {
//      console.error('Error fetching items:', error);
//      throw new Error('Unable to fetch items from DynamoDB');
//    }
//  }
//}

function DomainListPage({title}) {
  const [domains, setDomains] = useState([]);
  const [selectedDomain, setSelectedDomain] = useState(null);

  useEffect(() => {
    //(async () => {
    //  try {
    //    const fetchedDomains = await fetchTechItems('YourTableName', 'Category', title);
    //    console.log('Fetched items:', items);
    //  } catch (error) {
    //    console.error('Error:', error.message);
    //  }
    //})();

    //-------------------------------------------------------------MOCK DATA--------------------------------------------------------------------------------
    const technologyDomains = [
      { id: 1, name: 'startup.now', price: 500.00, description: 'A great domain for a startup.', availabilityStatus: 1, searchVolume: 1300, domainStatus: 3, registar: 2, gdAppraisal: 682, ddAppraisal: 1012, domainYear: 2024 },
      { id: 2, name: 'myportfolio.io', price: 750.00, description: 'Perfect for a personal portfolio site.', availabilityStatus: 1, acquisitionOption: 1},
      { id: 3, name: 'devloper.dev', price: 200.00, description: 'Ideal for tech startups and developers.', availabilityStatus: 1 },
      { id: 4, name: 'healthplus.org', price: 900.00, description: 'Great for health-related organizations.', availabilityStatus: 1 },
      { id: 5, name: 'fintechpro.com', price: 5000.00, description: 'The perfect domain for fintech companies.', availabilityStatus: 0 },
      { id: 6, name: 'codehub.dev', price: 1200.00, description: 'Ideal for developer-focused platforms.', availabilityStatus: 1 },
      { id: 7, name: 'shopfast.io', price: 1100.00, description: 'Best for ecommerce and retail businesses.', availabilityStatus: 0 },
      { id: 8, name: 'creativeworld.art', price: 800.00, description: 'For artists and creative platforms.', availabilityStatus: 1 },
      { id: 9, name: 'luxurystays.com', price: 7000.00, description: 'Perfect for luxury travel and stays.', availabilityStatus: 1 },
      { id: 10, name: 'futuretech.ai', price: 4000.00, description: 'Great for AI and tech companies.', availabilityStatus: 1 },
      { id: 11, name: 'greengrid.energy', price: 1200.00, description: 'Excellent for sustainable energy projects.', availabilityStatus: 1 },
      { id: 12, name: 'urbanretreat.life', price: 950.00, description: 'For wellness and lifestyle businesses.', availabilityStatus: 1 },
      { id: 13, name: 'digitalwave.net', price: 1300.00, description: 'Perfect for digital marketing companies.', availabilityStatus: 1 },
      { id: 14, name: 'skyhigh.travel', price: 2000.00, description: 'For travel and adventure businesses.', availabilityStatus: 1 },
    ];

    const healthDomains = [
      { id: 26, name: 'ventureplus.ai', price: 3400.00, description: 'Perfect for venture-backed AI companies.', availabilityStatus: 1 },
      { id: 27, name: 'boldmove.co', price: 800.00, description: 'Ideal for startups and innovators.', availabilityStatus: 1 },
      { id: 28, name: 'wellnest.life', price: 1300.00, description: 'For wellness and mental health businesses.', availabilityStatus: 1 },
      { id: 29, name: 'greenfoods.org', price: 1100.00, description: 'Great for eco-friendly food initiatives.', availabilityStatus: 1 },
      { id: 30, name: 'quickfixes.dev', price: 700.00, description: 'For tech support or solutions startups.', availabilityStatus: 1 },
      { id: 31, name: 'brightcoast.travel', price: 1800.00, description: 'Perfect for coastal tourism.', availabilityStatus: 1 },
      { id: 32, name: 'smartvault.io', price: 2200.00, description: 'Ideal for security or storage solutions.', availabilityStatus: 1 },
      { id: 33, name: 'dreamworks.art', price: 900.00, description: 'For creative projects or portfolios.', availabilityStatus: 1 },
      { id: 34, name: 'urbanpulse.org', price: 1500.00, description: 'Great for urban planning initiatives.', availabilityStatus: 1 },
      { id: 35, name: 'cyberforge.net', price: 2000.00, description: 'Perfect for cybersecurity platforms.', availabilityStatus: 1 },
      { id: 36, name: 'streamline.dev', price: 1200.00, description: 'Ideal for SaaS platforms.', availabilityStatus: 1 },
      { id: 37, name: 'blueocean.ai', price: 3000.00, description: 'For innovative AI companies.', availabilityStatus: 1 },
      { id: 38, name: 'ecoimpact.life', price: 1100.00, description: 'Perfect for environmental impact ventures.', availabilityStatus: 1 },
      { id: 39, name: 'futuregrowth.co', price: 900.00, description: 'Great for investment or consultancy firms.', availabilityStatus: 1 },
    ]

    let selectedDomains = [];
    switch (title) {
      case 'Technology':
        selectedDomains = technologyDomains;
        break;
      case 'Health and Wellness':
        selectedDomains = healthDomains;
        break;
      default:
        selectedDomains = [];
        break;
    }
    //-------------------------------------------------------------MOCK DATA--------------------------------------------------------------------------------
      
    //{For dynamodb fetching} const sortedDomains = fetchedDomains.sort((a, b) => b.availabilityStatus - a.availabilityStatus);
    const sortedDomains = selectedDomains.sort((a, b) => b.availabilityStatus - a.availabilityStatus);
    setDomains(sortedDomains);
  }, [title]);

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
      <div className="domain-title">
        <h1>{title}</h1>
      </div>
      {/* Left container for the details card */}
      <div className='domain-content'>
        <div className="details-container">
          {selectedDomain ? (
            <div key={selectedDomain.id} className="details-card">
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
                    <h3>Appraisals</h3>
                    <ul>
                      <li><b>DynaDot</b>: ${formatPrice(selectedDomain.ddAppraisal)}</li>
                      <li><b>GoDaddy</b>: ${formatPrice(selectedDomain.gdAppraisal)}</li>
                    </ul>
                  </div>

                  <div className="info">
                    <h3>SEO Information</h3>
                    <ul>
                      <li><b>Status</b>: {getDomainStatusMessage(selectedDomain.domainStatus)}</li>
                    </ul>
                  </div>
  
                  <div className="info">
                    <h3>Additional Information</h3>
                    <ul>
                      <li><b>Registrar</b>: {getDomainRegistrar(selectedDomain.registar)}</li>
                      <li><b>Year Issued</b>: {selectedDomain.domainYear}</li>
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
                {selectedDomain.acquisitionOption == 1 && (
                  <button
                    onClick={() =>
                      alert(`Purchasing ${selectedDomain.name} for $${selectedDomain.price}`)
                    }
                    className="offer-button"
                  >
                   Offer 
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
