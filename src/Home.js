//import React ,{useContext} from 'react'
//import { useGlobalContext } from './context';
import Movie from "./Movie";
import Search from "./Search";
//import { AppContext } from './context';

const Home = () => {
  //const name=useContext(AppContext);
  //const name=useGlobalContext();
  return (
    <>
     {/* <div>Home</div> */}
    {/* <p>{name}</p> */}
    <Search />
    <Movie />
    </>
  )
}

export default Home;