/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import cancel from '../../images/cancel.png'
import { useDispatch } from 'react-redux'
import { colorChange, deleted, toggled } from '../../redux/todos/action'
import toggleThunk from '../../redux/todos/thunks/toggleThunk'
import colorChangeThunk from '../../redux/todos/thunks/colorChangeThunk'
import deleteThunk from '../../redux/todos/thunks/deleteThunk'

function Todo({ todo }) {
  const { id, text, isCompleted, color } = todo
  const dispatch = useDispatch()

  // handler function

  // deleteHandler
  const deleteHandler = (todoId) => {
    dispatch(deleteThunk(todoId))
  }

  // toggledHandler
  const toggledHandler = (todoId, currentStatus) => {
    dispatch(toggleThunk(todoId,currentStatus))
  }

  // colorChangHandler
  const colorChangeHandler = (todoId, color) => {
    dispatch(colorChangeThunk(todoId, color))
  }
  return (
    <div>
      <div className="flex justify-between bg-slate-200 border-b border-gray-400/20 py-2">
        <div
          className={`rounded-full  bg-white border-2  w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 ${isCompleted && 'border-green-500 focus-within:border-green-500'
            }`}
        >
          <input
            type="checkbox"
            checked={isCompleted}
            onChange={() => toggledHandler(id,isCompleted)}
            className="opacity-0 absolute rounded-full"
          />
          {isCompleted && (
            <svg
              className=" fill-current w-3 h-3 text-green-500 pointer-events-none"
              viewBox="0 0 20 20"
            >
              <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
            </svg>
          )}
        </div>

        <p className={`${isCompleted && 'line-through'}`}>{text}</p>
        <div className="flex items-center justify-end">
          <div
            onClick={() => colorChangeHandler(id, 'green')}
            className={` rounded-full bg-white border-2 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 ${color === 'green' && 'bg-green-500'
              } border-green-500 hover:bg-green-500 transition-colors`}
          ></div>

          <div
            className={` rounded-full bg-white border-2 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 ${color === 'yellow' && 'bg-amber-500'
              } border-amber-400 hover:bg-amber-500 transition-colors`}
            onClick={() => colorChangeHandler(id, 'yellow')}
          ></div>
          <div
            className={` rounded-full bg-white border-2 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 ${color === 'red' && 'bg-red-600'
              } border-red-500 hover:bg-red-500 transition-colors`}
            onClick={() => colorChangeHandler(id, 'red')}
          ></div>

          <button
            onClick={() => deleteHandler(id)}
            className={`w-30 h-wed rounded-full`}
          >
            <img width={`30px`} className="p-1" src={cancel} alt="" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Todo
