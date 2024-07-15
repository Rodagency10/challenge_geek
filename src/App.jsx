import "./App.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "./components/mode-toggle";
import HeroSection from "./components/HeroSection";
import WhoCanParticipate from "./components/WhoCanParticipate";
import ProgrammingLangages from "./components/ProgrammingLangages";
import { MarqueeReview} from "./components/Marquee";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="absolute top-4 right-4">
        <ModeToggle />
      </div>
      <HeroSection />
      <WhoCanParticipate />
      <ProgrammingLangages />
      <MarqueeReview />

      <div>Made with ❤️ by Rodrigue EPUH <span className="font-thin">(rodriguepuh@gmail.com) </span> </div>
    </ThemeProvider>
  );
}

export default App;
