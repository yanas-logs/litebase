import { Navbar } from "../components/Navbar.js";
import { Welcome } from "./Welcome.js";

export const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <Welcome />
      </main>
    </>
  );
};
