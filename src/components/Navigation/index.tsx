'use client'

import Image from 'next/image'
import styles from './Navigation.module.sass'
import clsx from 'clsx'
import Link from 'next/link'
import { FaTelegram, FaVk, FaWhatsapp } from 'react-icons/fa'
import { Dropdown } from '../UI/Dropdown'

export const Navigation = () => {
    return (
        <header>
            <nav className={clsx(styles.navbar, 'container')}>
                <Image src="/img/logo.svg" width={94} height={30} alt="dsds" />

                <div className={styles['nav-links']}>
                    <Dropdown
                        title={'Наши услуги'}
                        data={[
                            { title: 'Визы', path: '/' },
                            { title: 'Круизы', path: '/' },
                        ]}
                    />
                    <Link href="/" className={styles['nav-link']}>
                        О компании
                    </Link>
                    <Link href="/" className={styles['nav-link']}>
                        Контакты
                    </Link>
                    <div className={styles['social-links']}>
                        <Link href="/" className={styles['nav-link--social']}>
                            <FaVk />
                        </Link>
                        <Link href="/" className={styles['nav-link--social']}>
                            <FaTelegram />
                        </Link>
                        <Link href="/" className={styles['nav-link--social']}>
                            <FaWhatsapp />
                        </Link>
                    </div>
                    <Dropdown
                        title={'+7 (495)641-51-38'}
                        data={[
                            { title: 'Визы', path: '/' },
                            { title: 'Круизы', path: '/' },
                        ]}
                    />
                    <Dropdown
                        title={'Наши адреса'}
                        data={[
                            { title: 'г. Москва, проспект Мичуринский 22 корп. 1 ТЦ', path: '/' },
                            { title: 'г. Москва, Кожевническая ул. д. 7. стр1 ТЦ', path: '/' },
                        ]}
                    />
                </div>
            </nav>

            <div className={styles['nav-tabs']}>
                <div className={clsx(styles['nav-tabs-content'], 'container')}>
                    <Link href="/" className={styles['nav-tab']}>
                        Подбор тура
                    </Link>
                    <Link href="/" className={styles['nav-tab']}>
                        Горящие туры
                    </Link>
                    <Link href="/" className={styles['nav-tab']}>
                        Страны
                    </Link>
                    <Link href="/" className={styles['nav-tab']}>
                        Авиабилеты
                    </Link>
                    <Link href="/" className={styles['nav-tab']}>
                        Туризм
                    </Link>
                    <Link href="/" className={styles['nav-tab']}>
                        Бронирование отелей
                    </Link>
                </div>
            </div>
        </header>
    )
}
