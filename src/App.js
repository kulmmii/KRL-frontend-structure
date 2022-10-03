import "./styles.css";
import TopNav from "./Components/TopNav";
import Map from "./Components/Map";
import BottomNav from "./Components/BottomNav";
import ServiceProviderCard from "./Components/ServiceProviderCard";

export default function App() {
  return (
    <div>
      <TopNav />
      <Map />
      <ServiceProviderCard />
      <BottomNav />
    </div>
  );
}
