"use client"
import React, { useState } from 'react';
import styles from "./authlinks.module.css";
import Link from "next/link"
import {signOut, useSession } from 'next-auth/react';

const AuthLinks = () => {

  const [open, setOpen] = useState(false)
  const {status} = useSession();
  return (
    <>
      {
        status === "unauthenticated" ? (<Link href="/login" className={styles.link}>Login</Link>)
          :
          (<>
            <Link href="/write" className={styles.link}>Write</Link>
            <span className={styles.link} onClick={signOut}>Logout</span>
          </>)
      }
      <div className={styles.burger} onClick={()=>{setOpen(!open)}}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {
        open && (
          <div className={styles.responsiveMenu}>
            <Link className={styles.textfont} onClick={()=>{setOpen(!open)}} href="/">Homepage</Link>
            <Link className={styles.textfont}  onClick={()=>{setOpen(!open)}} href="/">About</Link>
            <Link className={styles.textfont}  onClick={()=>{setOpen(!open)}} href="/">Contact</Link>
            {
              status === "unauthenticated" ? (<Link  className={styles.textfont}  href="/login"  onClick={()=>{setOpen(!open)}} >Login</Link>)
                :
                (<>
                  <Link  className={styles.textfont} onClick={()=>{setOpen(!open)}} href="/write">Write</Link>
                  <span  className={styles.textfont}  onClick={signOut}>Logout</span>
                </>)
            }
          </div>
        )
      }
    </>
  )
}

export default AuthLinks;
