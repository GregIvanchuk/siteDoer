
import Image from 'next/image'
import styles from './page.module.css'
import { useTranslations } from "next-intl";
import {unstable_setRequestLocale} from 'next-intl/server';
import All from './All'

export default function Home({
  params: {locale}
}) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('Index');

  return (
    <>
   <All title={t("title")}
        p1={t("p1")}
        p2={t("p2")}
        p3={t("p3")}
        p4={t("p4")}
        title2={t("title2")}
        p5={t("p5")}
        p6={t("p6")}
        p7={t("p7")}
        year={t("year")}
        country={t("country")}
        project={t("project")}
        technology={t("technology")}
        link={t("link")}
        titleItem1={t("titleItem1")}
        priceNewItem1={t("priceNewItem1")}
        priceOldItem1={t("priceOldItem1")}
        descrItem1={t("descrItem1")}

        titleItem2={t("titleItem2")}
        priceNewItem2={t("priceNewItem2")}
        priceOldItem2={t("priceOldItem2")}
        descrItem2={t("descrItem2")}

        titleItem3={t("titleItem3")}
        priceNewItem3={t("priceNewItem3")}
        priceOldItem3={t("priceOldItem3")}
        descrItem3={t("descrItem3")}

        titleItem4={t("titleItem4")}
        priceNewItem4={t("priceNewItem4")}
        priceOldItem4={t("priceOldItem4")}
        descrItem4={t("descrItem4")}
        buttonBuy={t("buttonBuy")}

      

        title3={t("title3")}
        p8={t("p8")}
        p9={t("p9")}
        p10={t("p10")}
        p11={t("p11")}
        p12={t("p12")}
        buttonDownload={t("buttonDownload")}
        title4={t("title4")} name={t("name")} email={t("email")} phone={t("phone")} message={t("message")} buttonSubmit={t("buttonSubmit")}
        home = {t("home")}
        projects = {t("projects")}
        contact = {t("contact")}
        prices = {t("prices")}
        about = {t("about")}








   />
    </>
  )
}
