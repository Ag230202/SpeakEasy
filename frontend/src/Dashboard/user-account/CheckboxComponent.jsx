import React, { useState } from 'react';

const speechTherapists = {
  "Neurological Conditions": "Adult SLP",
  "Stuttering": "Fluency Therapist",
  "Voice disorders": "Voice Therapist",
  "Voice Cord Paralysis": "Voice Therapist",
  "Producing speech sounds incorrectly": "Articulation Therapist"
};

function CheckboxComponent() {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [showAlert, setShowAlert] = useState(false);

  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      if (!selectedOptions.includes(value)) {
        setSelectedOptions([...selectedOptions, value]);
      }
    } else {
      setSelectedOptions(selectedOptions.filter((option) => option !== value));
    }
  };

  const handleSubmit = () => {
    setShowAlert(true);
    let therapists = [];
    selectedOptions.forEach(option => {
      therapists.push(speechTherapists[option]);
    });
    let uniqueTherapists = [...new Set(therapists)];
    alert(`You may need to consult with the following therapists: ${uniqueTherapists.join(', ')}`);
  };

  return (
    <div>
      <h4>Mark the appropriate symptoms</h4>
      <input type="checkbox" value="Neurological Conditions" onChange={handleCheckboxChange} />
      <label>Neurological Conditions</label><br />

      <input type="checkbox" value="Stuttering" onChange={handleCheckboxChange} />
      <label>Stuttering </label><br />

      <input type="checkbox" value="Voice disorders" onChange={handleCheckboxChange} />
      <label>Voice disorders</label><br />

      <input type="checkbox" value="Voice Cord Paralysis" onChange={handleCheckboxChange} />
      <label>Vocal Cord Paralysis</label><br />

      <input type="checkbox" value="Producing speech sounds incorrectly" onChange={handleCheckboxChange} />
      <label>Producing speech sounds incorrectly</label><br />

      <button 
        style={{
          backgroundColor: '#4CAF50',
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
        onClick={handleSubmit}
      >
        Submit
      </button>

      <p>Selected options: {selectedOptions.join(', ')}</p>
      {showAlert && <p>Please check the alert box for the therapists you may need to consult.</p>}
    </div>
  );
}

export default CheckboxComponent;