import { useEffect, useState } from "react";
import { AppRoutes } from "./utils/Routes";

export function LoadingComponents() {
  return (
    <div className="min-h-screen bg-dark flex justify-center items-center flex-col">
      <span className=" text-white text-4xl md:text-6xl lg:text-8xl text-gradient font-extrabold my-5">
        Sophomore
      </span>
      <span className="loader"></span>
    </div>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleResourceLoad = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setLoading(false);
    };

    handleResourceLoad();
  }, []);

  return <>{loading ? <LoadingComponents /> : <AppRoutes/>}</>;
}

export default App;