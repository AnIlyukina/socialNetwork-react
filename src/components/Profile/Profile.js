import MyPosts from "./MyPosts/MyPosts";
import "./Profile.scss"

function Profile(){
  return(
    <section className ='profile'>
      <div>
        <img className='profile__image' src="https://i.ytimg.com/vi/5obM9yQSSNs/maxresdefault.jpg"/>
      </div>
      <div>
        аватарка  описание
      </div>
      <MyPosts/>
    </section>
  )
}


export default Profile;