import React from 'react';
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link"

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/logo.png" alt="NextBlog" width={50} height={50}></Image>
          <h1 className={styles.logoText}>NextBlog</h1>
        </div>
        <p className={styles.desc}>
        Explore the exciting world of web development on our Next.js blog! We are here to simplify coding, share helpful tips, and celebrate the joy of creating awesome digital experiences together. Join us today!
        </p>
        <div className={styles.icon}>
          <Image src="/facebook.png" alt="" width={18} height={18} className={styles.social}></Image>
          <Image src="/instagram.png" alt="" width={18} height={18} className={styles.social}></Image>
          <Image src="/tiktok.png" alt="" width={18} height={18} className={styles.social}></Image>
          <Image src="/youtube.png" alt="" width={18} height={18} className={styles.social}></Image>
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href={`/blog?cat=style`}>Style</Link>
          <Link href={`/blog?cat=fashion`}>Fashion</Link>
          <Link href={`/blog?cat=coding`}>Coding</Link>
          <Link href={`/blog?cat=travel`}>Travel</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Tiktok</Link>
          <Link href="/">Youtube</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer;