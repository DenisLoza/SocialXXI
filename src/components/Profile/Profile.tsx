import React from "react"
import style from "./Profile.module.css"
import {MyPosts} from "./Posts/MyPosts"
import {addNewMyPostCallback} from "../../Store/State"


export function Profile() {
  return (
    <div className={`${style.Profile}`}>
      <div className={`${style.ProfileWrapp}`}>
        <div className={`${style.name}`}>
          <h1>
            NAME surNAME
          </h1>
          <div>
            <span> That's good! </span>
          </div>
        </div>
        <div className={`${style.hr}`}> </div>
        <div className={`${style.aboutMe}`}>
          <div className={`${style.categories}`}>
            <div className={`${style.categoriesItem}`}>Birthday:</div>
            <div className={`${style.categoriesItem}`}>Current city:</div>
            <div className={`${style.categoriesItem}`}>My profession:</div>
          </div>
          <div className={`${style.descriptions}`}>
            <div className={`${style.descriptionsItem}`}>March 28</div>
            <div className={`${style.descriptionsItem}`}>St.Petersburg</div>
            <div className={`${style.descriptionsItem}`}>FrontEnd Dev</div>
          </div>
        </div>
        <div className={`${style.hr}`}> </div>
      </div>
      <MyPosts addNewMyPostCallback={addNewMyPostCallback}/>
    </div>
  )
}