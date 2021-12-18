import './Post.scss'

function Post(props){
  return(
    <div className='post'>
      <img className='post__avatar' src='https://www.hawtcelebs.com/wp-content/uploads/2015/03/kendall-jenner-bon-duke-photoshoot-for-new-york-times_9.jpg'/>
      <div className='post__info'>
        <p className='post__text'>{props.text}</p>
        <span className ='post__like'>like: {props.likeCounts}</span>
      </div>
      
    </div>
  )
}

export default Post;