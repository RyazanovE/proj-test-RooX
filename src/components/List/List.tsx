import React from 'react';
import { IUser } from '../types/types';

export interface ListProps<T>{
    ListArr: T[],
    renderItem: (item: T, ind?: number) => React.ReactNode | React.ReactChild,
    children?: any,
    usersCount?: boolean;
}

function List<T> ({ListArr, renderItem, children, usersCount=false}: ListProps<T>)  {
    return (
        <>
            {children}
            {(ListArr.map(renderItem))}
            {usersCount && <div className="users-count">Найдено {ListArr.length} пользователей</div>}
        </>
    );
};

export default List;