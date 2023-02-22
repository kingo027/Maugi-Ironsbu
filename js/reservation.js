$(document).ready(function() {
    $("#first_name").focus();

    $("#contect").validate({
        rules: {
            first_name: {
                required: true
            },
            last_name: {
                required: true
                
            },
	    Email: {
                required: true,
                email: true
	    },
            dob: {
                required: true,
		date: true
            },
            children: {
                required: true
            },
            customRadioInline1: {
                required: true
            },
            phone: {
                required: true,
                minlength:10,
                digits: true
            }
        },
        messages: {
            nights: {
                required: "Please enter number of nights.",
                digits: "This is not a valid entry. Enter digits only."
            }
        }
    })
}); // end ready
