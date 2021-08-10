import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Home() {
  const router = useRouter();

  const isActive = (pathname) => router.pathname === pathname
  return (
    <div className={styles.container}>

      <main className={styles.main}>

        <div className="bg-white text-primary/*  */ text-center my-5">
          {/* <h1 className="display-3">
              Administration made easy
            </h1> */}
          <h1 href='http://localhost:3000/' className={styles.title}>
            <a>Dynamic Forms</a>
          </h1>
          <div className={styles.grid}>
            <Link href='/signup'>
              <a className={styles.subtitle}>
                SignUp
              </a>
            </Link>

          </div>

        </div>

      </main>

      <footer className={styles.footer}>
        <a >Powered by Shepherd</a>
      </footer>
    </div>
  )
}
