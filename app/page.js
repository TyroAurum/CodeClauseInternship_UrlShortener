"use client";
import styles from './page.module.css'
import { useState } from 'react'
import axios from 'axios';

export default function Home() {
  const [url,setUrl] = useState();
  const [surl,setSurl] = useState("");

  const handleChange = (e) => {
    setUrl(e.target.value)
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(surl);

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("/api/short", {
      url : url
    }
    ).then((response)=>{setSurl(response.data.urlEncurtada)})
    console.log(url)
  }

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h2 className={styles.element}>URL Shortener</h2>
        <input className={styles.input} type='text' placeholder='Paste your URL here'  name='url' onChange={handleChange}/>
        <button className={styles.btn} onClick={handleSubmit} >Submit</button>
        <div className={styles.surl}>
          <p>{surl}</p>
          <button onClick={handleCopy}>copy</button>
        </div>
      </div>
    </main>
  )
}
