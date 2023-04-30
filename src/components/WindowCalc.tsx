import { AnimatePresence, motion } from 'framer-motion'
import React, { useCallback, useEffect, useRef } from 'react'

interface Props {
    setDigit: React.Dispatch<React.SetStateAction<string>>
    setPreviousDigit: React.Dispatch<React.SetStateAction<string>>
    previousDigit: string
    digit: string
    operationState: string
    inputRef: React.RefObject<HTMLInputElement> | null
    inputPreviousRef: React.RefObject<HTMLInputElement> | null
}

const WindowCalc = ({
    previousDigit,
    setPreviousDigit,
    setDigit,
    digit,
    operationState,
    inputRef,
    inputPreviousRef,
}: Props) => {
    const regexIncludesNumbersCommas = /^(?:0|[1-9]\d*)(?:[.,]\d{0,18})?$|^$/g

    return (
        <div>
            <motion.div
                initial={{ opacity: 0, y: '-50%' }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className={`relative bg-activeBackground w-full mr-auto rounded-md py-3 px-5`}
            >
                <AnimatePresence>
                    <div className="flex flex-col items-end">
                        <input
                            ref={inputPreviousRef}
                            type="text"
                            value={previousDigit}
                            name="num"
                            title="Numbers only"
                            autoFocus
                            onChange={(e) => {
                                if (
                                    regexIncludesNumbersCommas.test(
                                        e.target.value
                                    )
                                ) {
                                    !operationState &&
                                        setPreviousDigit(e.target.value)
                                }
                            }}
                            className="w-full m-auto outline-none bg-transparent block text-right"
                        />

                        <span className="px-6">{operationState}</span>
                        {operationState && (
                            <motion.input
                                initial={{ opacity: 0, y: '-100%' }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                ref={inputRef}
                                type="text"
                                value={digit}
                                name="num"
                                title="Numbers only"
                                autoFocus
                                onChange={(e) => {
                                    if (
                                        regexIncludesNumbersCommas.test(
                                            e.target.value
                                        )
                                    ) {
                                        setDigit(e.target.value)
                                    }
                                }}
                                className="w-full m-auto outline-none bg-transparent block text-right"
                            />
                        )}
                    </div>
                </AnimatePresence>
            </motion.div>
        </div>
    )
}

export default WindowCalc
