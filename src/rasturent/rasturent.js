import React,{useState} from 'react';
import "./style.css";
import MenuCard from "./menuCard.js";
import Menu from "./menuApi.js";
import Navbar from "./navbar";

const uniqItem =[

  ...new Set(

    Menu.map((currIt)=>{
      return currIt.category;
    })
    )
];

export const Rasturent = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [uniquList] = useState(uniqItem);
  // const myStyle = {color: "red"};
  
  const filterItem = (category)=>{

    if(category==="All"){
      setMenuData(Menu);
      return;
    }

    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    });
    setMenuData(updatedList);
    console.log(setMenuData);
  }


  return (
    <>
    <Navbar filtertem={filterItem} uniquList={uniquList}/>
    <MenuCard menuData={menuData}/>
    </>
  );
};

export default Rasturent;

