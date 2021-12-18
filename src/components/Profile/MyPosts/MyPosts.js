import './MyPosts.scss'
import Post from './Post/Post';


function MyPosts(){
  return(
    <div>
        Мои посты 
        <div>
          <textarea></textarea>
          <button>Добавить</button>
        </div>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
    </div>
  )
}

export default MyPosts;