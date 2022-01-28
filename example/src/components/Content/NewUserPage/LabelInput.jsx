
const LabelInput = (props) => {
  return (
    <label>
      <div className={props.style}>{props.name}</div>
      <input onChange={props.onChange} value={props.text} />
    </label>
  )
}

export default LabelInput