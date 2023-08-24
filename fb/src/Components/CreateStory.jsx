import React from 'react'
import '../CSS Files/CreateStory.css'
import { useNavigate } from 'react-router-dom';

const CreateStory = () => {

    const router = useNavigate();

  return (
    <div id='storybody'>
       <div id='tiny'>
        <div>
        <i onClick={()=>router('/')}  class="fa-solid fa-xmark"></i>
        <i class="fa-brands fa-facebook"></i>
        </div>
       <div>
            <p>Your story</p>
            <i class="fa-solid fa-gear"></i>
        </div>
        <div>
        <img src="https://scontent.fbom2-2.fna.fbcdn.net/v/t39.30808-1/271625882_108868848347455_4875065016885278752_n.jpg?stp=cp0_dst-jpg_p80x80&_nc_cat=104&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=qc1LsOAe6LIAX870qnn&_nc_ht=scontent.fbom2-2.fna&oh=00_AfAMBQdjRdryKbXSFqKr-DBxDk79RspiVWiWSfJpntSq2w&oe=64E29FB8"/>
          <p>Poohh Art</p>
        </div>
       </div>
       <div id='big'>
         <div>
        <i class="fa-regular fa-images "></i>
        <p>Create a photo story</p>
         </div>
         <div>
        <i class="fa-solid fa-a "></i>
        <p>Create a text story</p>
         </div>
       </div>
    </div>
  )
}

export default CreateStory