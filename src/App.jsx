import MenuItems from "./components/MenuItems";
import Details from "./components/Details";
import BrandInfo from "./components/BrandInfo";
import BusinessDetails from "./components/BusinessDetails";
import ContactInfo from "./components/ContactInfo";
import SocialDetails from "./components/SocialDetails";
import OtherDetails from "./components/OtherDetails";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <MenuItems />
      <Routes>
        <Route path="/" element={<Details />} />
        <Route path="/brandinfo" element={<BrandInfo />} />
        <Route path="/businessdetails" element={<BusinessDetails />} />
        <Route path="/contactinfo" element={<ContactInfo />} />
        <Route path="/socialdetails" element={<SocialDetails />} />
        <Route path="/otherdetails" element={<OtherDetails />} />
      </Routes>
    </div>
  );
}

export default App;
