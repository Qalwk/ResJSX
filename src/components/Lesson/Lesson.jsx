import { useEffect, useState, useCallback, useRef, useMemo } from "react"
import Button from "../Button/Button"
import Notification from "../Notification"


export default function Lesson() {

  const [ageValue, setAgeValue] = useState(null)
  const [notification, setNotification] = useState(false)
  const [reservation, setReservation] = useState(false)
  const [disabled, setDisabled] = useState(true)  
  const [time, setTime] = useState(null)
  const [loading, setLoading] = useState(false)
  const [clients, setClients] = useState([])

  const timerRef = useRef(null);

  const clientList = useMemo(() => {
    return clients.map((client) => (
      <li key={client.id}>{client.name}</li>
    ));
  }, [clients]); // Пересоздаем только когда меняется clients

  timerRef.current = setTimeout(() => {
    setNotification(false);
    setReservation(false);
  }, 3000);

  const fetchClients = useCallback(async () => {
      setLoading(true)
      const response = await fetch("https://jsonplaceholder.typicode.com/users")
      const clients = await response.json()
      setClients(clients)
      setLoading(false)
  }, [])

  useEffect(() => {
    fetchClients()
  }, [fetchClients])

  useEffect(() => {
    if (notification || reservation) {
      timerRef.current = setTimeout(() => {
        setNotification(false);
        setReservation(false);
      }, 3000);
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [notification, reservation]);
  

  return (
    <section>
      {ageValue === null &&
      <>
        <div id="question">
            <h3>Тебе есть 18 лет?</h3>
            
            <Button onClick={() => setAgeValue(true)}>Да</Button>
            <Button onClick={() => setAgeValue(false)}>Нет</Button>
        </div>
      </>
      }

      {ageValue === true && 
      <div className="Bar__section">
        <h3>Добро пожаловать в наш бар!</h3>
        <p>Тебе есть 18 лет!</p>

        <p>Выбирете свободное время для посещения бара!</p>

        <Notification open={notification} text={"Это время забронировано"} />
        <Notification style={{backgroundColor:"green"}} open={reservation} text={`Вы успешно забронировали посещение на ${time}:00`} />

        <div>
          <Button onClick={() => {
            setNotification(false)
            setDisabled(false)
            setTime(17)
          }}
          style={
            time === 17
              ? { backgroundColor: "green", color: "white" }
              : {}
          }
          >
            17:00
          </Button>
          <Button onClick={() => setNotification(true)} style={{backgroundColor:"brown", color:"white"}}>18:00</Button>
          <Button onClick={() => {
            setNotification(false)
            setDisabled(false)
            setTime(19)
          }}
          style={
            time === 19
              ? { backgroundColor: "green", color: "white" }
              : {}
          }
          >
            19:00
          </Button>
          <Button onClick={() => {
            setNotification(false)
            setDisabled(false)
            setTime(20)
          }}
          style={
            time === 20
              ? { backgroundColor: "green", color: "white" }
              : {}
          }
          >
            20:00
          </Button>
        </div>
        
        <div style={{marginTop:"1rem"}}>
          <Button disabled={disabled} onClick={() => setReservation(true)}>Забронировать</Button>
        </div>
        {loading && <p>Загрузка...</p>}
        {!loading &&
        <div style={{marginTop:"3rem"}}>
          <h3>Пользователи в сети:</h3>
          <ul style={{fontSize:"14px"}}>
            {clientList}
          </ul>
        </div>
        }
      </div>
      }
      {ageValue === false && <p>Тебе еще нет 18 лет!</p>}
    </section>
  )
}