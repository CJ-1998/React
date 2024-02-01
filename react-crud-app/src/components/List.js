import React from "react";
import Item from "./Item";
import "./List.css";
import { MdDelete } from "react-icons/md";

const ExpenseList = ({ expenses, handleDelete, handleEdit, clearItems }) => {
  return (
    <>
      <ul className="list">
        {expenses.map((expense) => {
          return (
            <Item
              key={expense.id}
              expense={expense}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          );
        })}
      </ul>
      <button className="btn" onClick={clearItems}>
        목록 지우기
        <MdDelete className="btn-icon" />
      </button>
    </>
  );
};

export default ExpenseList;