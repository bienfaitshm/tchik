import { useEffect } from "react";
/**
 * Removes the initial native HTML splash screen with a fade-out animation once loaded.
 * @returns Null as it renders no visual DOM nodes.
 */
function SplashRemover(): null {
  useEffect(() => {
    const splashElement = document.getElementById("splash-screen");
    if (!splashElement) return;

    splashElement.classList.add("fade-out");

    const handleTransitionEnd = (): void => {
      splashElement.remove();
    };

    splashElement.addEventListener("transitionend", handleTransitionEnd, {
      once: true,
    });

    return () => {
      splashElement.removeEventListener("transitionend", handleTransitionEnd);
    };
  }, []);

  return null;
}

function App() {
  // const [greetMsg, setGreetMsg] = useState("");
  // const [name, setName] = useState("");

  // async function greet() {
  //   // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
  //   setGreetMsg(await invoke("greet", { name }));
  // }

  return (
    <main className="container">
      <SplashRemover />
      <h1>TCHIK Welcome to Tauri + React</h1>
    </main>
  );
}

export default App;
