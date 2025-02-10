import Button from "./Button/Button"
import { useState } from "react"
import { differences } from "../data"

export default function PrimeSection() {
    const [contentType, setContentType] = useState(null)
    
    function handleClick(type) {
        setContentType(type)
    }

    return (
    <section>
        <h3>Чем отличаемся</h3>
            <Button onClick={() => handleClick('way')} isActive={contentType == 'way'}>Подход</Button>
            <Button onClick={() => handleClick('easy')} isActive={contentType == 'easy'}>Доступность</Button>
            <Button onClick={() => handleClick('program')} isActive={contentType == 'program'}>Концентрация</Button>
        {contentType ? (
            <p>{differences[contentType]}</p>
        ) : (
            <p>Нажми на кнопку</p>
        )}
    </section>
    )
}