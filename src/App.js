import React, { useEffect, useMemo, useState } from "react";
import "./styles/App.css";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import About from './pages/About'
import Posts from "./pages/Posts";
import Error from "./pages/Error";
import Navbar from "./components/UI/navbar/Navbar";
import AppRouter from "./components/AppRouter";
import { AuthContext } from "./context";



function App() {
    const [isAuth, setIsAuth] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (localStorage.getItem('auth')) {
            setIsAuth(true)
        }
        setIsLoading(false)
    },[])
    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth,
            isLoading,
        }}>
            <BrowserRouter >
                <Navbar />
                <AppRouter />
            </BrowserRouter> 
        </AuthContext.Provider>
  
    );
}

export default App;
