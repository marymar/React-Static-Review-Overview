import React from 'react'
import { getSiteProps } from 'react-static'
import Task from './Task';

export default getSiteProps(({ section }) => (
  <div className="section">
    <div className="section__title">{section.title}</div>
    <div className="section__tasks">
      <ul className="tasks">
        {section.tasks.map((task, i) => {
          return (
            <li className="tasks__item" key={`task-${i}`}>
              <Task task={task} />
            </li>
          )}
        )}
      </ul>
    </div>
  </div>
))
