import User from "../User/User";
import MyPosts from "./MyPosts/MyPosts";
import "./Profile.scss"

function Profile(){
  return(
    <section className ='profile'>
      <div>
        <img className='profile__image' src="https://media.favot.ru/uploads/2014/10/mercedes-benz-fashion-week-russia-9.jpg"/>
      </div>
      <User/>
      <MyPosts/>
    </section>
  )
}


export default Profile;