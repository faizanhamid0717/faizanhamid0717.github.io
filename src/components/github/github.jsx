import "./github.css";
import React from 'react'

export const Github = () => {
  return (
    <div className='github-container'>
        <h1>Github-Stats</h1>
         
         <div className='gitcontainer'>
            <div id="github-streak-stats">
            <img src="https://github-readme-stats.vercel.app/api?username=faizanhamid0717&show_icons=true&locale=en" alt="faizanhamid0717"  width="100%" />
            </div>

            <div id="github-top-langs">
            <img  src="https://github-readme-streak-stats.herokuapp.com/?user=faizanhamid0717&hide_border=true&theme=react&hide_border=true&bg_color=0D1117"
          alt="streak" width="100%" />
           
            </div>

            <div id="github-stats-card">
            <img src="https://github-readme-stats.vercel.app/api/top-langs?username=faizanhamid0717&show_icons=true&locale=en&layout=compact"  width="100%" alt="faizanhamid0717"/>
            </div>
         </div>

    </div>
  )
}
