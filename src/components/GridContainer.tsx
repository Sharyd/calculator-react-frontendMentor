import React from 'react'

interface Props {
    children: React.ReactNode
}

const GridContainer = ({ children }: Props) => {
    return (
        <div
            className={`w-full grid grid-cols-4  rounded-md gap-4 py-6 px-6 h-full bg-activeBackground`}
        >
            {children}
        </div>
    )
}

export default GridContainer
