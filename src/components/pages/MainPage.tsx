import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import List from "../List/List";
import { RootState } from "../store/store";
import { IUser } from "../types/types";
import UserItem from "../UserItem/UserItem";
import { setFetchArr } from "../store/reducers/fetchArrReducer";

const MainPage = () => {
  const fetchArr = useSelector(
    (state: RootState) => state.fetchArrReducer.fetchArr
  );
  const [isLoading, setisLoading] = useState<boolean>(true);


  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resolve) => resolve.json())
      .then((res) => {
        dispatch(setFetchArr(res))
        setisLoading(false)

      });
  }, []);

  return (
    <>
      {!isLoading ? (
        <List<IUser>
          ListArr={fetchArr}
          usersCount={true}
          renderItem={(item) => <UserItem item={item} key={item.id}></UserItem>}
        >
          Список пользователей
        </List>
      ) : (
        <img className="loader" src='/images/shariki.gif'></img>
      )}
    </>
  );
};

export default MainPage;
