import React from 'react'
import PropTypes from 'prop-types'

const RadioGroup = ({
  className,
  radios,
  active,
  onClick
}) => {
  return (
    <div className={className} role="radiogroup">
      {radios.map(({ text, value}) => (
        <button
          key={value}
          className={`radio ${active === value ? 'radio--active' : ''}`}
          role="radio"
          onClick={() => onClick(value)}
          data-testid={`radio-${value}`}
          aria-checked={active === value}
        >
          <span className="radio-button" />
          <span className="radio-text">{text}</span>
        </button>
      ))}
    </div>
  )
}

export default RadioGroup

RadioGroup.propTypes = {
  className: PropTypes.string.isRequired,
  active: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  onClick: PropTypes.func.isRequired,
  radios: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  })).isRequired,
}
