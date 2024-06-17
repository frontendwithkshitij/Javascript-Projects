// document.addEventListener('DOMContentLoaded', function (event) {
    
//     const taskInput = document.getElementById('taskInput');
//     const spanPlaceholder = document.querySelector('.inputBox span');
//     const filterSpan = document.getElementById('filterSpan');
//     const filterTasks = document.getElementById('filterTasks');
//     const form = document.getElementById('task-form');



//     loadEventListeners();

//     function loadEventListeners() {
//         taskInput.addEventListener('focus', (event) => {
//             spanPlaceholder.style.transform = "translateY(-30px)";
//         });

//         taskInput.addEventListener('blur', () => {
//             if (taskInput.value === '') {
//                 spanPlaceholder.style.transform = "translateY(0)";
//             }
//             spanPlaceholder.style.fontSize = "12px";
//             spanPlaceholder.style.color = "#7b7fd5";
//         });

//         taskInput.addEventListener('input', () => {
//             if (taskInput.value === '') {
//                 spanPlaceholder.style.transform = "translateY(0)";
//                 spanPlaceholder.style.fontSize = "12px";
//                 spanPlaceholder.style.color = "#7b7fd5";
//             } else {
//                 spanPlaceholder.style.transform = "translateY(-30px)";
//             }
//         });

//         filterTasks.addEventListener('focus', () => {
//             filterSpan.style.transform = "translateY(-30px)";
//         });

//         filterTasks.addEventListener('blur', () => {
//             if (filterTasks.value === '') {
//                 filterSpan.style.transform = "translateY(0)";
//             }
//             filterSpan.style.fontSize = "12px";
//             filterSpan.style.color = "#7b7fd5";
//         });

//         filterTasks.addEventListener('input', () => {
//             if (filterTasks.value === '') {
//                 filterSpan.style.transform = "translateY(0)";
//                 filterSpan.style.fontSize = "12px";
//                 filterSpan.style.color = "#7b7fd5";
//             } else {
//                 filterSpan.style.transform = "translateY(-30px)";
//             }
//         });
//     }
// });
