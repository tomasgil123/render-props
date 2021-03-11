import React from 'react'
type InputProps = JSX.IntrinsicElements['input'] & {
  placeholder: string
}

const Input: React.FC<InputProps> = ({ placeholder, onChange, value }) => {
  return (
    <div className="relative z-20 max-w-xs">
      <input
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        className="py-2 px-3 w-full rounded outline-none h-10 bg-gray-200 border-solid border border-gray-400"
      />
      <div className="absolute top-0 right-0 m-2 flex bg-gray-200">
        <img src="/static/img/magnifying-glass.svg" alt="magnifying-glass" />
      </div>
    </div>
  )
}

export default Input
