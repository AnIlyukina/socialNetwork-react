import User from "../User/User";
import Posts from "./Posts/Posts";
import "./Profile.scss"

function Profile(){
  return(
    <section className ='profile'>
      <div>
        <img className='profile__image' src="https://media.favot.ru/uploads/2014/10/mercedes-benz-fashion-week-russia-9.jpg"/>
      </div>
      <User/>
      <Posts/>
    </section>
  )
}


export default Profile;