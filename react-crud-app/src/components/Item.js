import React from "react";
import "./Item.css";
import { MdEdit, MdDelete } from "react-icons/md";

const ExpenseItem = ({ expense, handleDelete, handleEdit }) => {
  return (
    <li className="item">
      <div className="info">
        <span className="expense">{expense.charge}</span>
        <span className="amount">{expense.amount}원</span>
      </div>
      <div>
        <button onClick={() => handleEdit(expense.id)} className="edit-btn">
          <MdEdit />
        </button>
        <button onClick={() => handleDelete(expense.id)} className="clear-btn">
          <MdDelete />
        </button>
      </div>
    </li>
  );
};

export default ExpenseItem;