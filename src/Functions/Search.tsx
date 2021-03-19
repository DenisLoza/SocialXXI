import React, {ChangeEvent, useState} from "react"
import style from "./Search.module.css"
import searchIcon from "../components/img/icons/magnifying-glass.png"



type searchType = {
  onSearch: (valueSearch: string) => void
}

export function Search(props: searchType) {

  let [value, setValue] = useState("")

  let onValueSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setValue(value)
    props.onSearch(value)
  }

  return <div className={`${style.Search}`}>
    <img className={`${style.imgSearch}`} src={searchIcon} alt="icon"/>
    <input type="text"
           className={`${style.inputSearch}`}
           placeholder="Search"
           value={value}
           onChange={onValueSearch}/>
  </div>
}