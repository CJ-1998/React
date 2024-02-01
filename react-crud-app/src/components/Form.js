import React from "react";
import "./Form.css";
import { MdSend } from "react-icons/md";

const ExpenseForm = ({
  edit,
  charge,
  amount,
  handleCharge,
  handleAmount,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-center">
        <div className="form-group">
          <label htmlFor="charge">지출 항목</label>
          <input
            type="text"
            id="charge"
            name="charge"
            placeholder="예) 렌트비"
            value={charge}
            onChange={handleCharge}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">비용</label>
          <input
            type="number"
            id="amount"
            name="amount"
            placeholder="예) 100"
            value={amount}
            onChange={handleAmount}
            className="form-control"
          />
        </div>
      </div>
      <button type="submit" className="btn">
        {edit ? "수정" : "제출"}
        <MdSend className="btn-icon" />
      </button>
    </form>
  );
};

export default ExpenseForm;