function rotateString(s, goal) {
    if (goal.length != s.length) {
        return false;
    }
    goal = goal + goal
    if (goal.includes(s)) {
        return true
    }
    else {
        return false;
    }
}


// CHECK IF "cdeab" ROTATED CAN BE "abcde" AFTER FEW ROTATIONS
console.log(rotateString("abcde", "cdeab"));