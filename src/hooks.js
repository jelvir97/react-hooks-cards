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

const useAxios = (url)=>{
    const [data, setData] = useState([]);
    const addData = async () => {
      const response = await axios.get(url);
      setData(data => [...data, { ...response.data, id: uuid() }]);
    };

    return [data, addData]
}

export {useFlip, useAxios};