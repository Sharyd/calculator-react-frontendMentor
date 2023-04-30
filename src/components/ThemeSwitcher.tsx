import React, { useCallback } from 'react'
import { Themes } from '../App'
import { motion } from 'framer-motion'

interface Props {
    theme: string
    setTheme: React.Dispatch<React.SetStateAction<Themes>>
}
const ThemeSwitcher = ({ theme, setTheme }: Props) => {
    const activeTheme = useCallback(() => {
        theme === Themes.theme1
            ? setTheme(Themes.theme2)
            : theme === Themes.theme2
            ? setTheme(Themes.theme3)
            : setTheme(Themes.theme1)
    }, [theme, setTheme])

    return (
        <div className="flex items-end  gap-6">
            <p className="text-xs tracking-widest uppercase py-1">theme</p>
            <div className="flex items-center flex-col">
                <div className="flex text-sm gap-3.5">
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                </div>
                <div
                    className={`w-16 rounded-full  relative cursor-pointer h-6 bg-activeBackground`}
                    onClick={activeTheme}
                >
                    {theme === Themes.theme1 && (
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.9 }}
                            initial={{ left: 46 }}
                            animate={{ left: 4 }}
                            className={`w-4 h-4 shadow-inner absolute top-[20%] left-1 shadow-keyShadowSecondary rounded-full bg-keySecondary hover:brightness-150 
                        `}
                        ></motion.button>
                    )}
                    {theme === Themes.theme2 && (
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.9 }}
                            initial={{ left: 1 }}
                            animate={{ left: 23 }}
                            className={`w-4 h-4 shadow-inner absolute top-[20%] left-6 shadow-keyShadowSecondary rounded-full bg-keySecondary  hover:brightness-150 
                    
                        `}
                        ></motion.button>
                    )}
                    {theme === Themes.theme3 && (
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.9 }}
                            initial={{ left: 26 }}
                            animate={{ left: 46 }}
                            className={`w-4 h-4 shadow-inner absolute top-[20%] left-11 shadow-keyShadowSecondary rounded-full bg-keySecondary hover:brightness-150 
                  
                        `}
                        ></motion.button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ThemeSwitcher
