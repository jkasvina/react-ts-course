import React, { FC } from "react";

// <T> - любой тип = any
interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

// <p> // <- ReactElement = JSX.Element
//     <Custom> // <- ReactElement = JSX.Element
//         {true && "test"} // <- ReactNode
//     </Custom>
// </p>

// Вопрос: Какие ещё компоненты встречаются, кроме функциональных?
// Ответ: классовые, но это устаревший вид

// Есть ли разница, писать T или any?

// переиспользуемый компонент для разных типов строк списка
export default function List<T>(props: ListProps<T>) {
  return (
    // renderItem - callback
    <div>{props.items.map(props.renderItem)}</div>
  );
}

// через стрелочную ф-ю не будет работать почему-то
// const List: FC<ListProps> = () => {
//     return (
//         <div>
//
//         </div>
//     );
// };
//
// export default List;
