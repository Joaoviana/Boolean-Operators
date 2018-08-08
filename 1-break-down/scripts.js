// Number(String(input).replace("12", ""));

function trace() {
	// read & clean user input
	var s0_type = document.getElementById("s0-type").value;
	var s0_value = document.getElementById("s0-value").value;
	var s0 = cast(s0_type, s0_value);

	var expected_type = document.getElementById("expected-type").value;
	var expected_value = document.getElementById("expected-value").value;
	var expected = cast(expected_type, expected_value);


	// do the logic
	var s1;
	try {
		s1 = String(s0);
	} catch(err) {
		throw(err);
	};

	var s2;
	try {
		s2 = s1.replace("12", "");
	} catch(err) {
		throw(err);
	};

	var sf;
	try {
		sf = Number(s2);
	} catch(err) {
		throw(err);
	};

	// display to user
	var s0_display = document.getElementById("s0");
	s0_display.innerHTML = s0_type + ": " + s0_value;

	var s1_display = document.getElementById("s1");
	s1_display.innerHTML = typeof s1 + ": " + s1;

	var s2_display = document.getElementById("s2");
	s2_display.innerHTML = typeof s2 + ": " + s2;

	var sf_display = document.getElementById("sf");
	sf_display.innerHTML = typeof sf + ": " + sf;

	console.assert(expected === sf, [{expected: expected}, {actual: sf}] );
};

function cast(type, value) {

	if (type == "Number") {
    	return Number(value);

    } else if (type == "String") {
    	return value;

    } else if (type == "Null") {
    	return null;

    } else if (type == "Boolean") {
    	// why is this not quite right?
    	return Boolean(value);
    };
    // functions return undefined by default
};

function clear_table() {
	var s0_display = document.getElementById("s0");
	s0_display.innerHTML = "";

	var s1_display = document.getElementById("s1");
	s1_display.innerHTML = "";

	var s2_display = document.getElementById("s2");
	s2_display.innerHTML = "";

	var sf_display = document.getElementById("sf");
	sf_display.innerHTML = "";
};
