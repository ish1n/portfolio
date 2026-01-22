import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react"
import { cn } from "../lib/utils";

export const ThemeToggle = ()=>{
    const [isDarkMode,SetIsDarkMode]=useState(false);
    useEffect(()=>
    {
        const storedTheme=localStorage.getItem("theme")
        if(storedTheme==="dark"){
            SetIsDarkMode(true)
            document.documentElement.classList.add("dark");
        }
        else{
           localStorage.setItem("theme","light");


            SetIsDarkMode(false);


        }

    },[])
    const toggleTheme = () =>{
        if(isDarkMode){
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme","light");


            SetIsDarkMode(false);

        }
        else{
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme","dark");
            SetIsDarkMode(true);

        }
    };
    // src/components/ThemeToggle.jsx
return (
  <button
    onClick={toggleTheme}
    className={cn(
      // Changed right-5 to right-16 on mobile (small screens)
      // and kept it right-5 for medium screens and up (md:right-5)
      "fixed top-4 right-16 md:right-5 z-50 p-2 rounded-full transition-all duration-300",
      "bg-secondary/50 backdrop-blur-sm hover:bg-secondary/80 focus:outline-none"
    )}
  >
    {isDarkMode ? <Sun className="..." /> : <Moon className="..." />}
  </button>
);
};