import React, { useState, useRef, ChangeEvent } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

export default {
  title: 'input',
};

export const UncontrolledInput = () => <input/>

export const TrackValueUncontrolledInput = () => {
  const [value, setValue] = useState('');
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  }
  return(
    <><input onChange={onChange}/> {value} </>
  )
}

export const GetValueUncontrolledInputByClickButton = () => {
  const [value, setValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const getValue = () => {
    const el = inputRef.current as HTMLInputElement;
    setValue(el.value);
  }

  return(
    <><input ref={inputRef}/> <button onClick={getValue}>getValue</button> {value} </>
  )
}

export const Input = () => <input value="it"/>