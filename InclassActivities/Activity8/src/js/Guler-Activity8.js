$(document).ready(function () {
  // Auto Completion
  var programmingLanguages = [
    "JavaScript",
    "Python",
    "Java",
    "C++",
    "Ruby",
    "Swift",
    "PHP",
    "C#",
    "Go",
    "TypeScript",
    "Rust",
    "Kotlin",
    "Perl",
    "HTML",
    "CSS",
    "Scala",
    "Objective-C",
    "Shell",
    "Lua",
    "MATLAB",
  ];

  $("#programmingLanguage").autocomplete({
    source: programmingLanguages,
  });

  // Datepicker
  $("#birthday").datepicker({
    dateFormat: "dd/mm/yy", //Turkish standarts.
    changeYear: true,
    yearRange: "-100:+0",
  });

  // Form validation
  $("#myForm").on("submit", function (event) {
    if (!this.checkValidity()) {
      event.preventDefault();
      // Error
      alert("Please fill in all required fields.");
    } else {
      alert("Form submitted succesfully.");
    }
  });
});
