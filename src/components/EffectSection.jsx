import { useEffect, useState, useCallback, useInput } from "react"
import Button from "./Button/Button"
import Modal from "./Modal/Modal"

export default function EffectSection() {
    const input = useInput()
    const [modal, setModal] = useState(false)
    const [loading, setLoading] = useState(false)
    const [users, setUsers] = useState([])

    const fetchUsers = useCallback(async () => {
        setLoading(true)
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const users = await response.json()
        setUsers(users)
        setLoading(false)
    }, [])

    ///////////////////////////IUBAEVFYIUBAEBIUFVIUEAUIFIUEUBIFIOUFEOIOIDEOINNOFIE

    function useInput(initialValue = "") {
        const [value, setValue] = useState(initialValue);
        const onChange = (event) => setValue(event.target.value);
        return { value, onChange };
    }

    ///////////////////////////IUBAEVFYIUBAEBIUFVIUEAUIFIUEUBIFIOUFEOIOIDEOINNOFIE

    useEffect(() => {
        fetchUsers()
    }, [fetchUsers])

    return (
        <section>
            <h3>Effects</h3>
            
            <Button onClick={() => setModal(true)}>Открыть инфо</Button>

            <Modal open={modal}>
                <h3>Modal Hello</h3>
                <p>Lorem</p>
                <Button onClick={() => setModal(false)} >Закрыть</Button>
            </Modal>

            {loading && <p>Загрузка...</p>}
            {!loading && (
                <>
                    <input type="text" className="control" {...input} />
                    <ul>
                        {users
                            .filter((user) => 
                                user.name.toLowerCase().includes(input.value.toLowerCase())
                            ).map((user) => (
                                <li key={user.id}>{user.name}</li>
                            ))}
                    </ul>
                </>
            )}
        </section>
    )
}