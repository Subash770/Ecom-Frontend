import React from 'react';
import WelcomeSection from '../Components/WelcomeSection';
import ShopSection from '../Components/ShopSection';
import BenefitsSection from '../Components/BenefitsSection';
import OffersSection from '../Components/OffersSection';
function Home() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
    <WelcomeSection />
    <ShopSection />
    <BenefitsSection />
    <OffersSection />
  </div>
  );
}

export default Home;
