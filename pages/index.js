import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>World of Wordle</title>
        <meta name="description" content="A list of Wordle in every languages" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to All the Wordle !
        </h1>
        <table className={styles['table-list']}>
          <tr>
            <td>Name</td>
            <td>Next wordle</td>
          </tr>
          <tr>
            <td>
              <a href="https://www.powerlanguage.co.uk/wordle/">Wordle <span title="English">🏴󠁧󠁢󠁥󠁮󠁧󠁿</span></a>
            </td>
            <td>
              <a>Soon</a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="https://wordle.louan.me/">Le Mot <span title="French">🇫🇷</span></a>
            </td>
            <td>
              <a>Soon</a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="https://arwordle.netlify.app/">Arwordle <span title="Arabic">🏳️</span></a>
            </td>
            <td>
              <a>Soon</a>
            </td>
          </tr>

          
        </table>
      </main>

      <footer className={styles.footer}>
          Made witd ♡ by me
      </footer>
    </div>
  )
}
