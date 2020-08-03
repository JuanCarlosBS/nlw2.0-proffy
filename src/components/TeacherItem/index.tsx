import React from 'react';
import './styles.css'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'


function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars1.githubusercontent.com/u/60041640?s=460&u=e19402aa7cfc7f9c0b8ab9f618bf59875a753bf7&v=4" alt=""/>
        <div>
          <strong>Juan Carlos</strong>
          <span>Dev</span>
        </div>
      </header>

      <p>
        Lorem ipsum 
        <br/><br/>
        Lorem ipsum dolor Sit amet consectetur adipisicing elit. Adipisci neque est facere, impedit omnis nostrum quae aut eveniet hic vitae sunt exercitationem expedita harum optio consequuntur fugiat ullam reprehenderit suscipit?
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$150,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  )
}

export default TeacherItem;