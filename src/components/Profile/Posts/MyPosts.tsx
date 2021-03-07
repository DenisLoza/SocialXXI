import React, {useState} from "react"
import {Post} from "./Post"
import style from "./MyPosts.module.css"
import avatar_man from "../../img/avatars/man_5.jpg"
import {storeType} from "../../../Store/State"
import {addNewMyPostAC} from "../../../Store/profileReducer"

type MyPostsType = {
  store: storeType
  dispatch: (action: any) => void
}

export function MyPosts(props: MyPostsType) {

  // Хук, следит за значением поля <input>
  let [valueInput, setValueInput] = useState("")

  // возвращает state из глобального объекта Store
  let state = props.store.getState()

  // MAP <Post> в переменную postDataMap
  let postDataMap = state.profileComponent.postData.map(data =>
    <Post key={data.id}
          id={data.id}
          message={data.message}
          likesCount={data.likesCount}
    />
  )

  // следит за onChange в <input>
  const onChangeInputHandler = (e: { currentTarget: { value: React.SetStateAction<string> } }) => {
    setValueInput(e.currentTarget.value)
  }

 // Через колбек передаем данные в элементе <input> в state после нажатия <button>
  const addMyPost = () => {
    // защита от добавления пустого поста
    if (valueInput.trim() !== "") {
      props.dispatch(addNewMyPostAC(valueInput))
      setValueInput("")
    }
  }


  return (
    <div>
      <div className={style.MyPosts}>
        <div className={style.inputWrapp}>
          <div className={style.avatar}>
            <img src={avatar_man} alt="avatar"/>
          </div>
          <input className={style.input}
                 placeholder={"What's new?"}
                 onChange={onChangeInputHandler}
                 value={valueInput}
          >
          </input>
        </div>
        <div>
          <button onClick={addMyPost}>Post</button>
        </div>
      </div>
      <div className={style.postDataMap}>

        {postDataMap}

      </div>
    </div>
  )
}
