import React from "react";
import { AiFillPlusSquare, AiFillMinusSquare } from "react-icons/ai";
import { useSelector ,useDispatch } from "react-redux";
import { incNo ,decNo ,changeName } from "../action/Counter";
const Counter = () => {
    const myState = useSelector((state) => state.changeNumber)
    console.log(myState , "Mystate")
    const myDispatch =  useDispatch()
    return(
        <div className="p-5">
            <div className="d-flex justify-content-center m-5">{myState.count}</div>
            <div className="d-flex justify-content-center m-5">{myState.name}</div>
            <div className="btn-outer">
            <button className="btn" onClick={() => myDispatch(decNo(5))}>
                <AiFillMinusSquare />
            </button>
            <button className="btn" onClick={() => myDispatch(incNo(5))}> 
                <AiFillPlusSquare />
            </button>
            <button className="btn" onClick={() => myDispatch(changeName())}> 
                <AiFillPlusSquare />
            </button>
            </div>
        </div>
    );
};

export default Counter;
