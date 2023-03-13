import React, { useState } from "react";
import { AiFillPlusSquare, AiFillMinusSquare } from "react-icons/ai";
import { useSelector ,useDispatch } from "react-redux";
import { incNo ,decNo } from "../action/Counter";
const Counter = () => {
    const myState = useSelector((state) => state.changeNumber)
    const myDispatch =  useDispatch()
    return(
        <div className="p-5">
            <div className="d-flex justify-content-center m-5">{myState}</div>
            <div className="btn-outer">
            <button className="btn" onClick={() => myDispatch(decNo())}>
                <AiFillMinusSquare />
            </button>
            <button className="btn" onClick={() => myDispatch(incNo())}> 
                <AiFillPlusSquare />
            </button>
            </div>
        </div>
    );
};

export default Counter;
