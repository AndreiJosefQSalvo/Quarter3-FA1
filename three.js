function cFunction(){
	var nn = "Andrei", hin = 67, wkg = 60;
	var hf = hin / 12, hin2 = hin % 12, wlbs = wkg*2.20462;
	
	if(confirm("Do you agree to share your information with this site?")) {
		console.log("Name: " + nn);
		console.log("Height: " + parseInt(hf) + "\'" + hin2 + "\"");
		console.log("Weight: " + wlbs + " lbs");
	} else {
		console.log("User does not wish to share his/her information.");
	}
}
