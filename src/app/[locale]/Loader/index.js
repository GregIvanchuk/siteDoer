"use client"
import Image from "next/image";
import styles from "./Loader.module.css";
import React from "react";
import Link from "next/link";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
export default function Loader() {
 
    return (
       <>
       <div className={styles.load}>
  <div>G</div>
  <div>N</div>
  <div>I</div>
  <div>D</div>
  <div>A</div>
  <div>O</div>
  <div>L</div>
</div>
          </>
    );
}
