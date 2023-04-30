import { motion } from 'framer-motion'
import React from 'react'

interface Props {
    children: React.ReactNode
}
const Container = ({ children }: Props) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col w-full min-h-screen items-center justify-center"
        >
            {children}
        </motion.div>
    )
}

export default Container
