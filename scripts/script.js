function whatCanIDrink(age) {
    let message = "";
    
    if (typeof age == "number") {
        if (age < 0) {
            message = "Sorry. I can’t tell what drink because that age is incorrect!";
        } else if (age < 14) {
            message = "Drink Toddy";
        } else if (age < 18) {
            message = "Drink Coke";
        } else if (age < 21) {
            message = "Drink Beer";
        } else if (age < 130) {
            message = "Drink Whiskey";
        } else {
            message = "Sorry. I can’t tell what drink because that age is incorrect!";
        }
    } else {
        message = "Sorry. I can’t tell what drink because that age is incorrect!";
    }
    
    return message;
}