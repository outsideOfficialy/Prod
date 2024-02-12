import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <div className="container">
        <div>
          <button className="btn btn-main-primary">Test</button>
        </div>
        <div>
          <button className="btn btn-scroll-up"></button>
        </div>
      </div>
    </>
  )
}
