import React, {FocusEvent, useState} from 'react';

type ItemType = {
    title: string,
    id: number,
}

type SelectType = {
    selectAc: any,
    setSelectAc: (selectAc: boolean) => void,
    items: ItemType[],
    setItems: (items: ItemType[]) => void,
}

export const Select = (props: SelectType) => {
    const [valueTitle, setValueTitle] = useState<any>('Выберите');

    const selectCollapsed = () => {
        if (!props.selectAc) {
            props.setSelectAc(true);
        } else {
            props.setSelectAc(false);
        }
    }

    // const onChangeTitle = (e: FormEvent<HTMLDivElement>) => {
    //     setValueTitle(e.currentTarget.title)
    // }
    const onClick = (title: string) => {
        setValueTitle(title)
    }
    const onBlurTitle = (event: FocusEvent<HTMLDivElement>) => {
        onClick(event.currentTarget.title);
    }
    return (
        <div>
            <div onClick={selectCollapsed}
                // onChange={onChangeTitle}
                 onBlur={onBlurTitle}
            >{valueTitle}</div>
            {props.selectAc && props.items.map(it => {
                return (
                    <div  onClick={() => onClick(it.title)} key={it.id}>{it.title}</div>
                );
            })}
        </div>
    );
};

