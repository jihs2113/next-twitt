import Image from "next/image";
import styles from './page.module.css'
import Link from "next/link";

export default function Login() {
  return (
    <div>
      <div></div>
      <div className={styles.left}>
        {/* <Image src={zLogo} alt="logo"/> */}
      </div>
      <div className={styles.right}>
        <h1>지금 일어나고 있는 일</h1>
        <Link href="/i/flow/signup" className={styles.signup}>계정 만들기</Link>
      </div>
    </div>
  )
}
