import {Fragment} from 'react';

function SelectInput({label, id, values, 
                    currentValue, setCurrentValue}) {
    const selectOptions = values.map((value)=>
        <option value={value[1]} key={value[0].toString()}>{value[0]}</option>
    );

    return (
        <Fragment>
            <label htmlFor={id} className="col fw-bold form-label">{label}</label>
            <select id={id}
                defaultValue={currentValue}
                onChange={(e) => setCurrentValue(e.target.value)}
                    className="col form-select">
                {selectOptions}
            </select><br />

        </Fragment>
    )
}
export default SelectInput;