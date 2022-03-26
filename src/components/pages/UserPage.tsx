import React, { useEffect, useRef, useState } from "react";
import { IUser } from "../types/types";
import MyInput from "../input/MyInput";
import { useDispatch, useSelector } from "react-redux";
import { setDisabled, setEnabled } from "../store/reducers/disabledReducer";
import { RootState } from "../store/store";
import { submit } from "../store/reducers/submitReducer";
import { setSendComment } from "../store/reducers/sendJsonReducer";


const UserPage = () => {
  const [currUser, setcurrUser] = useState<IUser | null>(null);
  const [isLoading, setisLoading] = useState<boolean>(true);
  const dispatch = useDispatch()
  const disabled = useSelector((state: RootState) => (state.disabledReducer.disabled))
  const sendObj = useSelector((state: RootState) => (state.sendJsonReducer))
  const isEmpty = useSelector((state: RootState) => state.isEmptyReducer.empty);
  const [textAreaValue, settextAreaValue] = useState<string|null>('')

 
  let userArr;
  if (!isLoading) {
    userArr = [
      { title: "Name", placeholder: currUser.name },
      { title: "User Name", placeholder: currUser.username },
      { title: "E-mail", placeholder: currUser.email },
      { title: "Street", placeholder: currUser.address.street },
      { title: "City", placeholder: currUser.address.city },
      { title: "Zip code", placeholder: currUser.address.zipcode },
      { title: "Phone", placeholder: currUser.phone },
      { title: "Website", placeholder: currUser.website },
    ];
  }

  useEffect(() => {
    dispatch(setEnabled())
    fetch(
      `https://jsonplaceholder.typicode.com/users/${localStorage.currentUser}`
    )
      .then((resolve) => resolve.json())
      .then((res) => {
        setcurrUser(res);
        setisLoading(false);
      });
  }, []);

  useEffect(() => {

    if (textAreaValue) {
      dispatch(setSendComment(textAreaValue))
    }
  }, [textAreaValue])

  function submitClickHandler() {
    dispatch(submit())
    if (!isEmpty && !disabled) {
      console.log(JSON.stringify(sendObj))
    }

  }
 


  return (
    <>
      {!isLoading && (
        <div className="user-page-container">
          <div className="user-page-container__header">
            <h1 className="user-page-container__header-title">Профиль пользователя</h1>
            <button onClick={() => {dispatch(setDisabled())}}>Редактировать</button>
            </div>
          <div className="user-page-table">
            {userArr.map((item) => (
              <div key={item.title}>
                <MyInput title={item.title} placeholder={item.placeholder} />
              </div>
            ))}
            <div className="user-page-table__comment">
              Comment
              <textarea 
              value={textAreaValue}
              onChange={(e) => {settextAreaValue(e.currentTarget.value)}}
              disabled={disabled}
                className="user-page-table__textarea"
                cols={30}
                rows={10}
              ></textarea>
            </div>
          </div>
          <button onClick={() => {submitClickHandler()}} className=   "user-page-container__submit-btn" style={disabled ? {background: "#AFAFAF"} : {background: "#52CF4F"} }>Отправить</button>
        </div>
      )}
      {isLoading && <img className="loader" src='/images/shariki.gif'></img>}
    </>
  );
};

export default UserPage;
