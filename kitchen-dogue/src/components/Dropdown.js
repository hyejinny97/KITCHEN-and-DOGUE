function Dropdown({ name, data, curValue }) {
  const renderOptions = data.map(option => {
    return <option key={option.label} value={option.value} >{option.label}</option>
  });

  return (
    <select name={name} defaultValue={curValue || ''}>
      {renderOptions}
    </select>
  )
}

export default Dropdown;