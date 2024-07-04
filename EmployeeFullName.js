function concatenateEmployeeNames() {
    const firstName1 = prompt("Enter first name of Employee 1:");
    const lastName1 = prompt("Enter last name of Employee 1:");
    const emp1 = firstName1 + ' ' + lastName1;

    const firstName2 = prompt("Enter first name of Employee 2:");
    const lastName2 = prompt("Enter last name of Employee 2:");
    const emp2 = firstName2 + ' ' + lastName2;

   const totalEmp = emp1 + ', '+ '\n' + emp2 ;
     
   console.log('Employee Names:', totalEmp);
}

// Call the function to execute
concatenateEmployeeNames();
