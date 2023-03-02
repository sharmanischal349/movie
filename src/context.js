
import React,{useContext,useEffect,useState} from "react";
const AppContext =React.createContext();
export const API_URL=`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;
const AppProvider =({children})=>{
    const [isLoading,setLoading]= useState(true);
    const [movie,setMovie]=useState([]);
    const[isError,setIsError]=useState({
        show:"false",
        msg:""
    })
    const [query,setQuery]=useState("titanic");
    const getMovies=async(url)=>{
        setLoading(true);
        try{
            const res=await fetch(url);
            const data=await res.json();
            console.log(data);
            if(data.Response==="True"){
                setLoading(false);
                setIsError({
                    show:"false",
                    msg:""
                })
                   setMovie(data.Search);
            }
            else{
                let str="Incorrect IMDb ID.";
                if(data.Error===str){
                    setIsError({
                        show:"false",
                        msg:""
                    }) 
                }
            else{
                setIsError({
                    show:"true",
                    msg:data.Error
            })}
            }
        }catch(error){
            console.log(error);
        }
    }
    useEffect(()=> {
     let timerOut= setTimeout(()=>{getMovies(`${API_URL}&s=${query}`);
    },500);
    return ()=>clearTimeout(timerOut);
    },[query]);
    return <AppContext.Provider value={{isLoading,movie,isError,query,setQuery}}>{children}</AppContext.Provider>
};
const useGlobalContext=()=>{
    return useContext(AppContext);
};

export {AppContext,AppProvider,useGlobalContext};