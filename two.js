function bFunction() {
	var first = prompt("Enter your first name: ");
	var last = prompt("Enter your last name: ");
	var birth = prompt("Enter your birth year: ");
	var age = 2025 - birth;
	
	document.getElementById("num2").innerHTML = "Hello " + first + " " + last + "! " +
	"How does it feel to be " + age + " years old?";
}
