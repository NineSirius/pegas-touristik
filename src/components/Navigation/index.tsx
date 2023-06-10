'use client'

import Image from 'next/image'
import styles from './Navigation.module.sass'
import clsx from 'clsx'
import Link from 'next/link'
import { FaLocationArrow, FaTelegram, FaVk, FaWhatsapp } from 'react-icons/fa'
import { Dropdown } from '../UI/Dropdown'
import { useEffect, useState } from 'react'
import { RxDotFilled } from 'react-icons/rx'

export const Navigation = () => {
    const [hamburger, setHamburger] = useState<boolean>(false)

    useEffect(() => {
        if (hamburger) {
            document.body.classList.add('fixed')
        } else {
            document.body.classList.remove('fixed')
        }
    }, [hamburger])

    return (
        <header>
            <div className={styles['navbar-wrap']}>
                <nav className={clsx(styles.navbar, 'container')}>
                    <Image src="/img/logo.svg" width={94} height={30} alt="dsds" />

                    <div className={clsx(styles['nav-links'], hamburger && styles.active)}>
                        <Dropdown
                            title={'Наши услуги'}
                            data={[
                                { title: 'Визы', path: '/', icon: <RxDotFilled /> },
                                { title: 'Круизы', path: '/', icon: <RxDotFilled /> },
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
                            icon={
                                <Image
                                    src="/img/flag-of-russia.png"
                                    width={18}
                                    height={14}
                                    alt="flag of russia"
                                ></Image>
                            }
                            data={[
                                {
                                    tip: 'Офис метро раменки:',
                                    title: (
                                        <span className={styles.subtitle}>+7 (495)641-51-38 </span>
                                    ),
                                    path: '/',
                                    icon: (
                                        <Image
                                            src="/img/flag-of-russia.png"
                                            width={18}
                                            height={14}
                                            alt="flag of russia"
                                        ></Image>
                                    ),
                                },
                                {
                                    tip: 'Офис метро Павелецкая:',
                                    title: '+7 (499)325-57-88',
                                    path: '/',
                                    icon: (
                                        <Image
                                            src="/img/flag-of-russia.png"
                                            width={18}
                                            height={14}
                                            alt="flag of russia"
                                        ></Image>
                                    ),
                                },
                            ]}
                        />
                        <Dropdown
                            title={`Наши адреса`}
                            icon={
                                <Image
                                    src="/img/location-icon.svg"
                                    width={12}
                                    height={13}
                                    alt="Location иконка"
                                ></Image>
                            }
                            data={[
                                {
                                    title: 'г. Москва, проспект Мичуринский 22 корп. 1 ТЦ',
                                    path: '/',
                                    icon: (
                                        <Image
                                            src="/img/location-icon.svg"
                                            width={12}
                                            height={13}
                                            alt="Location иконка"
                                        ></Image>
                                    ),
                                },
                                {
                                    title: 'г. Москва, Кожевническая ул. д. 7. стр1 ТЦ',
                                    path: '/',
                                    icon: (
                                        <Image
                                            src="/img/location-icon.svg"
                                            width={12}
                                            height={13}
                                            alt="Location иконка"
                                        ></Image>
                                    ),
                                },
                            ]}
                        />
                    </div>
                    <button
                        className={clsx(
                            styles.hamburger,
                            styles['hamburger--collapse'],
                            hamburger && styles['is-active'],
                        )}
                        type="button"
                        onClick={() => setHamburger((val) => !val)}
                    >
                        <span className={styles['hamburger-box']}>
                            <span className={styles['hamburger-inner']}></span>
                        </span>
                    </button>
                </nav>
            </div>

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

            <div
                className={clsx(styles.overlay, hamburger && styles.active)}
                onClick={() => setHamburger(false)}
            ></div>
        </header>
    )
}
