console.log(y); // ReferenceError: Cannot access 'y' before initialization

var x = 10; // x bernilai 10
{
    let x = 2; //x bernilai 2
    
    let x = 20; // Error: Cannot redeclare block-scoped variable 'x'.
}
//x di sini bernilai 10