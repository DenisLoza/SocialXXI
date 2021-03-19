import React, {ChangeEvent, useState} from "react"
import style from "./Dialogs.module.css"
import avatar_man from "../../img/avatars/man_5.jpg"
import {v1} from "uuid"
import {messageDataType} from "../../../Store/State"
import {Dialog} from "./Dialog"
import {NavLink} from "react-router-dom"



type DialogsType = {
  messagesData: Array<messageDataType>
}
// массив сообщений для Dialog
let dialogItem: Array<{ id: string, item: string }> = [{id: v1(), item: "Hello!"}]
// стиль кнопки отправки сообщения по-умолчанию
let styleButton = `${style.TextareaVoiceIcon}`

export function Dialogs(props: DialogsType) {

  let [valueDialog, setValueDialog] = useState<string>("")


  let dialogDataMap = dialogItem.map(data =>
    <Dialog key={data.id}
            id={data.id}
            item={data.item}
    />
  )


  const onChangeHandlerInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
    // меняем стиль кнопки отправки сообщения
    if (e.currentTarget.value.trim() !== "") {
      styleButton = `${style.TextareaSendIcon}`
    } else {
      styleButton = `${style.TextareaVoiceIcon}`
    }
    setValueDialog(e.currentTarget.value)
  }

  const onClickHandlerSend = () => {
    if (valueDialog.trim() !== "") {
      let newItem = {id: v1(), item: valueDialog}
      dialogItem = [...dialogItem, newItem]
      styleButton = `${style.TextareaVoiceIcon}`
      // props.dispatch(addNewMyPostAC(valueDialog))
      setValueDialog("")
    }
  }


  return (

      <div className={`${style.Dialogs}`}>
        <div className={`${style.DialogsHeader}`}>
          <NavLink to={"/im"}>
            <div className={`${style.DialogsHeaderBack}`}>
              Back
            </div>
          </NavLink>

          <div className={`${style.DialogsHeaderMain}`}>
            <div className={`${style.HeaderMainUserName}`}>Denis</div>
            <div className={`${style.HeaderMainLastSeen}`}>last seen</div>
          </div>
          <div className={`${style.DialogsHeaderAside}`}>
            <div className={`${style.HeaderAsidePhoneIcon}`}></div>
            <div className={`${style.HeaderAsidePointIcon}`}></div>
            <div className={`${style.HeaderAsideUserIcon}`}>
              <img src={avatar_man} alt="avatar"/>
            </div>
          </div>
        </div>
        <div className={`${style.DialogsMain}`}>

          {dialogDataMap}

        </div>
        <div className={`${style.DialogsTextarea}`}>
          <div className={`${style.TextareaFileIcon}`}></div>
          <div className={`${style.TextareaAll}`}>
            <textarea placeholder="Write a message..."
                      value={valueDialog}
                      onChange={onChangeHandlerInput}
            > </textarea>
            <div className={`${style.TextareaPhotoIcon}`}></div>
            <div className={`${style.TextareaSmileIcon}`}></div>
          </div>
          <div className={styleButton}
               onClick={onClickHandlerSend}
          ></div>
        </div>
      </div>
  )
}