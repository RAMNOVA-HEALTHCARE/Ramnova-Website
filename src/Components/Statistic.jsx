import React from 'react';

//#353a40
const StatisticsComponent = () => {
  return (
    <div className="statistics-container" style={{ backgroundColor: '#3D1F2B', color: 'white', padding: '3em' }}>
      <div className="stats-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ 
          margin: '0', 
          whiteSpace: 'nowrap', 
          fontFamily: 'Georgia, serif', 
          fontSize: '2em', 
          fontWeight: '700' 
        }}>
          Numbers Speak For <br /> Themselves!
        </h2>
        <div className="stats-row" style={{ display: 'flex', justifyContent: 'space-around', textAlign: 'center', flex: '1', marginLeft: '20px' }}>
          <div className="stat-item" style={{ margin: '0 10px' }}>
            <h3 style={{ 
               margin: '0', 
               whiteSpace: 'nowrap', 
               fontFamily: '"Mundo Serif Medium", Georgia, serif', 
               fontSize: '2em', 
               fontWeight: '700'  
            }}>5+ yrs</h3>
            <p style={{ 
              margin: '1.5em', 
              fontFamily: 'Gotham, sans-serif', 
              fontSize: '0.9em', 
            //   textTransform: 'uppercase' 
            }}>Curated Experience</p>
          </div>
          <div className="stat-item" style={{ margin: '0 10px' }}>
            <h3 style={{ 
              margin: '0', 
              whiteSpace: 'nowrap', 
              fontFamily: '"Mundo Serif Medium", Georgia, serif', 
              fontSize: '2em', 
              fontWeight: '700' 
            }}>10+</h3>
            <p style={{ 
              margin: '1.5em', 
              fontFamily: 'Gotham, sans-serif', 
              fontSize: '0.9em', 
            //   textTransform: 'uppercase' 
            }}>Curated Categories</p>
          </div>
          <div className="stat-item" style={{ margin: '0 10px' }}>
            <h3 style={{ 
              margin: '0', 
              whiteSpace: 'nowrap', 
              fontFamily: '"Mundo Serif Medium", Georgia, serif', 
              fontSize: '2em', 
              fontWeight: '700' 
            }}>30+</h3>
            <p style={{ 
              margin: '1.5em', 
              fontFamily: 'Gotham, sans-serif', 
              fontSize: '0.9em', 
            //   textTransform: 'uppercase' 
            }}>Curated Products</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticsComponent;