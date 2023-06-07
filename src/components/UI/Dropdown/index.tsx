import React, { useState, useEffect, useRef } from 'react'

import styles from './Dropdown.module.sass'
import Link from 'next/link'
import clsx from 'clsx'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

interface dataItem {
    title: string
    path: string
}

interface props {
    data: dataItem[]
    title: React.ReactNode
}

export const Dropdown: React.FC<props> = ({ data, title }) => {
    const [isActive, setIsActive] = useState<boolean>(false)
    const dropdownRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        // Функция-обработчик события клика
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                // Если клик был сделан вне элемента Dropdown, скрыть его
                setIsActive(false)
            }
        }

        // Добавление слушателя события клика при монтировании компонента
        document.addEventListener('click', handleClickOutside)

        // Удаление слушателя события клика при размонтировании компонента
        return () => {
            document.removeEventListener('click', handleClickOutside)
        }
    }, [])

    return (
        <div className={styles['dropdown']} ref={dropdownRef}>
            <button
                className={styles['dropbtn']}
                onClick={() => setIsActive((isActive) => !isActive)}
            >
                {title} {isActive ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            <div className={clsx(styles['dropdown-content'], isActive && styles.active)}>
                {data.map((item) => {
                    return (
                        <Link
                            key={Math.random()}
                            href={item.path}
                            className={styles['dropdown-link']}
                        >
                            {item.title}
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}
