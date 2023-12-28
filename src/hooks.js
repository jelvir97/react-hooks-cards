import React, {useState} from "react";
import axios from "axios";
import {v1 as uuid} from "uuid";

const useFlip = ()=> {
    const [isFacingUp, setIsFacingUp] = useState(true);
    const flipCard = () => {
      setIsFacingUp(isUp => !isUp);
    };
    return [isFacingUp, flipCard]
}

const useAxios = (url, formatData)=>{
    const [data, setData] = useState([]);
    const addData = async (e,id='') => {
      const response = await axios.get(`${url}${id}`);
      setData(data => [...data, { ...formatData(response.data), id: uuid() }]);
    };

    const removeData = () =>{
        setData([])
    }

    return [data, addData, removeData]
}

export {useFlip, useAxios};