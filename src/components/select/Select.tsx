import React, {useEffect, useState} from 'react';
import s from './Select.module.css';

type ItemType = {
    title: string,
    id: number,
}

type SelectType = {
    selectAc: boolean,
    setSelectAc: (selectAc: boolean) => void,
    items: ItemType[],
    setItems: (items: ItemType[]) => void,
}

export const Select = (props: SelectType) => {
    const [valueTitle, setValueTitle] = useState('None');
    const [style, setStyle] = useState(s.closed);

    useEffect(()=>{
        localStorage.setItem('valueTitle', JSON.stringify(valueTitle))
    },[valueTitle]);

    const stringValueTitle = localStorage.getItem('valueTitle')
    useEffect(() => {
        if(stringValueTitle){
            const newValueTitle = JSON.parse(stringValueTitle)
            setValueTitle(newValueTitle)
        }
    },[])

    const selectCollapsed = () => {
        if (!props.selectAc) {
            props.setSelectAc(true);
            setStyle(s.blockSelect__itemsActive)
        } else {
            props.setSelectAc(false);
            setStyle(s.blockSelect__itemsUnActive)
        }
    }

    const onClick = (title: string) => {
        setValueTitle(title)
        props.setSelectAc(false);
        setStyle(s.blockSelect__itemsUnActive)

    }
    return (
        <div className={s.blockSelect}>
            <div className={s.blockSelect__title} onClick={selectCollapsed}>{valueTitle}</div>

            {props.selectAc ?
                <div className={style}> {props.items.map(it => {
                    return (
                        <div className={s.blockSelect__item} onClick={() => onClick(it.title)} key={it.id}>{it.title}</div>
                    );
                })}
                </div> :
                <div className={style}>{props.items.map(t=><div>{t.title}</div>)}</div>
            }
        </div>
    );
};

