/* eslint-disable testing-library/prefer-screen-queries */
import { render, fireEvent } from '@testing-library/react'
import { Todo } from './Todo'

describe('Todo', () => {
  const todo = {
    text: 'Test Todo',
    done: false
  }

  const completeTodo = (todo) => {
    todo.done = true
  }

  const deleteTodo = (todo) => {
    todo =  null
  }

  it('renders the correct text and buttons for a not done todo', () => {
    const { getByText } = render(<Todo todo={todo} completeTodo={completeTodo} deleteTodo={deleteTodo} />)
    getByText(todo.text)
    getByText('This todo is not done')
    getByText('Delete')
    getByText('Set as done')
  })

  it('calls the correct function when set as done button is clicked', () => {
    const { getByText } = render(<Todo todo={todo} completeTodo={completeTodo} deleteTodo={deleteTodo} />)
    fireEvent.click(getByText('Set as done'))
    expect(todo.done).toBe(true)
  })

  it('renders the correct text and buttons for a done todo', () => {
    todo.done = true
    const { getByText } = render(<Todo todo={todo} completeTodo={completeTodo} deleteTodo={deleteTodo} />)
    getByText(todo.text)
    getByText('This todo is done')
    getByText('Delete')
  })

  it('calls the correct function when delete button is clicked', () => {
    const { getByText } = render(<Todo todo={todo} completeTodo={completeTodo} deleteTodo={deleteTodo} />)  
    const button = getByText('Delete')
    fireEvent.click(button)
  })
})