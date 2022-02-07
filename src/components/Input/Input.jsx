import { useEffect } from "react"

const Input = ({ text, validationStyle, style, onChange, name, isEmpty }) => {
  // если меньше одного символа, то мы присваиваем инпуту данный класс
  let validationClass = !(/^\w{3,}|\d{3,}|[а-яА-Я]{3,}/gi).test(text) ? validationStyle : null

  // если валидация прошла, то изменить флаг на true
  useEffect(() => {
    validationClass ? isEmpty(false) : isEmpty(true)
  })

  return (
    <label>
      <div className={style}>{name}</div>
      <input onChange={onChange} value={text} className={validationClass} />
    </label>
  )
}

export default Input