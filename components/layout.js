import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from './layout.module.scss'
import utilStyle from '../styles/utils.module.css'

const name = "Steven Lee"
export const siteTitle = "Next.js sample website"

export default function layout({children, home}) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
          <Image
              priority
              src="/img/avartar1.jpg"
              className={utilStyle.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            <h1 className={utilStyle.heading2Xl}>{name}</h1>
          </>
        ):(
          <>
          <Link href="/">
            <a>
              <Image
                priority
                src="/img/avartar1.jpg"
                className={utilStyle.borderCircle}
                height={108}
                width={108}
                alt={name}
              />
            </a>
          </Link>
          <h2 className={utilStyle.headingLg}>
            <Link href="/">
              <a className={utilStyle.colorInherit}>{name}</a>
            </Link>
          </h2>
          </>
        )}
      </header>      
      <main>{children}</main>
      {
        !home && (
          <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
        )
      }
    </div>
  )
}