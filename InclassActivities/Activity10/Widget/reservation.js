$(function() {
	$("#tabs").tabs({
		collapsible: true,
		heightStyle: "content",
		active: 0
	});

	$("#arrival_date").datepicker({
		dateFormat: "mm/dd/yy",
		minDate: 0,
		maxDate: "+90D",
		showOtherMonths: true,
		selectOtherMonths: true
	});

	$("#policies").click(function() {
		$("#dialog").dialog({
			modal: true
		});
	});

	var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
	
	$("#arrival_date").focus();
	
	$("#reservation_form").submit(function(event) {
		var isValid = true;

		function validateField(input, errorMessage) {
			if (input.val().trim() === "") {
				input.next().text(errorMessage);
				isValid = false;
			} else {
				input.next().text("");
			}
		}

		var arrivalDate = $("#arrival_date");
		validateField(arrivalDate, "This field is required.");
		
		var nights = $("#nights");
		validateField(nights, "This field is required.");
		if (isNaN(parseInt(nights.val()))) {
			nights.next().text("This field must be numeric.");
			isValid = false;
		} else {
			nights.next().text("");
		}

		var name = $("#name");
		validateField(name, "This field is required.");

		var email = $("#email");
		validateField(email, "This field is required.");
		if (!emailPattern.test(email.val())) {
			email.next().text("Must be a valid email address.");
			isValid = false;
		} else {
			email.next().text("");
		}

		var phone = $("#phone");
		validateField(phone, "This field is required.");

		if (!isValid) {
			event.preventDefault();
		}
	});
});
