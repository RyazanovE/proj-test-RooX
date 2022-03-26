import React, { FC } from "react";
import { useDispatch } from "react-redux";
import List from "../List/List";
import { IUser } from "../types/types";
import { setFetchArr } from "../store/reducers/fetchArrReducer";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export interface Sidebar {
  ListArr?: (IUser | string)[];
}


const Sidebar: FC<Sidebar> = () => {
  const SortArr = ["по городу", "по имени"];
  const dispatch = useDispatch()
  const fetchArr = useSelector((state : RootState) => (state.fetchArrReducer.fetchArr))

  function sortArr (sortType: string) {
    switch (sortType) {
      case "по городу":
     dispatch(setFetchArr(fetchArr.sort((a, b) => 
     {
      if (a.address.city < b.address.city) {return -1;}
      if (a.address.city > b.address.city) {return 1;}
      return 0
     }
     )))
      break
      case "по имени":
        dispatch(setFetchArr(fetchArr.sort((a, b) => 
        {
         if (a.name < b.name) {return -1;}
         if (a.name > b.name) {return 1;}
         return 0
        }
        )))
      break
    }

  }

  return (
    <div className="sidebar">
      <List
        ListArr={SortArr}
        renderItem={(item, ind) => <button onClick={() => {sortArr(item)}} key={ind} className="sidebar__item">{item}</button>}
      >
        Сортировка
      </List>
    </div>
  );
};

export default Sidebar;
