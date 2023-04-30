import React from 'react'

interface Props {
    number: string
    setDigit: React.Dispatch<React.SetStateAction<string>>
    setPreviousDigit: React.Dispatch<React.SetStateAction<string>>
    operationState: string
    previousDigit: string
    digit: string
}

const Digit = ({
    number,
    setDigit,
    setPreviousDigit,
    operationState,
    previousDigit,
    digit,
}: Props) => {
    const lastPreviousDigit = previousDigit[previousDigit.length - 1]
    const lastDigit = digit[digit.length - 1]

    const validateDigit = (digit: string) => {
        const regexIncludesNumbersCommas =
            /^(?:0|[1-9]\d*)(?:[.,]\d{0,18})?$|^$/g
        if (regexIncludesNumbersCommas.test(digit)) {
            return digit
        } else {
            return digit.slice(0, -1)
        }
    }

    return (
        <button
            onClick={() =>
                !operationState
                    ? setPreviousDigit(validateDigit(previousDigit + number))
                    : setDigit(validateDigit(digit + number))
            }
            className={`${
                (!operationState && lastPreviousDigit === number) ||
                lastDigit === number
                    ? 'brightness-150'
                    : ''
            } text-textColorPrimary hover:brightness-150  shadow-customInnerBottom shadow-keyShadowPrimary/60 bg-keyBackgroundTertiary rounded-md  py-2 px-4`}
        >
            {number}
        </button>
    )
}

export default Digit
