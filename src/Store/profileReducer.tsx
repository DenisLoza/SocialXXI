import {postDataType} from "./State"
import {v1} from "uuid"


export const profileReducer = (state: Array<postDataType>, action: addNewMyPostActionType): Array<postDataType> => {
  switch (action.type) {
    case "addNewMyPost":
      let newPost: postDataType = {id: v1(), message: action.newMyPost, likesCount: 0}
      return [newPost, ...state]
  }
}


// ACTION CREATORS
export type addNewMyPostActionType = {type: "addNewMyPost", newMyPost: string}
type addNewMyPostACType = (newPost: string) => addNewMyPostActionType
export const addNewMyPostAC: addNewMyPostACType = (newPost: string) => ({type: "addNewMyPost", newMyPost: newPost})