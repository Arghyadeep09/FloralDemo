import Footer from "./components/layout/Footer";
import HeroSection from "./components/sections/HeroSection";
import TopSellingSection from "./components/sections/TopSellingSection";

const App = () => {
  return (
    <>
      <div
        className="[@media(min-width:768px)_and_(max-width:840px)]:overflow-x-hidden
    [@media(min-width:1280px)_and_(max-width:1553px)]:overflow-x-hidden"
      >
        <HeroSection />
        <TopSellingSection />
      </div>
    </>
  );
};

export default App;
