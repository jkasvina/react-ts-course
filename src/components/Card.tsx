import React, {useState} from 'react';

export enum CardVariant {
    outline = 'outline',
    primary = 'primary'
}

interface CardProps {
    width?: string;
    height?: string;
    // children?: React.ReactChild | React.ReactNode
    variant: CardVariant;
    onClick?: (num: number) => void;
    // Вопрос: Как красиво писать ф-ю в div, если onClick необязательный?
}


// react function component
const Card: React.FC<CardProps> =
    ({
         width,
         height,
        variant,
        onClick,
         children
    }) => {

    const [state, setState] = useState(0);


// Вопрос: style поймёт любой стиль в виде переменной, если она называется как css св-во?
// в полях любых объектов можно указать свойство без имени, если имя св-ва равно переменной,
// которая называется как это свойство
    return (
        <div style={{
            width,
            height,
            border: variant === CardVariant.outline ? '1px solid gray' : 'none',
            background: variant === CardVariant.primary? 'lightgray' : '',
        }}
             // onClick={() => {if(onClick){onClick(state)}}}
            // лучшая запись
             onClick={() => onClick && onClick(state)}
            // ? работает только с обращением к полю через точку
            // то есть, к полям объекта
            // код ниже ошибочен
            // onClick={() => {onClick?(state)}
        >
            {children}
        </div>
    );
};

export default Card;