document.addEventListener("DOMContentLoaded", function() {
    var studentCountElement = document.getElementById("studentCount");

    // Update student count initially
    updateStudentCount();

    function updateStudentCount() {
        var rowCount = document.querySelectorAll("#studentTable tbody tr").length;
        studentCountElement.textContent = "Number of Students: " + rowCount;
    }
});