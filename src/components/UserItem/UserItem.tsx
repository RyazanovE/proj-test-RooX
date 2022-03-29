import React, { FC } from "react";
import {useNavigate} from "react-router-dom"
import { IUser } from "../types/types";

interface UserItemProps {
  item: IUser;
}

const UserItem: FC<UserItemProps> = ({item}) => {
  const navigate = useNavigate()
  return (
      <div className="useritem">
        <div className="useritem__text"><span>Ф.И.О:</span> {item.name}</div>
        <div className="useritem__text"><span>город:</span> {item.address.city}</div>
        <div className="useritem__text"><span>компания:</span> {item.email}<span onClick={() => {
          navigate("/user")
          localStorage.currentUser=item.id
      }} className="more">Подробнее</span></div>
      </div>
  );
};

export default UserItem;
