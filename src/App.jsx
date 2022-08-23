import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import About from "./components/About";
import Products from "./components/Products";
import { ThemeProvider } from "next-themes";
import { createContext, useState } from "react";
import Login from "./components/Login";

 export const userContext = createContext();

function App() {
  const [user , setUser] = useState("haa");
  if (!user) return <Login setUser={setUser}/>
  return (
    <userContext.Provider value={user}>

   
      <ThemeProvider>
        <div className="max-w-6xl mx-auto p-4 space-y-24">
          
          <Router>
            <Header setUser={setUser}  />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/Products" element={<Products />} />
            </Routes>
          </Router>
        </div>
        <div>
          <Footer />
        </div>
      </ThemeProvider>
      </userContext.Provider>
  );
}

export default App;
