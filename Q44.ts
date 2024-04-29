function makeSandwich(...items: string[]) {
    console.log(`Making a sandwich with: ${items.join(", ")}.`);
  }
  
  makeSandwich("ham", "cheese");
  makeSandwich("lettuce", "tomato");
  makeSandwich("avocado", "mustard", "mayo");