function imperialUnits([inches]) {
    inches = Number(inches);
    let feet = Number(inches/12);
    inches = inches % 12;

    let result = feet + "'-" + inches + "\"";
    console.log(result);
}

imperialUnits([36])