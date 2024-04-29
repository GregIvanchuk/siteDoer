"use client";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import styles from "./ConactComponent.module.css";
import Image from "next/image";
import Loader from "../Loader";
function ContactComponent({title4, name, email, phone, message,buttonSubmit}) {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const [loading, setLoading] = React.useState(false);
    // const apiForm2 = process.env.REACT_APP_API_URL_FORM_TWO
    const mapStyle = {
        allowFullScreen: true,
        backgroundColor: 'black', // Встановіть чорний колір фону
      };
    
    const onSubmit = (data) => {
        setLoading(true);

        axios
            .post("/api/blogs", data)
            .then((response) => {
                if (response.status === 200) {
                    // Успішно відправлено форму
                    setLoading(false);
                    setTimeout(() => {
                        alert("Form submitted successfully!");
                    }, 1000);
                    reset(); // Очистка форми
                } else {
                    throw new Error(response.statusText);
                }
            })
            .catch((error) => {
                console.error(error);
                setLoading(false); // Встановлюємо setLoading(false) при помилці
                setTimeout(() => {
                    alert("Form submission failed.");
                }, 1000);
            });
    };
    const showNotification = (message) => {
        // Перевірка чи браузер підтримує сповіщення
        if ("Notification" in window) {
            Notification.requestPermission().then((permission) => {
                if (permission === "granted") {
                    new Notification(message);
                }
            });
        }
    };
    return (
        <>
            <div className={styles.wrapper}>
                {loading ? (
                    <Loader/>
                ) : (
                    <div className={styles.content}>
                        {/* <div className={styles.greyBlock}>
                            <h1 className={styles.h1}>{contacTitle}</h1>
                            <p className={styles.p}>
                               {contacttext1}
                            </p>
                            <p className={styles.p}>
                            {contacttext2}
                            </p>
                            <p className={styles.p}>
                            {contacttext3}
                            </p>
                        </div> */}
                         <form
                            className={styles.form}
                            onSubmit={handleSubmit(onSubmit)}
                        >
                             <h3 className={styles.titleColums}>
                            {title4}
            </h3>
                            <div className={styles.item}>
                                {/* <label className={styles.label} htmlFor="name">
                                  {name} <span>{(require)}</span>
                                </label> */}
                                <input
                                 placeholder={name} 
                                    type="text"
                                    id="name"
                                    {...register("name", { required: true })}
                                />
                                {errors.name && (
                                    <span style={{ color: "red" }}>
                                       enter a name
                                    </span>
                                )}
                            </div>
                            <div className={styles.item}>
                                {/* <label className={styles.label} htmlFor="email">
                                   {email} <span>{(require)}</span>
                                </label> */}
                                <input
                                 placeholder={email} 
                                    type="email"
                                    id="email"
                                    {...register("email", { required: true })}
                                />
                                {errors.email && (
                                    <span style={{ color: "red" }}>
                                       enter a email
                                    </span>
                                )}
                            </div>
                            <div className={styles.item}>
                                {/* <label className={styles.label} htmlFor="phone">
                                  {phone}  <span>{(require)}</span>
                                </label> */}
                                <input
                                    placeholder={phone}
                                    type="phone"
                                    id="phone"
                                    {...register("phone", { required: true })}
                                />
                                {errors.phone && (
                                    <span style={{ color: "red" }}>
                                       enter a phone
                                    </span>
                                )}
                            </div>
                            <div className={styles.item}>
                                {/* <label
                                    className={styles.label}
                                    htmlFor="letter"
                                >
                                   {letter}<span>{(require)}</span>
                                </label> */}
                                <textarea
                                 placeholder={message}
                                    className={styles.textarea}
                                    rows="4"
                                    cols="50"
                                    type="text"
                                    id="letter"
                                    {...register("letter", { required: true })}
                                />
                                {errors.letter && (
                                    <span style={{ color: "red" }}>
                                      enter a message
                                    </span>
                                )}
                            </div>
                            <button className={styles.button} type="submit">
                              {buttonSubmit}
                            </button>
                        </form> 
                        </div>
                )}
                
            </div>
        </>
    );
}
export default ContactComponent;
