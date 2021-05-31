import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
    CHANGE_NAME,
    CHANGE_DEFAULT,
    selectName
} from './nameSlice'

export function Name() {
    const name = useSelector(selectName);
    const dispatch = useDispatch();
    
    return(
        <div>
            <h1>{name}</h1>
            <button onClick={() => dispatch(CHANGE_NAME())}>
                Change Global Name
            </button>
            <button onClick={() => dispatch(CHANGE_DEFAULT())}>
                Change Global Name to Default
            </button>
        </div>
    )
}