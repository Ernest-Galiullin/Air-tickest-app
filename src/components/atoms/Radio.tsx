import React from 'react'

type RadioProps = {
  text: string
}
export default function Radio({text}: RadioProps) {
  return (
    <label className="">
      <input type="radio" name="radio" />
      <span className="checkmark"></span>
      {text}
    </label>
  )
}
