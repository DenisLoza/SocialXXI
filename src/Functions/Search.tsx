import React, {ChangeEvent, useState} from "react"


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

  return <>
    <input type="text"
           className="search"
           placeholder="Search"
           value={value}
           onChange={onValueSearch}/>
  </>
}