import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '../styles/Home.module.css'
import NftGrid from 'components/NftGrid'
import nftCollections from "../assets/nftCollections"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>XGR Arcadians Renderer</title>
        <meta name="description" content="An open and flexible standard that allows your NFT to be displayed (and animated!) in any game" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Arcadians Renderer - ORA images with GLTF animations
          </p>
          <div>
            <a
              href="https://www.opgames.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/opg.png"
                alt="OP Games Logo"
                width={90}
                height={100}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
        <NftGrid nftCollections={[...nftCollections]} />
          
        </div>

        <div className={styles.grid}>
          <a
            href="https://github.com/alto-io/cross-game-nft-renderer"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Github <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Find source code and more in-depth information about the cross-game renderer
            </p>
          </a>

          <a
            href="https://github.com/alto-io/arcadians-avatar-builder"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              arcadians-avatar-builder <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Supporting avatar customization project using the Arcadians collection
            </p>
          </a>


          <a
            href="https://use-nft.spectre.xyz/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              use-nft <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              This project uses spectre&apos;s use-nft as a fallback renderer
            </p>
          </a>


        </div>
      </main>
    </>
  )
}
