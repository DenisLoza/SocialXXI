import {postDataType} from "./State"
import {v1} from "uuid"

// ACTION CONST
const ADD_NEW_MY_POST = "ADD_NEW_MY_POST"

// INITIAL STATE for REDUCER (REDUX)
const initState = [
  {id: v1(), message: "Hello!", likesCount: 11},
  {id: v1(), message: "It's my first post!", likesCount: 33},
  {id: v1(), message: "I like XXI net!", likesCount: 40}
]

// REDUCER
export const profileReducer = (state: Array<postDataType> = initState, action: addNewMyPostActionType): Array<postDataType> => {
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