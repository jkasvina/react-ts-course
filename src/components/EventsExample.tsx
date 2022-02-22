import React, {useState, FC, useRef} from 'react';

const EventsExample: FC = () => {
    const [value, setValue] = useState<string>('');
    const [isDrag, setIsDrag] = useState<boolean>(false);

    // типизация хука useReference
    const inputRef = useRef<HTMLInputElement>(null)

    // callbacks, которые вешаются на слушатели событий (onChange),
    // принимают параметром event
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        // в react event оборачивается в обёртку, которая называется synthetic event
        // чтобы посмотреть полный список полей, нужно обращаться к документации,
        // либо явно указывать тип события!!!!!

        // <HTMLInputElement> - generic есть для любого html элемента
        // он нужен, чтобы после event. или event.target. мы видели набор
        // действий, подходящих именно нашему элементу !!!!!!
        setValue(e.target.value);
    }

    // для всех событий, связанных с мышью указываем тип MouseEvent
    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        // console.log(value)
        console.log(inputRef.current?.value)
    }
    
    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
        // e.dataTransfer. - важный парамент для drag and drop
        // можем установит/получить data
        // https://www.youtube.com/watch?v=FgvJH91a5K0&list=PL6DxKON1uLOENy8yYgn0uLwB6p8eAW9NZ
        // плейлист по drag and drop
        console.log('Меня схватили!!')
    }

    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(false)
    }

    const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
      setIsDrag(false)
    }
    
    const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault()
        setIsDrag(true)
    }
    
    return (
        <div>
            <input value={value} onChange={changeHandler} type="text" placeholder='управляемый'/>
            <input ref={inputRef} type="text" placeholder='неуправляемый'/>
            <button onClick={clickHandler}>Console.log</button>
            <br/>

            {/*draggable - элемент можно перетаскивать мышью*/}
            <div draggable
                 onDrag={dragHandler}
                 style={{width: 200, height: 200, background: 'red'}}>
            </div>
            {/*меняем цвет второго квадрата, когда на него перетаскивают первый*/}
            {/* onDragOver - когда находимся внутри блока
                onDragLeave - когда блок покинут
                onDrop - 
            */}
            <div onDrop={dropHandler}
                 onDragLeave={leaveHandler}
                 onDragOver={dragWithPreventHandler}
                 style={{width: 200, height: 200, background: isDrag ? 'yellow' : 'blue', marginTop: 15}}>
            </div>
        </div>
    );
};

export default EventsExample;