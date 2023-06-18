import { useSearchParams } from 'react-router-dom';

function Dropdown({ data }) {
  let [searchParams, setSearchParams] = useSearchParams();

  const handleChange = function (e) {
    console.log(e.target.value)
    setSearchParams({ data[0].searchParamKey: e.target.value })
  }

  const renderOptions = data.map(option => {
    return <option key={option.label} value={option.searchParamValue}>{option.label}</option>
  });

  return <select name='select' onChange={handleChange}>
    {renderOptions}
  </select>
}

export default Dropdown;