import React from 'react'
import styles from './Footer.module.sass'
import Link from 'next/link'
import Image from 'next/image'
import clsx from 'clsx'

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={clsx(styles['footer-content'], 'container')}>
                <div className={styles['footer-logo']}>
                    <Image src="/img/logo.svg" width={95} height={30} alt="Logo" />
                </div>
                <nav className={styles['footer-links']}>
                    <div className={styles['footer-links-col']}>
                        <h4 className={styles['footer-title']}>Покупателю</h4>
                        <Link href="/">Доставка и оплаты</Link>
                        <Link href="/">Помощь</Link>
                        <Link href="/">О компании</Link>
                    </div>
                    <div className={styles['footer-links-col']}>
                        <h4 className={styles['footer-title']}>Клиентам</h4>
                        <Link href="/">Арендодатели</Link>
                        <Link href="/">Поставщикам</Link>
                    </div>
                    <div className={styles['footer-links-col']}>
                        <h4 className={styles['footer-title']}>Информация</h4>
                        <Link href="/">Контакты</Link>
                        <Link href="/">Реквизиты</Link>
                    </div>
                </nav>
                <div className={styles['footer-contact']}>
                    <h4 className={styles['footer-title']}>+7 (495)641-51-38</h4>
                    <span className="subtitle">Обратный звонок</span>
                </div>
            </div>
        </footer>
    )
}
