import s from './App.module.css'

function App() {

  return (
    <>
      <nav>
        <a href="#s1">Home</a>
        <a href="#s2">Sobre</a>
        <a href="#s3">Produtos</a>
      </nav>

      <main>
        <section id='s1' className={s.s1}>
            <h1>TÍTULO DA EMPRESA</h1>
        </section>

        <section id='s2' className={s.s2}>
            <div className={s.left}>
              <img src="../images/caminhao azul.jpg" alt="" />
            </div>
            <div className={s.right}>
              <h2>Subtítulo</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, ipsa repellendus? Voluptates tempore magnam, quam dolores omnis nihil. Magni expedita repellat tempore quisquam dicta porro, assumenda fugiat suscipit minima unde.</p>
            </div>
        </section>

        <section id='s3' className={s.s3}>
              <div className={s.card}>
                <img src="../images/caminhao cinza.jpg" alt="" />
                <div className={s.cardTexts}>
                  <h3>Título Card</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci amet fugiat quam placeat quisquam.</p>
                </div>
              </div>

               <div className={s.card}>
                <img src="../images/caminhao.jpg" alt="" />
                <div className={s.cardTexts}>
                  <h3>Título Card</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci amet fugiat quam placeat quisquam.</p>
                </div>
              </div>

               <div className={s.card}>
                <img src="" alt="" />
                <div className={s.cardTexts}>
                  <h3>Título Card</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci amet fugiat quam placeat quisquam.</p>
                </div>
              </div>
        </section>
      </main>

      <footer>
        <a href="../images/css3-alt.svg"></a>
        <a href="../images/github.svg"></a>
        <a href="../images/html5.svg"></a>
        <a href="../images/whatsapp.svg"></a>
        <a href="../images/tik-tok.svg"></a>
      </footer>
    </>
  )
}

export default App