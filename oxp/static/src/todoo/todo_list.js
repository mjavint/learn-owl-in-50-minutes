/** @odoo-module **/

import { Component, useState, onMounted, useRef } from "@odoo/owl";
import { TodoItem } from "./todo_item";

export class TodoList extends Component {
  static template = "oxp.TodoList";
  static components = { TodoItem };

  setup() {
    this.nextId = 4;
    this.todos = useState([
      { id: 2, description: "write tutorial", isCompleted: true },
      { id: 3, description: "buy milk", isCompleted: false },
    ]);
    const ref = useRef("input");
    onMounted(() => {
      ref.el.focus();
    });
  }

  addTodo(ev) {
    if (ev.keyCode === 13 && ev.target.value != "") {
      this.todos.push({
        id: this.nextId++,
        description: ev.target.value,
        isCompleted: false,
      });
      ev.target.value = "";
    }
  }
}
