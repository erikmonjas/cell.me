import React from 'react'

const RadioGroup = ({
  className,
  radios,
  active,
  onClick
}) => {
  return radios.map(({ text, value}) => (
    <button
      key={value}
      className={`${className} ${active === value ? `${className}--active` : ''}`}
      role="radio"
      onClick={() => onClick(value)}
    >
      <span className="radio-button" />
      <span className="radio-text">{text}</span>
    </button>
  ))
}

export default RadioGroup
