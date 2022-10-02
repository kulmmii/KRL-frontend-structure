import "./styles.css";
import TopNav from "./Components/TopNav";
import Map from "./Components/Map";
import BottomNav from "./Components/BottomNav";

export default function App() {
  return (
    <div>
      <TopNav />
      <Map />
      <BottomNav />
    </div>
  );
}
