"use client"
import Image from "next/image";
import styles from "./Header.module.css";
import React from "react";
import Link from "next/link";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
export default function Header({home, projects, contact, prices, about}) {
  const pathname = usePathname()
  let  [open,setOpen] = React.useState(true);
  let  [active,setActive] = React.useState(0);
  let [selectlang,setSelectlang] =  React.useState(true);
  useEffect(() => {
   if(pathname === `/`) setActive(0);
   if(pathname === `/projects`) setActive(1);
   if(pathname === `/about`) setActive(2);
   if(pathname === `/contact`) setActive(3);
  }, [pathname]);
  let openHandler= () => {
    setOpen(!open);
  }
    return (
       <>
            <header className={styles.header}>
            {/* <Link className={styles.link} href={`/${locale}`}><Image
                        className={styles.logo}
                        width={70}
                        height={70}
                        src="/VapnoGroup.png"
                        alt="logo"
                    /></Link> */}
                     {/* <Link className={styles.link} href={`/`}><p className={styles.logo}>VAPNO GROUP</p></Link> */}
                <div className={open ? styles.menu : styles.menu + " " + styles.active }>
                <ul onClick={() => openHandler()}  className={styles.menuList}>
                    <Link  className={styles.link}  href={`/`}><li onClick={() => setActive(0)} className={ (active === 0) ? styles.menuActive  : styles.menuItem }>{home}</li></Link>
                    <Link  className={styles.link}  href="#projects">  <li onClick={() => setActive(1)}  className={ (active === 1) ? styles.menuActive  : styles.menuItem }>{projects}</li></Link>
                    {/* <Link  className={styles.link}   href={`/${locale}/about`}> <li onClick={() => setActive(2)}  className={ (active === 2) ? styles.menuActive  : styles.menuItem }>{about}</li></Link> */}
                    <Link  className={styles.link} href="#contact" ><li onClick={() => setActive(3)}  className={ (active === 3) ? styles.menuActive  : styles.menuItem }>{contact}</li></Link>
                    {/* <div onClick={handleChangeLanguage} className={styles.changeLanguage}>| {selectlang ?  "UK" : "DE"} | </div> */}
                    <Link   className={styles.link} href="#prices" >
                    <li onClick={() => setActive(4)}  className={ (active === 4) ? styles.menuActive  : styles.menuItem }>{prices}</li>
                      </Link>
                      <Link   className={styles.link} href="#about" >
                    <li onClick={() => setActive(5)}  className={ (active === 5) ? styles.menuActive  : styles.menuItem }>{about}</li>
                      </Link>
                </ul>
                </div>
      <div onClick={() => openHandler()}  className={ open ? styles.burger :  styles.burger + " " + styles.active}>
        <span></span>
      </div>
      { pathname.includes("uk") ? <Link className={styles.lang}  href={`/en`}>EN </Link> : 
                    <Link className={styles.lang}  href={`/uk`}>UK</Link> 
                  }
            </header>
            </>
    );
}
