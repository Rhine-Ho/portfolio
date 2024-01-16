import { useState, useEffect } from "react";
import { Loader, Navbar, Home, Eggdrop, Footer } from "./components"; 

function App() {

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setLoading(false);
    };

    fetchData();
  }, []);


  return (
    <>
      <div>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <Navbar />
          <Home />
          <Eggdrop />
          <Footer />
        </div>
      )}
      
      </div>
    </>
  )
}

export default App
