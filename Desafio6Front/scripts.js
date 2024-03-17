document.addEventListener('DOMContentLoaded', function () {
    fetch('http://127.0.0.1:5000/employees/')
        .then(response => response.json())
        .then(data => {
            const employeeList = document.getElementById('employee-list');
            data.Employees.forEach(employee => {
                const employeeDiv = document.createElement('div');
                employeeDiv.classList.add('employee');
                employeeDiv.innerHTML = `
                    <p><strong>Nombre:</strong> ${employee['employee_name\t']}</p>
                    <p><strong>Email:</strong> ${employee.employee_email}</p>
                    <p><strong>Fecha de Contratación:</strong> ${new Date(employee.hire_date).toLocaleDateString()}</p>
                    <p><strong>Puesto:</strong> ${employee.job_title}</p>
                    <p><strong>Teléfono:</strong> ${employee.phone}</p>
                `;
                employeeList.appendChild(employeeDiv);
            });
        })
        .catch(error => console.error('Error al obtener los datos de empleados:', error));
});
