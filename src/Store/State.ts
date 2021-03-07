import man_1 from "../components/img/avatars/man_1.jpg"
import man_2 from "../components/img/avatars/man_2.jpg"
import man_3 from "../components/img/avatars/man_3.jpg"
import man_4 from "../components/img/avatars/man_4.jpg"
import man_5 from "../components/img/avatars/man_5.jpg"
import girl_1 from "../components/img/avatars/girl_1.jpg"
import girl_2 from "../components/img/avatars/girl_2.jpg"
import girl_3 from "../components/img/avatars/girl_3.jpg"
import girl_4 from "../components/img/avatars/girl_4.jpg"
import {v1} from "uuid"
import {addNewMyPostActionType, profileReducer} from "./profileReducer"


export type postDataType = {
  id: string
  message: string
  likesCount: number
}
export type profileComponentType = { postData: Array<postDataType> }

export type friendDataType = {
  id: string
  friendName: string
  avatarSrc?: any
}
export type friendsComponentType = { friendsData: Array<friendDataType> }

export type messageDataType = {
  id: string
  friendName: string
  time: string
  avatarSrc: any
  lastMessage: string
}
export type messagesComponentType = { messagesData: Array<messageDataType> }

type stateType = {
  profileComponent: profileComponentType
  friendsComponent: friendsComponentType
  messagesComponent: messagesComponentType
}

export type storeType = {
  _state: stateType
  getState: () => stateType
  dispatch: (action: addNewMyPostActionType) => void
}


export let store: storeType = {
  _state: {
    profileComponent: {
      postData: [
        {id: v1(), message: "Hello!", likesCount: 11},
        {id: v1(), message: "It's my first post!", likesCount: 33},
        {id: v1(), message: "I like XXI net!", likesCount: 40}
      ]
    },
    friendsComponent: {
      friendsData: [
        {id: v1(), friendName: "Andrew", avatarSrc: man_1},
        {id: v1(), friendName: "Alex", avatarSrc: man_2},
        {id: v1(), friendName: "Nastya", avatarSrc: girl_1},
        {id: v1(), friendName: "Nik", avatarSrc: man_4},
        {id: v1(), friendName: "Anna", avatarSrc: girl_2},
        {id: v1(), friendName: "Elena", avatarSrc: girl_4},
        {id: v1(), friendName: "John", avatarSrc: man_3},
        {id: v1(), friendName: "Elena", avatarSrc: girl_3}
      ]
    },
    messagesComponent: {
      messagesData: [
        {id: v1(), friendName: "Denis", time: randomTime(), avatarSrc: man_5, lastMessage: "Hi, my friends!"},
        {id: v1(), friendName: "Alex", time: randomTime(), avatarSrc: man_2, lastMessage: "Nice to meet you!"},
        {id: v1(), friendName: "Nastya", time: randomTime(), avatarSrc: girl_1, lastMessage: "How are you, my friends?"}
      ]
    },
  },
  getState() {
    return this._state
  },
  dispatch(action) {
    this._state.profileComponent.postData = profileReducer(this._state.profileComponent.postData, action)
  }
}

// FUNCTION  "WHAT TIME is it"
// текущее реальное время формата (24h 00:00)
function realTime() {
  let t = new Date()
  let timeHours = t.getHours()
  let tH = timeHours >= 10 ? timeHours : "0" + timeHours
  let timeMinutes = t.getMinutes()
  let tM = timeMinutes >= 10 ? timeMinutes : "0" + timeMinutes
  return tH + ":" + tM
}
// рандомное время формата (24h 00:00)
function randomTime() {
  let randHours = (Math.floor(Math.random() * 24))
  let rH = randHours >= 10 ? randHours : "0" + randHours
  let randMinutes = (Math.floor(Math.random() * 60))
  let rM = randMinutes >= 10 ? randMinutes : "0" + randMinutes
  return rH + ":" + rM
}


// OLD DATA
export let friendsData: Array<friendDataType> = [
  {id: v1(), friendName: "Andrew", avatarSrc: man_1},
  {id: v1(), friendName: "Alex", avatarSrc: man_2},
  {id: v1(), friendName: "Nastya", avatarSrc: girl_1},
  {id: v1(), friendName: "Nik", avatarSrc: man_4},
  {id: v1(), friendName: "Anna", avatarSrc: girl_2},
  {id: v1(), friendName: "Elena", avatarSrc: girl_4},
  {id: v1(), friendName: "John", avatarSrc: man_3},
  {id: v1(), friendName: "Elena", avatarSrc: girl_3},
]
export let postData: Array<postDataType> = [
  {id: v1(), message: "Hello!", likesCount: 11},
  {id: v1(), message: "It's my first post!", likesCount: 33},
  {id: v1(), message: "I like XXI net!", likesCount: 40},
]
export let messagesData: Array<messageDataType> = [
  {id: v1(), friendName: "Denis", time: randomTime(), avatarSrc: man_5, lastMessage: "Hi, my friends!"},
  {id: v1(), friendName: "Alex", time: randomTime(), avatarSrc: man_2, lastMessage: "Nice to meet you!"},
  {id: v1(), friendName: "Nastya", time: randomTime(), avatarSrc: girl_1, lastMessage: "How are you, my friends?"},
]
export type dialogsDataType = {
  id: string
  name: string
  time: string
  message: string
}
export let dialogsData: Array<dialogsDataType> = [
  {id: v1(), name: "Denis", time: randomTime(), message: "Hi, my friends!"},
  {id: v1(), name: "Alex", time: randomTime(), message: "Nice to meet you!"},
  {id: v1(), name: "Nastya", time: randomTime(), message: "How are you, my friends?"},
]
