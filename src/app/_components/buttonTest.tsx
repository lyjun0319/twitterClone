"use client";
import React from 'react';
import {Button} from "@/stories/Button";

interface test {
    label :string
}
const ButtonTest = ({label}:test) => {
    const handelClick = ()=>{
        console.log("aa");
    }
    return (
        <Button label={label} onClick={handelClick} />
    );
};

export default ButtonTest;