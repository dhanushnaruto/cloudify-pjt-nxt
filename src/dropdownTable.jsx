import React, { useState } from 'react';
import Multiselect from 'multiselect-react-dropdown';
import './App.css';

const data = [
  { label: 'Option 1', value: 'option_1' },
  { label: 'Option 2', value: 'option_2' },
  { label: 'Option 3', value: 'option_3' },
  { label: 'Option 4', value: 'option_4' },
];

const DropdownInput = () => {
  const [options] = useState(data);
  const [row, setRow] = useState([0]);
  const [selectedValues, setSelectedValues] = useState([]); 
  console.log(selectedValues)

  const onSelect = (selectedList, index) => {
    if(selectedValues[index]=== undefined){
        setSelectedValues((prev)=>[...prev, selectedList])
    }else{
        setSelectedValues((prev)=>{
            const updated = [...prev]
            updated[index] = selectedList
            return updated;
        })
    }
  };

  const onRemove = (selectedList, index) => {
    setSelectedValues((prev) => {
        const updated = [...prev]
        updated[index] = selectedList
        return updated;
    });
  };

  return (
    <div>
      <table border="1" style={{ width: '80%' }}>
        <thead>
          <tr>
            <th style={{ width: '50%' }}>Label 1</th>
            <th>Label 2</th>
          </tr>
        </thead>
        <tbody>
          {row.map((index) => (
            <tr key={index}>
              <td>
                <Multiselect
                  options={options}
                  displayValue="label"
                  avoidHighlightFirstOption
                  selectionLimit={1}
                  showArrow
                />
              </td>
              <td>
                <Multiselect
                  options={options}
                  displayValue="label"
                  avoidHighlightFirstOption
                  showCheckbox
                  showArrow
                  selectedValues={selectedValues[index] || []}
                  onSelect={(selectedList) =>
                    onSelect(selectedList, index)
                  }
                  onRemove={(selectedList) =>
                    onRemove(selectedList, index)
                  }
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button
          onClick={() => {
            setRow((prev) => [...prev, prev.length]);
            setSelectedValues((prev) => [...prev, []]); 
          }}
        >
          Add Row
        </button>
      </div>
    </div>
  );
};

export default DropdownInput;
