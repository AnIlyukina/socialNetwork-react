import './User.scss'

function User(){
  return(
    <section className="user">
        <img className="user__image" src="https://www.hawtcelebs.com/wp-content/uploads/2015/03/kendall-jenner-bon-duke-photoshoot-for-new-york-times_9.jpg"/>
        <div className='user__block'>
          <p className="user__name" >Кендал Дженнер</p>
          <p className="user__info">О себе: американская модель, участница телевизионного реалити-шоу «Семейство Кардашьян».</p>
          <p className="user__info" >Статус: Просто страшно думать, как быстро все катится, и ты не можешь это остановить </p>
          <p className="user__info">Город: Лос-Анджелес, Калифорния, США</p>
        </div>
       
      </section>
  )
}

export default User;