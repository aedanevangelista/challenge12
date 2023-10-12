import LeftContainer from "./components/LeftContainer";
import RightContainer from "./components/RightContainer";

function App() {
  return (
    <>
      <main className="flex justify-center items-center min-h-screen font-Manrope  bg-[#edf2f8]">
        <main className=" shadow-2xl flex flex-col md:flex-row mx-8 md:mx-0 bg-white rounded-xl">
          <LeftContainer />
          <RightContainer />
        </main>
      </main>
    </>
  );
}

export default App;
