import React from "react";

function TableForm({ submitHandle, changeHandle, form, cancelLink }) {
  return (
    <form onSubmit={submitHandle}>
      <div>
        <label htmlFor="table_name" className="form-label">
          Table Name
        </label>
        <br />
        <input
          id="table_name"
          className="form-control"
          type="text"
          placeholder="Table Name"
          name="table_name"
          onChange={changeHandle}
          value={form.table_name}
          required
        />
      </div>
      <div>
        <label htmlFor="capacity" className="form-label">
          Table Capacity
        </label>
        <br />
        <input
          id="capacity"
          className="form-control"
          type="number"
          min={1}
          placeholder={1}
          name="capacity"
          onChange={changeHandle}
          value={form.capacity}
          required
        />
      </div>
      <button onClick={cancelLink} className="btn btn-secondary">
        Cancel
      </button>
      <button type="submit" className="btn btn-primary m-3">
        Submit
      </button>
    </form>
  );
}

export default TableForm;
