function getDOB() {
    // Get the values from the input fields
    const dobInput = document.getElementById('inputDob').value;
    const currentDateInput = document.getElementById('cdate').value;

    // Validate if both dates are provided
    // arreglar para que ingrese 2 valores correctos, como esta ahora solo valida que la fecha actual no sea cero
    if (!dobInput || !currentDateInput) {
        alert('Please enter both Date of Birth and Current Date.');
        return;
    }

    // Convert input values to Date objects
    const dob = new Date(dobInput);
    const currentDate = new Date(currentDateInput);

    // Calculate age
    let age = currentDate.getFullYear() - dob.getFullYear();
    const monthDifference = currentDate.getMonth() - dob.getMonth();

    // Adjust age if the birthday hasn't occurred yet this year
    if (monthDifference < 0 || (monthDifference === 0 && currentDate.getDate() < dob.getDate())) {
        age--;
    }

    // Display the result
    document.getElementById('currentAge').textContent = `Your age is ${age} years old`;
}

// ARREGLAR
// PONER LA FECHA ACTUAL PARA CALCULAR
// DETALLAR LOS AÑOS, MESES Y DÍAS.

