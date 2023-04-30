import React from 'react'

interface Props {
    operation: string
    setOperationState: React.Dispatch<React.SetStateAction<string>>
    previousDigit: string
    operationState: string
}

const Operation = ({
    operation,
    setOperationState,
    previousDigit,
    operationState,
}: Props) => {
    return (
        <button
            onClick={() => previousDigit && setOperationState(operation)}
            className={`${
                operationState === operation ? 'brightness-150' : null
            } text-textColorPrimary hover:brightness-150  shadow-customInnerBottom shadow-keyShadowPrimary/60 bg-keyBackgroundTertiary rounded-md  py-2 px-4`}
        >
            {operation}
        </button>
    )
}

export default Operation
