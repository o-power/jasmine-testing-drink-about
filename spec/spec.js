describe("whatCanIDrink tests", function() {
   it("should say sorry when age is less than 0", function() {
       expect(whatCanIDrink(-1)).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
   });
   it("should say drink toddy when age is less than 14", function() {
       expect(whatCanIDrink(13)).toBe("Drink Toddy");
   });
   it("should say drink coke when age is less than 18", function() {
       expect(whatCanIDrink(17)).toBe("Drink Coke");
   });
   it("should say drink beer when age is less than 21", function() {
       expect(whatCanIDrink(20)).toBe("Drink Beer");
   });
   it("should say drink whiskey when age is less than 130", function() {
       expect(whatCanIDrink(129)).toBe("Drink Whiskey");
   });
   it("should say sorry when age is 130 or more", function() {
       expect(whatCanIDrink(130)).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
   });
   it("should say sorry when age is not a number", function() {
       expect(whatCanIDrink("10")).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
   });
});