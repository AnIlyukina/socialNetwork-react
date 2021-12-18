import './Post.scss'

function Post(props){
  return(
    <div className='post'>
      <img className='post__avatar' src='https://avatars.mds.yandex.net/i?id=3d6d1aed091dedf08ad9e467a18158ce-3483535-images-thumbs&n=13'/>
      <p>{props.text}</p>
      <span>like:</span>{props.likeCounts}
    </div>
  )
}

export default Post;