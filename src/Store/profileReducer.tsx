import {postDataType} from "./State"
import {v1} from "uuid"

// ACTION CONST
const ADD_NEW_MY_POST = "addNewMyPost"


export const profileReducer = (state: Array<postDataType>, action: addNewMyPostActionType): Array<postDataType> => {
  switch (action.type) {
    case ADD_NEW_MY_POST:
      let newPost: postDataType = {id: v1(), message: action.newMyPost, likesCount: 0}
      return [newPost, ...state]
  }
}


// ACTION CREATORS
export type addNewMyPostActionType = {type: typeof ADD_NEW_MY_POST, newMyPost: string}
type addNewMyPostACType = (newPost: string) => addNewMyPostActionType
export const addNewMyPostAC: addNewMyPostACType = (newPost: string) => ({type: ADD_NEW_MY_POST, newMyPost: newPost})