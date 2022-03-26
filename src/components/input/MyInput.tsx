import React, { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { setEmpty, setNotEmpty } from "../store/reducers/isEmptyReducer";
import {setSendActions} from "../store/reducers/sendJsonReducer"

interface MyInputProps {
  title: string;
  placeholder: string;
}

const MyInput: FC<MyInputProps> = ({ title, placeholder }) => {
  const [value, setvalue] = useState<string>(placeholder);
  const disabled = useSelector(
    (state: RootState) => state.disabledReducer.disabled
  );
  const dispatch = useDispatch();

  const isEmpty = useSelector((state: RootState) => state.isEmptyReducer.empty);

  useEffect(() => {
    if (title === "Name") {
        dispatch(setSendActions.setSendName(value))
        
      }
    if (title === "User Name") {
        dispatch(setSendActions.setSendUserName(value))
        
      }
    if (title === "E-mail") {
        dispatch(setSendActions.setSendEmail(value))
        
      }
    if (title === "Street") {
        dispatch(setSendActions.setSendStreet(value))
        
      }
    if (title === "City") {
        dispatch(setSendActions.setSendNCity(value))
        
      }
    if (title === "Zip code") {
        dispatch(setSendActions.setSendZip(value))
        
      }
    if (title === "Phone") {
        dispatch(setSendActions.setSendPhone(value))
        
      }
    if (title === "Website") {
        dispatch(setSendActions.setSendWebsite(value))
        
      }

    if (!value) {
      dispatch(setEmpty());
    } else {
      dispatch(setNotEmpty());
    }
  }, [value]);


  return (
    <div className="myinput">
      {title}
      <input
        style={isEmpty && !value.trim() ? { border: "1px solid red" } : {}}
        value={value}
        onChange={(e) => {
          setvalue(e.currentTarget.value);
        }}
        disabled={disabled}
        className="myinput__input"
        type="text"
      />
    </div>
  );
};

export default MyInput;
