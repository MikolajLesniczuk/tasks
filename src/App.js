import { Hero } from "./components/hero/hero";
import { ModalDelay } from "./components/modalDelay/modalDelay";
import { Navigation } from "./components/navigation/navigation";
import s from "./app.module.scss";
import { Features } from "./components/features/features";
import { Download } from "./components/downloadSection/download";
import { Questions } from "./components/questions/questions";
import { Newsletter } from "./components/newsletter/newsletter";
import { Footer } from "./components/footer/footer";
export const App = () => {
  return (
    <>
      <div className={s.container}>
        <Navigation />
        <Hero />
        <ModalDelay />
        <Features />
        <Download />
        <Questions />
      </div>
      <Newsletter />
      <Footer />
    </>
  );
};
