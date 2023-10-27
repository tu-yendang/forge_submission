let toDoList = [];

class Task {
  constructor(title, description, dueDate, createDate = new Date(), status = "New") {
    this.title = title.toString();
    this.description = description.toString();
    this.createDate = createDate;
    this.dueDate = dueDate;
    this.status = status;
  }
  editTitle(newTitle) {
    this.title = newTitle.toString();
  }
  editDescription(newDescription) {
    this.description = newDescription.toString();
  }
  editDueDate(newDueDate) {
    this.dueDate = newDueDate;
  }
  editStatus(newStatus) {
    if (newStatus == "New" || newStatus == "Working On" || newStatus == "Finished") {
      this.status = newStatus;
    }
  }
}

const checkIndex = (index) => {
  return index >= 0 && index < toDoList.length;
};

const addTask = (title, description, dueDate) => {
  const newTask = new Task(title, description, dueDate);
  toDoList.push(newTask);
};
  
const deleteTask = (index) => {
  if (checkIndex(index)) {
    toDoList.splice(index, 1);
  }
};
  
//MOVE FUNCTIONS: 
const moveTaskTop = (index) => {
  if (checkIndex(index)) {
    const task = toDoList[index];
    deleteTask(index);
    toDoList.unshift(task);
  }
};

const moveTaskBottom = (index) => {
  if (checkIndex(index)) {
    const task = toDoList[index];
    deleteTask(index);
    toDoList.push(task);
  }
};

const moveTaskOneWrapper = (index) => {
  if (checkIndex(index)) {
    const task = toDoList[index];
    toDoList.splice(index-1, 0, task);
    deleteTask(index + 1);
  }
}

const moveTaskOneUp = (index) => {
  if (index != 0) {
    moveTaskOneWrapper(index);
  }
};

const moveTaskOneDown = (index) => {
  if (index != toDoList.length - 1) {
    moveTaskOneWrapper(index + 1);
  }
};

// Genearlized function for moving tasks.
const moveTask = (index, direction) => {
  if (checkIndex(index)) {
    if (direction == 'up') {
      moveTaskOneUp(index);
    }
    else if (direction == 'down') {
      moveTaskOneDown(index);
    }
    else if (direction == 'top') {
      moveTaskTop(index);
    }
    else if (direction == 'bottom') {
      moveTaskBottom(index);
    }
  }
};
  

// EDIT FUNCTIONS:
// Function to edit information about a task.
const editTask = (index, newTitle, newDescription, newDueDate, newStatus) => {
  if (checkIndex(index)) {
    toDoList[index].editTitle(newTitle);
    toDoList[index].editDescription(newDescription);
    toDoList[index].editDueDate(newDueDate);
    toDoList[index].editStatus(newStatus);
  }
};

// optional functions to edit specific sections of a task
const editTitle = (index, newTitle) => {
  if (checkIndex(index)) {
    toDoList[index].editTitle(newTitle);
  }
};
const editDescription = (index, newDescription) => {
  if (checkIndex(index)) {
    toDoList[index].editDescription(newDescription);
  }
};
const editDueDate = (index, newDueDate) => {
  if (checkIndex(index)) {
    toDoList[index].editDueDate(newDueDate);
  }
};
const editStatus = (index, newStatus) => {
  if (checkIndex(index)) {
    toDoList[index].editStatus(newStatus);
  }
};

// // TESTING:
// addTask("Study for Exam", "Computer Science Exam: Ch. 3-5", "2023-12-14");
// addTask("Clean Room", "Clean desk, vacuum, make bed", "2023-12-10");
// addTask("Meal Prep", "Pasta, chicken, pesto sauce", "2023-11-17");
// console.log('ORIGINAL', toDoList);
// editTask(0, "Study for Test", "CS: Ch. 3-4", "2024-12-11", "Working On");
// editStatus(1, "Finished");
// console.log("EDITED/UPDATED: ", toDoList);
// // original order: study -> clean -> meal
// moveTask(2, 'top'); // after: meal -> study -> clean
// console.log(toDoList);
// moveTask(0, 'bottom'); // after: study -> clean -> meal
// console.log(toDoList);
// moveTask(1, 'up'); // after: clean -> study -> meal
// console.log(toDoList);
// moveTask(1, 'down'); // after: clean -> meal -> study
// console.log(toDoList) 
// moveTask(0, 'up'); // shouldn't change anything
// console.log(toDoList);
// moveTask(2, 'down'); // shouldn't change anything
// console.log(toDoList);
// deleteTask(2); // clean, study
// deleteTask(2); // shouldn't change anything
// console.log("DELETE: ", toDoList);
