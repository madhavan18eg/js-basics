function calculateResult(marks) {
    if (marks < 0 || marks > 100) {
        return "Invalid marks";
    }
    if (marks >= 75) {
        return "A";
    } else if (marks >= 60) {
        return "B";
    }  else if (marks >= 50) {
        return "C";
    }
        else if (marks >= 35) {         
        return "pass";              
    } else {
        return "fail";
    }
}

module.exports = {
    calculateResult
};
