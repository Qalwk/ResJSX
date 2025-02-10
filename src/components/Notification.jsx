import "./Notification.css"
import { useEffect, useRef } from "react"
import { createPortal } from "react-dom"
import React from "react"

// Исправляем синтаксис объявления функции с React.memo
export default React.memo(function Notification({ open, text, style }) {
  const dialog = useRef(null)

  useEffect(() => {
    if (open && dialog.current) {
      dialog.current.showModal()
    } else if (dialog.current) {
      dialog.current.close()
    }
  }, [open])

  return createPortal(
    <dialog ref={dialog} className="notification" style={style}>
      <p>{text}</p>
    </dialog>,
    document.getElementById('modal')
  )
})