import React from 'react';
import styles from "./menuposts.module.css";
import Image from "next/image";
import Link from "next/link";

let fetchdata = async (value) => {
  const res = await fetch(
    `${process.env.NEXTAUTH_URL}/api/posts/${value}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
}
const MenuPosts = async ({ withImage }) => {
  let j = 0, data = [];
  for (let i = 5; i < 12; i++) {
    data[j] = await fetchdata(i);
    j++; i++;
  }

  
  return (
    <div className={styles.container}>
      <div className={styles.items}>
        {data.map((value) => 
          <Link href={`/posts/${value.slug}`} className={styles.item} key={value.id}>
            {withImage && <div className={styles.imageContainer}>
              <Image src={value.img} alt="" fill className={styles.image} />
            </div>}
            <div className={styles.textContainer}>
              <span className={`${styles.category} ${styles[value.catSlug]}`}>{value.catSlug}</span>
              <h3 className={styles.postTitle}>{value.title}</h3>
              <div className={styles.detail}>
                <span className={styles.username}>{value.user.name + " - "}</span>
                <span className={styles.date}>{value.createdAt}</span>
              </div>
            </div>
          </Link>
        )

        }
      </div>
    </div>
  )
}

export default MenuPosts;