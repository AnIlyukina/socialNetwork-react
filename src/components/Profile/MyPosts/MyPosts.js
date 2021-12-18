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
        <Post text ='Привет' likeCounts ='0'/>
        <Post text ='Меня зовут Винни' likeCounts ='10'/>
        <Post text ='Я медведь' likeCounts ='5'/>
        <Post text ='Я люблю мед' likeCounts ='6'/>
    </div>
  )
}

export default MyPosts;