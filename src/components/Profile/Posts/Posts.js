import './Posts.scss'
import Post from './Post/Post';


function Posts(){
  return(
    <section className='posts'>
        Мои посты 
        <div className='posts__new'>
          <textarea className='posts__input' placeholder='   Ваши новости...'></textarea>
          <button className='posts__button'>Опубликовать</button>
        </div>
        <Post text ='Когда ты полностью безоговорочно доверяешь человеку, то в результате получаешь одно из двух: или человека на всю жизнь, или урок на всю жизнь. ' likeCounts ='24235'/>
        <Post text ='Если я вижу что-то действительно неприятное в Твиттере, я обычно удаляю это или блокирую человека, потому что я не хочу видеть это каждый день ... Узнай меня, и тогда ты сможешь поговорить обо мне!' likeCounts ='254245'/>
        <Post text ='Мой папа - мой папа, но его больше нет физически. Но она позволяет мне называть ее «папа» - это последний маленький кусочек папы, который у меня есть' likeCounts ='245452'/>
        <Post text ='Я хочу продолжить моделирование и делать все возможное с этим' likeCounts ='254254'/>
    </section>
  )
}

export default Posts;