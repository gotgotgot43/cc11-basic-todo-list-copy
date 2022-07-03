import RadioButton from '../UI/RadioButton';

function FilterStatus(props) {
    return (
        <div className="btn-group ms-3 shadow">
            <RadioButton name="status" id="all" color="outline-dark">
                <i className="fa-solid fa-list"></i>
            </RadioButton>
            <RadioButton name="status" id="complete" color="outline-dark">
                <i className="fa-solid fa-clipboard-check"></i>
            </RadioButton>
            <RadioButton name="status" id="pending" color="outline-dark">
                <i className="fa-regular fa-clipboard"></i>
            </RadioButton>
        </div>
    );
}

export default FilterStatus;
