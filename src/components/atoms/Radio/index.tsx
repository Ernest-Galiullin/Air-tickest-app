import './style.scss'
type RadioProps = {
  text: string
}
export default function Radio({text}: RadioProps) {
  return (
    <label className="radio-label">
      <input className="radio-input" type="radio" name="radio" />
      <span className="radio-checkmark"></span>
      {text}
    </label>
  )
}
