import React, { useState, useEffect, useRef } from 'react'

import styles from './Dropdown.module.sass'
import Link from 'next/link'
import clsx from 'clsx'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

interface dataItem {
    title: React.ReactNode
    tip?: string
    path: string
    icon?: React.ReactNode
}

interface props {
    data: dataItem[]
    title: React.ReactNode
    icon?: React.ReactNode
}

export const Dropdown: React.FC<props> = ({ data, title, icon }) => {
    const [isActive, setIsActive] = useState<boolean>(false)
    const dropdownRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsActive(false)
            }
        }

        document.addEventListener('click', handleClickOutside)

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
                {icon && icon} {title} {isActive ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            <div className={clsx(styles['dropdown-content'], isActive && styles.active)}>
                {data.map((item) => {
                    return (
                        <Link
                            key={Math.random()}
                            href={item.path}
                            className={styles['dropdown-link']}
                        >
                            <span className={styles['dropdown-link-tip']}>{item.tip}</span>
                            <p>
                                {item.icon && item.icon} {item.title}{' '}
                            </p>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}
