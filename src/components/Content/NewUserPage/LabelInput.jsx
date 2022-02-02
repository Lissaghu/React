const LabelInput = ({ text, validationStyle, style, onChange, name }) => {
  // если меньше одного символа, то мы присваиваем инпуту данный класс
  let validationClass = !(/\w+|\d+|[а-яА-Я]+/gi).test(text) ? validationStyle : null

  return (
    <label>
      <div className={style}>{name}</div>
      <input onChange={onChange} value={text} className={validationClass} />
    </label>
  )
}

export default LabelInput