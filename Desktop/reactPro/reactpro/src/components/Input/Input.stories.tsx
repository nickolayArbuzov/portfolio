import React, { useState, useRef, ChangeEvent } from 'react';
import { action } from '@storybook/addon-actions';
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

export const ControlledInput = () => {
  const [parentValue, setParentValue] = useState('');
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setParentValue(e.currentTarget.value);
  }
  return <input value={parentValue} onChange={onChange}/>
}

export const ControlledCheckbox = () => {
  const [parentValue, setParentValue] = useState(false);
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setParentValue(e.currentTarget.checked);
  }
  return <input type='checkbox' checked={parentValue} onChange={onChange}/>
}

export const ControlledSelect = () => {
  const [parentValue, setParentValue] = useState<string | undefined>();
  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setParentValue(e.currentTarget.value);
  }
  return (<select value={parentValue} onChange={onChange}>
            <option>0</option>
            <option value={1}>11</option>
            <option value={2}>22</option>
            <option value={3}>33</option>
          </select>)
}

export const Input = () => <input value="it"/>