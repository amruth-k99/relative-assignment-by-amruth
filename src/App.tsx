import Card from "./components/Card";
import "./App.css";
import { DATA, Activity } from "./constants/dummy";

function App() {
  const _renderHeading = () => {
    return (
      <div className="mt-20 flex">
        <img
          className="w-5 h-5 mr-4 my-auto"
          src={Activity}
          alt={"data.title"}
        />

        <h1 className="text-primary-text my-auto text-base text-left font-semibold opacity-90 tracking-wide">
          Trending Assets
        </h1>
      </div>
    );
  };

  const _renderCards = () => {
    return (
      <div className="pt-16 pb-7 overflow-x-scroll my-10 xs:grid xs:grid-cols-4 md:flex md:gap-14">
        {DATA.map((data, k) => (
          <Card key={k} data={data} />
        ))}
      </div>
    );
  };

  return (
    <div className="p-6 px-10 App flex-1 bg-primary-bg h-full text-center">
      {_renderHeading()}
      {_renderCards()}
    </div>
  );
}

export default App;
