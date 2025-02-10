import { useState, useRef } from "react"
import Button from "./Button/Button"

function StateVsRef() {
    const [show, setShow] = useState(false)
    const input = useRef()

    function handleKeyDown(event) {
        if (event.key === "Enter") {
        setShow(true)
        }
    }

    return (
        <div>
            <h1>{input.current?.value}</h1>
            <h3>Input value: {show && input.current.value}</h3>
            <input 
                ref={input}
                type="text" 
                onKeyDown={handleKeyDown}
                className="control" 
            />
        </div>
    )
}

export default function FeedbackSection() {
    const [form, setForm] = useState({
        name: "",
        hasError: false,
        reason: "error",
    })
    // const [name, setName] = useState("")
    // const [hasError, setHasError] = useState(true)
    // const [reason, setReason] = useState("error")

    function handleNameChange(event) {
        // setName(event.target.value)
        // setHasError(event.target.value.trim().length === 0)
        setForm((prev) => ({
            ...prev, 
            name: event.target.value, 
            hasError: event.target.value.trim().length === 0,
        }))
    }

    function toggleError() {
        // setHasError((prev) => !prev)
        // setHasError(!hasError)
    }

    return(
        <section>
            <h2>Обратная связь</h2>

            {/* <Button
            onClick={toggleError}
            >
                Toggle
            </Button> */}

            <form>
                <label htmlFor="name">Имя</label>
                <input 
                    type="text" 
                    id="name" 
                    className="control" 
                    value={form.name} 
                    style={{
                        border: form.hasError ? "1px solid red" : null 
                    }}
                    onChange={handleNameChange}
                />

                <label htmlFor="reason">Причина</label>
                <select 
                    id="reason" 
                    className="control" 
                    value={form.reason} 
                    onChange={(event) => 
                        setForm((prev) => ({...prev, reason: event.target.value}))}
                >
                    <option value="error" >Ошибка</option>
                    <option value="not" >ХЗ</option>
                    <option value="help" >Помоги</option>
                </select>

                <Button 
                    disabled={form.hasError}
                    isActive={!form.hasError}
                >
                    Отправит
                </Button>
            </form>

                <StateVsRef />
        </section>
    )
}