import React, { useState } from 'react';
import s from './Select.module.css';

type ItemType = {
    title: string,
    value: any
}

type SelectPropsType = {
    onChange: (value: any) => void
    items: ItemType[]
    value?: string
}

export function Select (props: SelectPropsType){
    const [active, setActive] = useState(false);
    const selectedItem = props.items.find(i => i.value === props.value);
    const toggleItems = () => setActive(!active);
    const onItemClick = (value: any) => {
        props.onChange(value);
        toggleItems();
    }
    return(
        <div className={s.select}>
            <span className={s.main} onClick={toggleItems}>{selectedItem && selectedItem.title} <span className={(active && s.activeArrow) || s.arrow}>{'V'}</span></span> 
            {
            active &&
            <div className={s.items}>
                {props.items.map(i => <div className={s.item}
                    key={i.value}
                    onClick={() => {onItemClick(i.value)}}
                    >{i.title}
                </div>)}
            </div>
            }
        </div>
    )
}