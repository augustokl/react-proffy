import React from 'react';

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img 
          src="https://avatars3.githubusercontent.com/u/46767670?s=460&u=7a599d14e0a17fcd6b565f523a4be3b252dfbdd1&v=4" 
          alt="Augusto Kestering Longo"
        />
        <div>
          <strong>Augusto Longo</strong>
          <span>Matemática</span>
        </div>
      </header>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        <br/> <br/> 
        Libero id faucibus nisl tincidunt eget nullam non.
      </p>

      <footer> 
          <p>
            Preço/hora
            <strong>R$ 100,00</strong>
          </p>

          <button type="button">
            <img src={whatsappIcon} alt="Whatspp"/>
            Entrar em contanto
          </button>
      </footer>
    </article>
  );
}

export default TeacherItem;