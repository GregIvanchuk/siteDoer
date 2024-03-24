"use client"
import React, { useState } from 'react';
import Image from 'next/image'
import styles from './page.module.css'
import Header from './Header'
import Loader from './Loader';
import ContactComponent from './ContactComponent';
import ThreeCanvas from '@/ThreeCanvas';
import Link from 'next/link';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const simulateDataLoading = () => {
    setTimeout(() => {
      setIsLoading(false); // Після завантаження даних приховати лоадер
    }, 3000); // Час затримки у мілісекундах
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
      <Header/>
      <div className={styles.center}>
     <h1 className={styles.logo} > siteDoer.pro</h1>
      </div>
      <div className={styles.section1}>

      <h2 className={styles.title} >Welcome to siteDoer.pro!</h2>

      <p className={styles.p1}> We are a professional web development studio offering a full range of services for creating, designing, and maintaining web projects of any complexity. Our team consists of experienced professionals with a creative approach to each task.</p>

      <p className={styles.p2}>In a world where the visual appearance and functionality of a website determine the success of your business or project, we offer an individual approach to each client. Whether you need to create a new website from scratch, redesign an existing one, or maintain and optimize an existing resource, we are ready to bring your ideas to life.</p>

      <p className={styles.p3}>Our services cover all aspects of web development, including web design, programming, mobile device adaptation, SEO optimization, security testing, and much more. We use modern technologies and best market practices to provide you with a high-quality product that meets all modern standards.</p>

      <p className={styles.p4}>Join our studio and let us make your web project visible and effective!</p>
      </div>
      <div className={styles.section2}>
      <Image className={styles.im} width={450} height={450} alt='im1' src="/im1.jpg" />
       <div className={styles.text}>
       <h3 className={styles.titleH3}>
Our studio uses cutting-edge technologies to build websites and web applications, primarily employing:</h3> 
<ul className={styles.list}
>
  <li className={styles.listItem}>
React: React is one of the most popular JavaScript libraries for developing user interfaces. It enables us to create dynamic and efficient web pages that respond to user actions without page reloads.</li>
<li className={styles.listItem}>
Next.js: Next.js is a popular React framework for building universal (with server-side rendering) web applications. It provides the capability to build high-performing and SEO-optimized applications, along with straightforward routing management and static page generation.</li>
<li className={styles.listItem}>
MongoDB: MongoDB is a document-oriented NoSQL database used for storing and managing data. It allows us to efficiently store and process structured and unstructured data for our web projects.</li>
</ul>
       </div>
    
      

      </div>

      <div  id="projects" className={styles.section4}>
<table className={styles.myTable}>
        <thead>
            <tr>
                <th >Year</th>
                <th>Project</th>
                <th className={styles.countryDescr}>Country </th>
                <th className={styles.built}>Built with</th>
                <th>Link</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td className={styles.year} >2021</td>
                <td className={styles.tdTitle}>Inkd by Mary Ann</td>
                <td  className={styles.country}>USA</td>
                <td className={styles.stek}>
                  <span>
                 Next.js
                  </span>
                  </td>
                <td className={styles.tDlink} >
                  <div className={styles.flex}>
                   <a className={styles.link} href="https://www.example.com">
                   <span className={styles.linkSpan}>https://www.example.com</span>
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
                <td className={styles.tdTitle}>Piacere Pizza</td>
                <td  className={styles.country}>Germany</td>
                <td className={styles.stek}>
                  <span>
                 React
                  </span>
                  </td>
                  <td className={styles.tDlink}>
                  <div className={styles.flex}>
                    <a className={styles.link} href="https://example.app">
                    <span className={styles.linkSpan}>https://www.pp.com</span>
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

            <tr>
                <td className={styles.year}>2023</td>
                <td className={styles.tdTitle}>Morpho.jewerly</td>
                <td  className={styles.country}>Ukraine</td>
                <td className={styles.stek}>
                  <span>
                  React
                  </span>
                  </td>
                  <td className={styles.tDlink}> 
                  <div className={styles.flex}>
                  <a className={styles.link} href="https://morpho.jewelry">
                  <span className={styles.linkSpan}>https://morpho.jewelry</span>
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
        </tbody>
    </table>
</div>
      <div  id="prices"  className={styles.section3}>

<div className={styles.services}>
<div className={styles.serviceItemTop}>
<div className={styles.serviceItem}>
 <h3 className={styles.serviceTitle}>Corporate Websites</h3>
 <div className={styles.servicePrices}>
 <p  className={styles.servicePrice}>from 150$</p>
 <p  className={styles.oldPrice}>from 250$</p>
 </div>
 <p  className={styles.serviceDescr}>up to 5 pages</p>
 <div className={styles.flex}>
                  <Link className={styles.loadPort} href="#contact">buy</Link>
                  <Image  width={25} height={25} alt='im1' src="/arr2.png" />
                  </div>
</div>

<div className={styles.serviceItem}>
 <h3 className={styles.serviceTitle}>Landing Page</h3>
 <div className={styles.servicePrices}>
 <p  className={styles.servicePrice}>from 100$</p>
 <p  className={styles.oldPrice}>from 200$</p>
 </div>
 <p  className={styles.serviceDescr}>up to 10 sections</p>
 <div className={styles.flex}>
                  <Link className={styles.loadPort} href="#contact">buy</Link>
                  <Image  width={25} height={25} alt='im1' src="/arr2.png" />
                  </div>
</div>
</div>
<div className={styles.serviceItemBottom}>
<div className={styles.serviceItem}>
 <h3 className={styles.serviceTitle}>E-commerce Websites</h3>
 <div className={styles.servicePrices}>
 <p  className={styles.servicePrice}>from 200$</p>
 <p  className={styles.oldPrice}>from 350$</p>
 </div>
 <p  className={styles.serviceDescr}>basket, filters, payment, admin panel</p>
 <div className={styles.flex}>
                  <Link className={styles.loadPort} href="#contact">buy</Link>
                  <Image  width={25} height={25} alt='im1' src="/arr2.png" />
                  </div>
</div>

<div className={styles.serviceItem}>
 <h3 className={styles.serviceTitle}>News Websites</h3>
 <div className={styles.servicePrices}>
 <p  className={styles.servicePrice}>from 250$</p>
 <p  className={styles.oldPrice}>from 350$</p>
 </div>
 <p  className={styles.serviceDescr}>admin panel</p>
 <div className={styles.flex}>
                  <Link className={styles.loadPort} href="#contact">buy</Link>
                  <Image  width={25} height={25} alt='im1' src="/arr2.png" />
                  </div>
</div>
</div>

</div>
</div>
<div  id="about" className={styles.section5}>
<h2 className={styles.title} >About Us</h2>

<p className={styles.p1}> 
Мy journey began with a quest for a world where technology and creativity intersect, and where every line of code can create a new visual and functional reality. My name is Gregory, and I am a web developer.</p>
<p className={styles.p1}>
From a young age, I was fascinated by computers and their capabilities. When I first delved into creating my own web pages, I felt like I had found my calling. Starting with simple HTML and CSS projects, I steadily grew and honed my skills.</p>
<p className={styles.p1}>
Over time, I mastered new technologies and tools such as JavaScript, PHP, and libraries/frameworks that make development even more efficient. My projects span a wide range, from corporate websites to web applications and interactive interfaces.</p>
<p className={styles.p1}>
What excites me most about being a web developer is the ability to transform ideas and concepts into reality, creating user-friendly and aesthetically appealing websites and applications. I am always seeking new challenges and skills, ready to join a team where I can contribute my creativity and professionalism to achieve common goals.</p>
<p className={styles.p1}>
To learn more about my projects and skills, I invite you to explore my portfolio and resume. Thank you for your attention, and I look forward to opportunities for collaboration and growth in the field of web development.</p>

<div className={styles.flex}>
                  <a className={styles.loadPort} href="https://morpho.jewelry">View resume</a>
                  <Image  width={25} height={25} alt='im1' src="/arrow2.png" />
                  </div>
</div>
<div id="contact" className={styles.section6}>
  <ContactComponent/>
  <ThreeCanvas/>
  </div>
    </main>
       )}
    </>
  )
}
