import React from 'react';
import Navbar from './Components/Navbar';
import ProductRow from './Components/ProductRow';  // Correct path to your ProductRow component
import OfferSlider from './Components/OfferSlider';
import ElectronicsCarousel from './Components/ElectronicsCarousel';
function App() {
  return (
    <div>
      <Navbar />
      <ProductRow />
      <OfferSlider />
      <ElectronicsCarousel/>
    </div>
  );
}


export default App;
