import React, {useEffect, useState, KeyboardEvent} from 'react';
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
    //выбирается options
    const [valueTitle, setValueTitle] = useState('None');
    //стайл для закрытия открытия select
    const [style, setStyle] = useState(s.closed);
    //hover при уже выбранном select. Подчеркивает уже то что выбрали
    const [hoverActiveOption, setHoverActiveOption] = useState(valueTitle)


    useEffect(() => {
        localStorage.setItem('valueTitle', JSON.stringify(valueTitle));
        localStorage.setItem('hoverActiveOption', JSON.stringify(hoverActiveOption));
    }, [valueTitle, hoverActiveOption]);

    const stringValueTitle = localStorage.getItem('valueTitle');
    const stringHoverActiveOption = localStorage.getItem('hoverActiveOption');
    useEffect(() => {
        if (stringValueTitle) {
            const newValueTitle = JSON.parse(stringValueTitle)
            setValueTitle(newValueTitle)
        }
        if (stringHoverActiveOption) {
            const newHoverActiveOption = JSON.parse(stringHoverActiveOption)
            setHoverActiveOption(newHoverActiveOption)
        }
    }, [])
//Я буду запускать колбек функцию если что-то изменилось в описанной зависимости
    useEffect(() => {
        setHoverActiveOption(valueTitle); //когда мы мышкой водим, value должно меняться
    }, [valueTitle]);//перерисовка происходит, но пока не нажали ентер ничего не изменилось

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

    // const onKeyDownHandler =(e:KeyboardEvent<HTMLDivElement>)=>{
    //     if (e.key === 'Enter'){
    //         onClick(valueTitle);
    //     }
    // }

    // const style = props.selectAc ? : s.closed;


    const onKeyUpHandler = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].title === hoverActiveOption) {
                    const precedentElement = e.key === 'ArrowDown' ? props.items[i + 1] : props.items[i - 1];
                    if (precedentElement) {
                        setValueTitle(precedentElement.title);
                        return;
                    } else {
                        return;
                    }
                }
            }
            setValueTitle(props.items[0].title);
        }
        if (e.key === "Enter" || e.key === 'Escape') {
            onClick(valueTitle)
        }
    }

    return (
        <div className={s.blockSelect}>
            <div className={s.blockSelect__title}
                 onClick={selectCollapsed}
                 onKeyDown={onKeyUpHandler}
                // onKeyDown={onKeyDownHandler}
                 tabIndex={0}
            >{valueTitle}</div>

            {props.selectAc ?
                <div className={style}>
                    {props.items.map(it => {

                        // сбрасывается hover при наведении на другой option
                        const hoveredValueOption = it.title === hoverActiveOption
                        // const isCheckedOption = it.title === valueTitle;//без события onMouse, просто добавить в класс проверку

                        return (
                            <div
                                key={it.id}
                                className={`${s.blockSelect__item} ${hoveredValueOption && s.activeOption}`}
                                onClick={() => onClick(it.title)}
                                onMouseEnter={() => setHoverActiveOption(it.title)}
                            >{it.title}</div>
                        );
                    })}
                </div> :
                <div className={style}>{props.items.map(t => <div key={t.id}>{t.title}</div>)}</div>
            }
        </div>
    );
};

