import React from 'react';
import Link from "next/link";
import styles from "./menuCategory.module.css"

const MenuCategory = () => {
    return (
        <div>
            <div className={styles.categoryList}>
                <Link href={`/blog?cat=style`} className={`${styles.categoryItem} ${styles.style}`}>Style</Link>
                <Link href={`/blog?cat=travel`} className={`${styles.categoryItem} ${styles.travel}`}>Travel</Link>
                <Link href={`/blog?cat=culture`} className={`${styles.categoryItem} ${styles.culture}`}>Culture</Link>
                <Link href={`/blog?cat=coding`} className={`${styles.categoryItem} ${styles.coding}`}>Coding</Link>
                <Link href={`/blog?cat=food`} className={`${styles.categoryItem} ${styles.coding}`}>Food</Link>
            </div>
        </div>
    )
}

export default MenuCategory;