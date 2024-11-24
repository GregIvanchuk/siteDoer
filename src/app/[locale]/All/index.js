"use client"
import React, { useState } from 'react';
import Image from 'next/image'
import styles from './All.module.css'
import Header from '../Header'
import Loader from '../Loader';
import ContactComponent from '../ContactComponent';
import ThreeCanvas from '@/app/[locale]/ThreeCanvas';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function All({title,p1,p2,p3,p4,title2,p5,p6,p7,year,country,project,technology,link,
    titleItem1, priceNewItem1, priceOldItem1, descrItem1,
    titleItem2, priceNewItem2, priceOldItem2, descrItem2,
    titleItem3, priceNewItem3, priceOldItem3, descrItem3,
    titleItem4, priceNewItem4, priceOldItem4, descrItem4,buttonBuy,title3, p8, p9, p10, p11, p12,buttonDownload,title4, name, email, phone, message,buttonSubmit,home, projects, contact, prices, about}) {
  const [isLoading, setIsLoading] = useState(true);


  const simulateDataLoading = () => {
    setTimeout(() => {
      setIsLoading(false); // Після завантаження даних приховати лоадер
    }, 2000); // Час затримки у мілісекундах
  };

  // Викликаємо функцію для симуляції завантаження при першому рендері
  React.useEffect(() => {
    simulateDataLoading();
  }, []);

  return (
    <>
    {isLoading ? ( // Показуємо лоадер, якщо isLoading === true
        <Loader/>
      ) : (
    <main className={styles.main}>
      <Header home={home} projects={projects} contact={contact} prices={prices} about






/>
      <motion.div
      initial={{ opacity: 0, scale: 0 }} // Початкові стилі для зменшення та зникнення
      animate={{ opacity: 1, scale: 1 }} // Анімаційні стилі для появи та збільшення
      transition={{ duration: 0.5 }} // Параметри анімації
      className={styles.center}
    >
      <h1 className={styles.logo}>
        siteDoer.pro
      </h1>
    </motion.div>
      <div className={styles.section1}>

      <h2 className={styles.title} >{title}</h2>

      <p className={styles.p1}>{p1}</p>

      <p className={styles.p2}>{p2}</p>

      <p className={styles.p3}>{p3}</p>

      <p className={styles.p4}>{p4}</p>
      </div>
      <div className={styles.section2}>
      <Image className={styles.im} width={450} height={450} alt='im1' src="/im1.jpg" />
       <div className={styles.text}>
       <h3 className={styles.titleH3}>
{title2}</h3> 
<ul className={styles.list}
>
  <li className={styles.listItem}>
{p5}</li>
<li className={styles.listItem}>
{p6}</li>
<li className={styles.listItem}>
{p7}</li>
</ul>
       </div>
    
      

      </div>

      <div  id="projects" className={styles.section4}>
<table className={styles.myTable}>
        <thead>
            <tr>
                <th className={styles.yearDescr} >{year}</th>
                <th>{project}</th>
                <th className={styles.countryDescr}>{country}</th>
                <th className={styles.built}>{technology}</th>
                <th>{link}</th>
            </tr>
        </thead>
        <tbody>
          <tr>
                <td className={styles.year}>2024</td>
                <td className={styles.tdTitle}>Soul Garden</td>
                <td  className={styles.country}>Ukraine</td>
                <td className={styles.stek}>
                  <span>
                 Next.js
                  </span>
                  </td>
                  <td className={styles.tDlink}> 
                  <div className={styles.flex}>
                  <a className={styles.link} href="https://www.soulgardenstudio.com/">
                  <span className={styles.linkSpan}>https://www.soulgardenstudio.com</span>
                  <Image  width={25} height={25} alt='im1' src="/arr.png" />
                  </a>
                  </div>
                  </td>
            </tr>
            <tr>
                <td className={styles.year} >2023</td>
                <td className={styles.tdTitle}>Inkd by Mary Ann</td>
                <td  className={styles.country}>USA</td>
                <td className={styles.stek}>
                  <span>
                 Next.js
                  </span>
                  </td>
                <td className={styles.tDlink} >
                  <div className={styles.flex}>
                   <a className={styles.link} href="https://inkd-zk4e.vercel.app">
                   <span className={styles.linkSpan}>https://inkd.app/</span>
                   <Image  width={25} height={25} alt='im1' src="/arr.png" />
                   </a>
               
                </div>

                </td>
                </tr>
                <tr>
                <td className={styles.year}>2024</td>
                <td className={styles.tdTitle}>Vapno Group</td>
                <td className={styles.country}>Ukraine</td>
                <td className={styles.stek}>
                  <span>
                  Next.js
                  </span>
                  </td>
                  <td className={styles.tDlink}> 
                  <div className={styles.flex}>
                  <a className={styles.link} href="https://vapno.group">
                    <span className={styles.linkSpan}>https://vapno.group</span>
                  <Image  width={25} height={25} alt='im1' src="/arr.png" />
                  </a>
                  </div>
                  </td>
            </tr>

            <tr>
                <td className={styles.year} >2023</td>
                <td className={styles.tdTitle}>Schlüsselfertiges Haus</td>
                <td  className={styles.country}>Ukraine</td>
                <td className={styles.stek}>
                  <span>
                 Next.js
                  </span>
                  </td>
                  <td className={styles.tDlink}> 
                  <div className={styles.flex}>
                  <a className={styles.link} href="https://sh-one-iota.vercel.app">
                  <span className={styles.linkSpan}>https://www.sh.com</span>
                  <Image  width={25} height={25} alt='im1' src="/arr.png" />
                  </a>
                 
                
                  </div>
                  </td>
            </tr>

            <tr>
                <td className={styles.year}>2024</td>
                <td className={styles.tdTitle}>siteDoer.pro</td>
                <td  className={styles.country}>Ukraine</td>
                <td className={styles.stek}>
                  <span>
                 React
                  </span>
                  </td>
                  <td className={styles.tDlink}>
                  <div className={styles.flex}>
                    <a className={styles.link} href="https://site-doer.vercel.app">
                    <span className={styles.linkSpan}>https://sitedoer.pro</span>
                    <Image  width={25} height={25} alt='im1' src="/arr.png" />
                    </a>
                 
                  </div>
                  </td>
            </tr>

            <tr>
                <td className={styles.year}>2022</td>
                <td className={styles.tdTitle}>Sp Studio</td>
                <td  className={styles.country}>Ukraine</td>
                <td className={styles.stek}>
                  <span>
                 React
                  </span>
                  </td>
                  <td className={styles.tDlink}> 
                  <div className={styles.flex}> 
                  <a className={styles.link} href="https://spstudio.info">
                  <span className={styles.linkSpan}>https://spstudio.info</span>
                  <Image  width={25} height={25} alt='im1' src="/arr.png" />
                  </a> 
                  </div>
                  </td>
            </tr>

            <tr>
                <td className={styles.year}>2022</td>
                <td className={styles.tdTitle}>Rusni.net</td>
                <td  className={styles.country}>Sweden</td>
                <td className={styles.stek}>
                  <span>
                  Next.js
                  </span>
                  </td>
                  <td className={styles.tDlink}> 
                  <div className={styles.flex}>
                  <a className={styles.link} href="https://rusni.net">
                  <span className={styles.linkSpan}>https://rusni.net</span>
                  <Image  width={25} height={25} alt='im1' src="/arr.png" />
                  </a>
                  </div>
                  </td>
            </tr>

            

          
        </tbody>
    </table>
</div>
      <div  id="prices"  className={styles.section3}>

<div className={styles.services}>
<div className={styles.serviceItemTop}>
<div className={styles.serviceItem}>
 <h3 className={styles.serviceTitle}>{titleItem1}</h3>
 <div className={styles.servicePrices}>
 <p  className={styles.servicePrice}>{priceNewItem1}</p>
 <p  className={styles.oldPrice}>{priceOldItem1}</p>
 </div>
 <p  className={styles.serviceDescr}>{descrItem1}</p>
 <div className={styles.flex}>
                  <Link className={styles.loadPort} href="#contact">{buttonBuy}</Link>
                  <Image  width={25} height={25} alt='im1' src="/arr2.png" />
                  </div>
</div>
<div className={styles.serviceItem}>
 <h3 className={styles.serviceTitle}>{titleItem2}</h3>
 <div className={styles.servicePrices}>
 <p  className={styles.servicePrice}>{priceNewItem2}</p>
 <p  className={styles.oldPrice}>{priceOldItem2}</p>
 </div>
 <p  className={styles.serviceDescr}>{descrItem2}</p>
 <div className={styles.flex}>
                  <Link className={styles.loadPort} href="#contact">{buttonBuy}</Link>
                  <Image  width={25} height={25} alt='im1' src="/arr2.png" />
                  </div>
</div>
</div>
<div className={styles.serviceItemBottom}>
<div className={styles.serviceItem}>
 <h3 className={styles.serviceTitle}>{titleItem3}</h3>
 <div className={styles.servicePrices}>
 <p  className={styles.servicePrice}>{priceNewItem3}</p>
 <p  className={styles.oldPrice}>{priceOldItem3}</p>
 </div>
 <p  className={styles.serviceDescr}>{descrItem3}</p>
 <div className={styles.flex}>
                  <Link className={styles.loadPort} href="#contact">{buttonBuy}</Link>
                  <Image  width={25} height={25} alt='im1' src="/arr2.png" />
                  </div>
</div>

<div className={styles.serviceItem}>
 <h3 className={styles.serviceTitle}>{titleItem4}</h3>
 <div className={styles.servicePrices}>
 <p  className={styles.servicePrice}>{priceNewItem4}</p>
 <p  className={styles.oldPrice}>{priceOldItem4}</p>
 </div>
 <p  className={styles.serviceDescr}>{descrItem4}</p>
 <div className={styles.flex}>
                  <Link className={styles.loadPort} href="#contact">{buttonBuy}</Link>
                  <Image  width={25} height={25} alt='im1' src="/arr2.png" />
                  </div>
</div>
</div>

</div>
</div>
<div  id="about" className={styles.section5}>
<h2 className={styles.title} >{title3}</h2>

<p className={styles.p1}>{p8}</p>
<p className={styles.p1}>
{p9}</p>
<p className={styles.p1}>
{p10}</p>
<p className={styles.p1}>
{p11}</p>
<p className={styles.p1}>
{p12}</p>

<div className={styles.flex}>
<a className={styles.loadPort} href="/CV_IG.pdf" download>{buttonDownload}</a>
                  <Image  width={25} height={25} alt='im1' src="/arr2.png" />
                  </div>
</div>
<div id="contact" className={styles.section6}>
  <ContactComponent title4={title4} name={name} email={email} phone={phone} message={message} buttonSubmit={buttonSubmit}/>
  <ThreeCanvas/>
  </div>
  <div className={styles.section7}>

<a className={styles.footerItem} href="https://www.instagram.com/overthinker__2.0?igsh=MW1rdG9rN3dvNzVqMw==" target="_blank" rel="noopener noreferrer">Instagram</a>
<a className={styles.footerItem} href="tel:+380968336006">+380 96 83 36 006</a>
<a className={styles.footerItem} href="mailto:gregiv99@gmail.com">Email</a>

  </div>
    </main>
       )}
    </>
  )
}
