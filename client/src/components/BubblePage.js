import React, { useState, useEffect } from "react";
import  axiosWithAuth  from "../utils/AxiosAuth";
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";


const BubblePage = (props) => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  const getColors = () => {
    axiosWithAuth().get('http://localhost:5000/api/colors')
      .then(res => {
        setColorList(res.data);
      })
      .catch(err => console.log(err.response));
  };

  useEffect(() => {
    getColors();
  }, []);

  const addColors = color => {
    axiosWithAuth().post('http://localhost:5000/api/colors', color)
      .then(res => setColorList(res.data))
      .catch(err => console.log(err.response));
  };


  return (
    <>
      <ColorList {...props} colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  ); 
};

export default BubblePage;
