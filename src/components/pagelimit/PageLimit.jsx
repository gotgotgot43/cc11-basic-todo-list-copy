function PageLimit() {
    return (
        <div className="d-flex mt-3 align-items-center ">
            <small className="text-muted">Show: </small>
            <select className="form-select sm ms-2" name="" id="" style={{ width: '5rem' }}>
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
            </select>
        </div>
    );
}

export default PageLimit;
