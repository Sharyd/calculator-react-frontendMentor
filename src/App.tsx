import { useCallback, useEffect, useRef, useState } from 'react'
import ThemeSwitcher from './components/ThemeSwitcher'
import WindowCalc from './components/WindowCalc'
import GridContainer from './components/GridContainer'
import Container from './components/Container'
import Digit from './components/Digit'
import Actions from './components/Actions'
import Operation from './components/Operation'
import useLocalStorage from './hooks/useLocalStorage'
import { motion } from 'framer-motion'

export enum Themes {
    theme1 = 'theme-1',
    theme2 = 'theme-2',
    theme3 = 'theme-3',
}

function App() {
    const [theme, setTheme] = useLocalStorage('theme', Themes.theme1)
    const [digit, setDigit] = useState('')
    const [previousDigit, setPreviousDigit] = useState('')
    const [operationState, setOperationState] = useState('')
    const inputPreviousRef = useRef<HTMLInputElement | null>(null)
    const inputRef = useRef<HTMLInputElement | null>(null)

    const calculate = useCallback(() => {
        let result = 0

        switch (operationState) {
            case '+':
                result = parseFloat(previousDigit) + parseFloat(digit)
                break
            case '-':
                result = parseFloat(previousDigit) - parseFloat(digit)
                break
            case 'x':
                result = parseFloat(previousDigit) * parseFloat(digit)
                break
            case '/':
                result = parseFloat(previousDigit) / parseFloat(digit)
                break
            default:
                break
        }

        setPreviousDigit(result.toString())
        inputPreviousRef?.current?.focus()
        setDigit('')
        setOperationState('')
    }, [digit, operationState, previousDigit, inputPreviousRef])

    const deleteDigit = () => {
        !operationState
            ? setPreviousDigit(previousDigit.slice(0, -1))
            : setDigit(digit.slice(0, -1))

        !operationState
            ? inputPreviousRef?.current?.focus()
            : inputRef?.current?.focus()
    }
    const reset = () => {
        setDigit('')
        setPreviousDigit('')
        setOperationState('')
        inputPreviousRef?.current?.focus()
    }

    useEffect(() => {
        if (!digit) return
        inputRef?.current?.focus()
    }, [digit, inputRef])

    useEffect(() => {
        if (!previousDigit) return
        inputPreviousRef?.current?.focus()
    }, [previousDigit, inputPreviousRef])

    useEffect(() => {
        //Handle keyboard events
        if (!previousDigit) return

        const handleKeyDown = (event: { keyCode: number; key: string }) => {
            if (event.key === '+') {
                setOperationState('+')
            } else if (event.key === '-') {
                setOperationState('-')
            } else if (event.key === '*' || event.key === 'x') {
                setOperationState('x')
            } else if (event.key === '/' || event.key === ':') {
                setOperationState('/')
            } else if (event.key === 'Enter' || event.key === '=') {
                digit && calculate()
            } else if (event.key === 'Delete') {
                reset()
            }
        }
        document.addEventListener('keydown', handleKeyDown)

        return () => {
            document.removeEventListener('keydown', handleKeyDown)
        }
    }, [previousDigit, calculate, digit])

    return (
        <>
            <main
                className={`min-w-screen min-h-screen bg-mainBackground text-textWhite ${theme}`}
            >
                <Container>
                    <div className="flex flex-col px-2 gap-6 md:px-4 md:w-[500px] md:h-[650px]">
                        <div
                            className={`flex justify-between  ${
                                theme === Themes.theme1
                                    ? 'text-textWhite'
                                    : 'text-textColorPrimary'
                            }`}
                        >
                            <h1>calc</h1>
                            <ThemeSwitcher theme={theme} setTheme={setTheme} />
                        </div>
                        <div
                            className={` ${
                                theme === Themes.theme1
                                    ? 'text-textWhite'
                                    : 'text-textColorPrimary'
                            }`}
                        >
                            <WindowCalc
                                inputRef={inputRef}
                                inputPreviousRef={inputPreviousRef}
                                setDigit={setDigit}
                                setPreviousDigit={setPreviousDigit}
                                previousDigit={previousDigit}
                                digit={digit}
                                operationState={operationState}
                            />
                        </div>
                        <div>
                            <GridContainer>
                                <Digit
                                    number={'7'}
                                    previousDigit={previousDigit}
                                    setDigit={setDigit}
                                    digit={digit}
                                    setPreviousDigit={setPreviousDigit}
                                    operationState={operationState}
                                />
                                <Digit
                                    number={'8'}
                                    previousDigit={previousDigit}
                                    setDigit={setDigit}
                                    digit={digit}
                                    setPreviousDigit={setPreviousDigit}
                                    operationState={operationState}
                                />
                                <Digit
                                    number={'9'}
                                    previousDigit={previousDigit}
                                    setDigit={setDigit}
                                    digit={digit}
                                    setPreviousDigit={setPreviousDigit}
                                    operationState={operationState}
                                />
                                <Actions
                                    action={'del'}
                                    calculate={calculate}
                                    reset={reset}
                                    deleteDigit={deleteDigit}
                                />
                                <Digit
                                    number={'4'}
                                    previousDigit={previousDigit}
                                    setDigit={setDigit}
                                    digit={digit}
                                    setPreviousDigit={setPreviousDigit}
                                    operationState={operationState}
                                />
                                <Digit
                                    number={'5'}
                                    previousDigit={previousDigit}
                                    setDigit={setDigit}
                                    digit={digit}
                                    setPreviousDigit={setPreviousDigit}
                                    operationState={operationState}
                                />
                                <Digit
                                    number={'6'}
                                    previousDigit={previousDigit}
                                    setDigit={setDigit}
                                    digit={digit}
                                    setPreviousDigit={setPreviousDigit}
                                    operationState={operationState}
                                />
                                <Operation
                                    operation={'+'}
                                    setOperationState={setOperationState}
                                    previousDigit={previousDigit}
                                    operationState={operationState}
                                />
                                <Digit
                                    number={'1'}
                                    previousDigit={previousDigit}
                                    setDigit={setDigit}
                                    digit={digit}
                                    setPreviousDigit={setPreviousDigit}
                                    operationState={operationState}
                                />
                                <Digit
                                    number={'2'}
                                    previousDigit={previousDigit}
                                    setDigit={setDigit}
                                    digit={digit}
                                    setPreviousDigit={setPreviousDigit}
                                    operationState={operationState}
                                />
                                <Digit
                                    number={'3'}
                                    previousDigit={previousDigit}
                                    setDigit={setDigit}
                                    digit={digit}
                                    setPreviousDigit={setPreviousDigit}
                                    operationState={operationState}
                                />
                                <Operation
                                    operation={'-'}
                                    setOperationState={setOperationState}
                                    previousDigit={previousDigit}
                                    operationState={operationState}
                                />
                                <Digit
                                    number={'.'}
                                    previousDigit={previousDigit}
                                    setDigit={setDigit}
                                    digit={digit}
                                    setPreviousDigit={setPreviousDigit}
                                    operationState={operationState}
                                />
                                <Digit
                                    number={'0'}
                                    previousDigit={previousDigit}
                                    setDigit={setDigit}
                                    digit={digit}
                                    setPreviousDigit={setPreviousDigit}
                                    operationState={operationState}
                                />
                                <Operation
                                    operation={'/'}
                                    setOperationState={setOperationState}
                                    previousDigit={previousDigit}
                                    operationState={operationState}
                                />
                                <Operation
                                    operation={'x'}
                                    setOperationState={setOperationState}
                                    previousDigit={previousDigit}
                                    operationState={operationState}
                                />
                                <Actions
                                    action={'reset'}
                                    reset={reset}
                                    calculate={calculate}
                                    deleteDigit={deleteDigit}
                                />
                                <Actions
                                    action={'='}
                                    calculate={calculate}
                                    reset={reset}
                                    deleteDigit={deleteDigit}
                                    digit={digit}
                                />
                            </GridContainer>
                        </div>
                    </div>
                </Container>
            </main>
        </>
    )
}

export default App
