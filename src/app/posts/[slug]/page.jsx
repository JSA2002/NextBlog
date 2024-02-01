import React from 'react';
import Menu from '../../components/Menu/Menu';
import styles from "./singlePage.module.css"
import Image from "next/image"
import Comments from '../../components/comments/Comments';

const getData = async (slug) => {
  const res = await fetch(`https://nextblog-ashen.vercel.app/api/posts/${slug}`, {
    cache: "no-store",
  });
  console.log(res)
  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

const SinglePage = async ({ params }) => {
  const { slug } = params;

  const data = await getData(slug);
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{data?.title}</h1>
          <div className={styles.user}>
            {data?.user?.image && (
              <div className={styles.userImageContainer}>
                <Image src={data?.user.image} alt="" className={styles.avatar} width={50} height={50} />
              </div>
            )}
            <div className={styles.userTextContainer}>
              <span className={styles.username}>{data?.user.name}</span>
              <span className={styles.date}>{data?.createdAt}</span>
            </div>
          </div>
        </div>
        {data?.img && (
          <div className={styles.imageContainer}>
            <Image src={data.img} alt="" fill className={styles.image} />
          </div>
        )}
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: data && typeof data.desc === 'string'? data?.desc : '' }}
          />
          {data?.img && (
            <div className={styles.imageContainer2}>
              <Image src={data.img} alt="" fill className={styles.image2} />
            </div>
          )}
          <div className={styles.comment}>
            <Comments postSlug={slug} />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
