import {React, useState} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Description from './Description';
import Home from './Home';

function App  () {
  const [movies, setmovies] = useState([
    {
      title : "life",
      duration : "01:43:58",
      date : "2017",
      rate : "4",
      genre : "Horror / Sci-Fi",
      description : "The film tells the story of the six-member crew of the International Space Station, who are on the brink of one of the most important discoveries in human history, the first evidence of extraterrestrial life on Mars. Smarter than anyone expected.",
      img : "https://i.egycdn.com/pic/WmFwZndlY3ZjdmNtVGJtdm1FRWNtWUlQY05iY2t3UA.jpg",
      href:"https://www.youtube.com/embed/watch?v=LeLsJfGmY_Y"
    },
    {
      
      title : "logan",
  duration : "02:17:24",
  date : "2017",
  rate : "3",
  genre : "action / Sci-Fi",
  description : "Logan and Professor Charles Xavier must deal with the losses Nathaniel Essex has caused by destroying the world and leaving him in ruins. Logan must confront and defeat Nathaniel Essex with the help of a young girl named Laura Kenny, a female clone. From Wolverine.",
  img : "https://i.egycdn.com/pic/WmFwZndlY21Udm1wcEV2Y212RWN3VEVtTE5qbW1tbUs.jpg", 
  href:"https://www.youtube.com/embed/watch?v=Div0iP65aZo&t=5s"
    },
    {
    
        

    },
    {
    
      title : "split",
  duration : "01:57:08",
  date : "2017",
  rate : "5",
  genre : "Horror / Thriller",
  description : "Kevin, a man with at least twenty-three different personalities inside of him, kidnaps three teenage girls, and while they're being held captive, his last character (The Beast) begins to break free in order to control and take over the rest of the characters in Kevin's possession, as they all wrestle with each other. The inner characters among themselves about the fate of the three girls.",
  img : "https://i.egycdn.com/pic/WmFwZndlY21qbWJtcFRwdkVjbWpsYWxtYnZ3YXg.jpg",
  href:"https://www.youtube.com/embed/84TouqfIsiI"
  }
]);
  return (
    <div>
      <BrowserRouter>
      <Route exact path="/" ><Home movies={movies}/></Route>
      <Route path="/:name"><Description movies={movies}/></Route>
      </BrowserRouter>
    </div>
  );
}

export default App