import React from 'react';
import { useState,useEffect } from 'react';
const StatisticsComponent = () => {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="statistics-container" 
          style={{ backgroundColor: '#3D1F2B', color: 'white', padding: '3em',width:'100%' }}>
      <div className="stats-header" 
            style={{ display: 'flex',
            justifyContent: 'space-between', 
            alignItems: 'center',
            flexDirection: windowWidth <= 470 ? 'column' : 'row',
          }}
            
          >
        <h2 
          style={{ 
          margin: '0', 
          whiteSpace: 'nowrap', 
          fontFamily: 'Georgia, serif', 
          fontWeight: '700', 
          marginBottom: windowWidth <= 470 ? '20px' : '0',
          fontSize: windowWidth <= 870 ? '1.5rem' : '2rem',
        }}>
          Numbers Speak For <br /> Themselves!
        </h2>
        <div className="stats-row" 
          style={{ display: 'flex',
                   justifyContent: 'space-around',
                   textAlign: 'center', 
                   flex: '1', 
                   flexDirection: windowWidth <= 870 ? 'column' : 'row',
                   padding:'10px'
                }}>
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