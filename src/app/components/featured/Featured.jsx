import React from 'react';
import styles from "./featured.module.css";
import Link from "next/link";

const Featured= () => {
  
  const img1 = "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, Welcome to Next Blog! </b>
        Discover new stories and creative blogs.
      </h1>
      <Link href="/posts/feature">
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <img src={img1} alt="" className={styles.imgv}/>
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>The Evolution of Web Development: A Journey Through Time and Technology.</h1>
          <p className={styles.postDesc}>
          In the vast realm of technology, the evolution of web development stands as a testament to human innovation and creativity. From the humble beginnings of static HTML pages to the dynamic, interactive web applications of today, this journey through time and technology is a fascinating exploration of how the web has transformed over the years. In the late 20th century, the visionary Sir Tim Berners-Lee laid the foundation for the web as we know it today.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
      </Link>
    </div>
  )
}

export default Featured;