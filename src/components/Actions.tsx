import React from 'react'

interface Props {
    action: 'del' | 'reset' | '='
    reset: () => void
    deleteDigit: () => void
    calculate: () => void
    digit?: string
}

const Actions = ({ action, calculate, deleteDigit, reset, digit }: Props) => {
    const handleActions = () => {
        switch (action) {
            case 'del':
                deleteDigit()
                break
            case 'reset':
                reset()
                break
            case '=':
                digit && calculate()
                break
            default:
                break
        }
    }

    return (
        <button
            onClick={() => handleActions()}
            className={`uppercase hover:brightness-150 flex items-center justify-center text-[1.4rem] md:text-md  shadow-customInnerBottom shadow-keyShadowPrimary/80 rounded-md  py-2 px-4
            ${
                action === 'reset' &&
                'col-span-2 bg-keyBackgroundPrimary shadow-keyShadowPrimary/80 text-textWhite'
            }
            ${
                action === '=' &&
                'col-span-2 bg-keySecondary shadow-keyShadowSecondary/80 text-textWhite '
            }
            ${
                action === 'del' &&
                'bg-keyBackgroundPrimary shadow-keyShadowPrimary/80 text-textWhite'
            }
            `}
        >
            {action}
        </button>
    )
}

export default Actions
