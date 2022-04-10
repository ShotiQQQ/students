document.addEventListener('DOMContentLoaded', () => {
  let students = [
    {name: 'Денис', surname: 'Гордиевский', secondname: 'Артемович', dateOfBirth: new Date(1999, 8, 6), dateOfStart: new Date(2019, 9, 6), faculty: 'Информационные системы'},
    {name: 'Анастасия', surname: 'Лоншакова', secondname: 'Андреевна', dateOfBirth: new Date(2000, 5, 12), dateOfStart: new Date(2010, 9, 6), faculty: 'Философия'},
    {name: 'Дмитрий', surname: 'Яковец', secondname: 'Сергеевич', dateOfBirth: new Date(1488, 2, 13), dateOfStart: new Date(2020, 9, 6), faculty: 'Информатика'},
    {name: 'Дмитрий', surname: 'Ядовец', secondname: 'Сергеевич', dateOfBirth: new Date(1488, 2, 13), dateOfStart: new Date(2020, 9, 6), faculty: 'Литература'},
  ]

  function getSort() {
    document.body.querySelector('thead').addEventListener('click', (e) => {

          if (e.target.textContent == 'ФИО') {
            let sortedStudents = students.sort((a, b) => a.surname + a.name + a.secondname > b.surname + b.name + b.secondname ? 1 : -1);
            document.querySelector('table').remove();
            getTable(sortedStudents);
            getSort();
          }

          if (e.target.textContent == 'Факультет') {
            let sortedStudents = students.sort((a, b) => a.faculty > b.faculty ? 1 : -1);
            document.querySelector('table').remove();
            getTable(sortedStudents);
            getSort();
          }

          if (e.target.textContent == 'Дата рождения') {
            let sortedStudents = students.sort((a, b) => a.dateOfBirth > b.dateOfBirth ? 1 : -1);
            document.querySelector('table').remove();
            getTable(sortedStudents);
            getSort();
          }

          if (e.target.textContent == 'Годы обучения') {
            let sortedStudents = students.sort((a, b) => a.dateOfStart > b.dateOfStart ? 1 : -1);
            document.querySelector('table').remove();
            getTable(sortedStudents);
            getSort();
          }
  })
}

  function getFilter() {
    const filter = document.createElement('div');
    const span = document.createElement('span');
    const filterInputs = [
      document.createElement('input'),
      document.createElement('input'),
      document.createElement('input'),
      document.createElement('input'),
    ];
    const filterBtn = document.createElement('button');

    span.textContent = 'Фильтр:'

    filter.classList.add('filter');

    filterBtn.classList.add('btn');
    filterBtn.classList.add('btn-info');
    filterBtn.textContent = 'Отфильтровать';

    document.body.append(filter);
    filter.append(span);

    filterInputs[0].placeholder = 'ФИО';
    filterInputs[1].placeholder = 'Факультет';
    filterInputs[2].placeholder = 'Год начала обучения';
    filterInputs[3].placeholder = 'Год окончания обучения';


    for (inputs in filterInputs) {
      filter.append(filterInputs[inputs]);
    }

    filter.append(filterBtn);

    filter.querySelector('.btn').addEventListener('click', () => {

      if (filterInputs[0].value || filterInputs[1].value || filterInputs[2].value || filterInputs[3].value) {
        if (filterInputs[0].value) {
          document.querySelector('table').remove();
          let filteringStudents = students.filter(student => student.name.toLowerCase().trim().includes(filterInputs[0].value) || student.surname.toLowerCase().trim().includes(filterInputs[0].value) || student.secondname.toLowerCase().trim().includes(filterInputs[0].value));
          console.log(filteringStudents)
          getTable(filteringStudents);
        }

        if (filterInputs[1].value) {
          document.querySelector('table').remove();
          let filteringStudents = students.filter(student => student.faculty.toLowerCase().trim().includes(filterInputs[1].value.toLowerCase().trim()))
          console.log(filteringStudents)
          getTable(filteringStudents);
        }

        if (filterInputs[2].value) {
          document.querySelector('table').remove();
          let filteringStudents = students.filter(student => student.dateOfStart.getFullYear().toString().includes(filterInputs[2].value.trim()))
          console.log(filteringStudents)
          getTable(filteringStudents);
        }

        if (filterInputs[3].value) {
          document.querySelector('table').remove();
          let filteringStudents = students.filter(student => student.dateOfBi.getFullYear().toString().includes(filterInputs[3].value.trim()))
          console.log(filteringStudents)
          getTable(filteringStudents);
        }

      } else {
        document.querySelector('table').remove();
        getTable(students);
      }
    })
  }

  getFilter();

  function getTable(students) {
    const table = document.createElement('table');
    table.classList.add('table', 'table-dark', 'table-hover');
    let filter = document.querySelector('.filter');
    filter.after(table);

    const thead = document.createElement('thead');
    table.append(thead);

    const theadRow = document.createElement('tr');
    thead.append(theadRow);

    let listColumns = [
      document.createElement('th'),
      document.createElement('th'),
      document.createElement('th'),
      document.createElement('th'),
      document.createElement('th'),
    ];

    listColumns[0].textContent = '№';
    listColumns[1].textContent = 'ФИО';
    listColumns[2].textContent = 'Факультет';
    listColumns[3].textContent = 'Дата рождения';
    listColumns[4].textContent = 'Годы обучения';

    listColumns[1].classList.add('sort');
    listColumns[2].classList.add('sort');
    listColumns[3].classList.add('sort');
    listColumns[4].classList.add('sort');

    listColumns[0].scope = 'col';
    listColumns[1].scope = 'col';
    listColumns[2].scope = 'col';
    listColumns[3].scope = 'col';
    listColumns[4].scope = 'col';

    theadRow.append(listColumns[0], listColumns[1], listColumns[2], listColumns[3], listColumns[4]);

    const tbody = document.createElement('tbody');
    table.append(tbody);

    students.forEach((student, index) => {
      let tr = document.createElement('tr');
      tbody.append(tr);

      let date = new Date().getFullYear();

      let differnceBirth = date - student.dateOfBirth.getFullYear();

      let dayOfBirth = student.dateOfBirth.getDate();
      let monthOfBirth = student.dateOfBirth.getMonth();
      let yearOfBirth = student.dateOfBirth.getFullYear();

      let yearOfStart = student.dateOfStart.getFullYear();

      let listColumns = [
        document.createElement('th'),
        document.createElement('th'),
        document.createElement('th'),
        document.createElement('th'),
        document.createElement('th'),
      ]

      listColumns[0].textContent = index + 1;
      listColumns[1].textContent = student.surname + '\t' + student.name + '\t' + student.secondname;
      listColumns[2].textContent = student.faculty;
      listColumns[3].textContent = `${dayOfBirth}.${monthOfBirth + 1}.${yearOfBirth}` + '\t' + `(${differnceBirth - 1})`;
      if ((yearOfStart + 4) >= date) {
        listColumns[4].textContent = `${yearOfStart}-${yearOfStart + 4}`;
      } else {
        listColumns[4].textContent = `${yearOfStart}-${yearOfStart + 4}(Закончил)`;
      }

      tr.append(listColumns[0], listColumns[1], listColumns[2], listColumns[3], listColumns[4]);

    })
  }

  getTable(students);

  getSort();

  function addStudent() {
    const form = document.createElement('form');
    const name = document.createElement('input');
    const surname = document.createElement('input');
    const secondname = document.createElement('input');
    const faculty = document.createElement('input');
    const dateOfBirth = document.createElement('input');
    const dateOfStart = document.createElement('input');
    const button = document.createElement('button');
    const labels = [
      document.createElement('label'),
      document.createElement('label'),
      document.createElement('label'),
      document.createElement('label'),
      document.createElement('label'),
      document.createElement('label'),
    ];

    labels[0].textContent = 'Имя';
    labels[0].setAttribute('for', `name`);
    labels[1].textContent = 'Фамилия';
    labels[1].setAttribute('for', `surname`);
    labels[2].textContent = 'Отчество';
    labels[2].setAttribute('for', `secondname`);
    labels[3].textContent = 'Факультет';
    labels[3].setAttribute('for', `faculty`);
    labels[4].textContent = 'Дата рождения';
    labels[4].setAttribute('for', `dateOfBirth`);
    labels[5].textContent = 'Дата начала обучения';
    labels[5].setAttribute('for', `dateOfStart`);

    name.id = 'name';
    surname.id = 'surname';
    secondname.id = 'secondname';
    faculty.id = 'faculty';
    dateOfBirth.id = 'dateOfBirth';
    dateOfStart.id = 'dateOfStart';
    button.id = 'add';

    name.placeholder = 'Введите имя';
    surname.placeholder = 'Введите фамилию';
    secondname.placeholder = 'Введите отчество';
    faculty.placeholder = 'Введите факультет';

    dateOfBirth.type = 'date';
    dateOfStart.type = 'date';

    dateOfBirth.min = '1900-01-01';
    dateOfStart.min = '2000-01-01';

    button.textContent = 'Добавить студента';
    button.classList.add('btn', 'btn-success');

    document.body.append(form);
    form.append(labels[0], name, labels[1], surname, labels[2],  secondname, labels[3], faculty, labels[4], dateOfBirth, labels[5], dateOfStart, button);

    add.addEventListener('click', (e) => {
      e.preventDefault();

      let inputs = form.querySelectorAll('input');

      for (input of inputs) {
        if (!input.value || (input.value.trim()) == '') {
          input.value = '';
          for (label of labels) {
            if (input.id == label.getAttribute('for')) {
              alert(`Вы не заполнили поле ${label.textContent}`);
              break
            }
          }
          break
        }
      }

      for (input of inputs) {
        if (input.type !== 'date') {
          for (let i = 0; i < 10; i++) {
            if (input.value.includes(`${i}`)) {
              for (label of labels) {
                if (input.id == label.getAttribute('for')) {
                  alert(`Вы ввели числовое значение в поле ${label.textContent}. Пожалуйста, попробуйте снова`);
                  input.value = '';
                }
              }
            }
          }
        }
      }

      if (name.value && surname.value && secondname.value && faculty.value && dateOfBirth.value && dateOfStart.value) {
        students.push({name: name.value, surname: surname.value, secondname: secondname.value, faculty: faculty.value, dateOfBirth: dateOfBirth.valueAsDate, dateOfStart: dateOfStart.valueAsDate});
        deleteAll();
        getFilter();
        getTable(students);
        addStudent();
      }
    })
  }

  addStudent();

  function deleteAll() {
    while (document.body.lastChild) {
      document.body.lastChild.remove();
    }
  }
})
