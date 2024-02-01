"use client"
require('dotenv').config();
import React, { useEffect, useState } from 'react';
import styles from './menuposts.module.css';
import Image from 'next/image';
import Link from 'next/link';

const fetchdata = async (value) => {
  const res = await fetch(`http://localhost:3000/api/posts/${value}`, {
    cache: 'no-store',
  });
  if (!res.ok) {
    throw new Error('Failed');
  }

  return res.json();
};

const MenuPosts = ({ withImage }) => {
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let newData = [];
      for (let i = 5; i < 12; i++,i++) {
        try {
          const result = await fetchdata(i);
          newData.push(result);
        } catch (error) {
          console.error(`Error fetching data for post ${i}: ${error.message}`);
        }
      }
      setPostData(newData);
    };

    fetchData();
  }, []); // Empty dependency array ensures that this effect runs only once on component mount

  return (
    <div className={styles.container}>
      <div className={styles.items}>
        {postData.map((value) => (
          <Link href={`/posts/${value.slug}`} className={styles.item} key={value.id}>
            {withImage && (
              <div className={styles.imageContainer}>
                <Image src={value.img} alt="" fill className={styles.image} />
              </div>
            )}
            <div className={styles.textContainer}>
              <span className={`${styles.category} ${styles[value.catSlug]}`}>{value.catSlug}</span>
              <h3 className={styles.postTitle}>{value.title}</h3>
              <div className={styles.detail}>
                <span className={styles.username}>{value.user.name + ' - '}</span>
                <span className={styles.date}>{value.createdAt}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MenuPosts;
