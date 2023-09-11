function generateRandomBirthMonth() {
    // Generate a random month between 1 (January) and 12 (December)
    return Math.floor(Math.random() * 12) + 1;
  }
  
  function generateRandomBirthYear() {
    // Generate a random year between 1992 and 1993
    return Math.floor(Math.random() * 2) + 1992;
  }
  
  function generateRandomBirthdates(count) {
    const birthdates = [];
  
    for (let i = 0; i < count; i++) {
      const month = generateRandomBirthMonth();
      const year = generateRandomBirthYear();
      birthdates.push({ month, year });
    }
  
    return birthdates;
  }
  
  function groupByMonth(birthdates) {
    const grouped = {};
  
    for (const date of birthdates) {
      const key = `${date.month}-${date.year}`;
      if (!grouped[key]) {
        grouped[key] = [];
      }
      grouped[key].push(date);
    }
  
    return grouped;
  }
  
  const numberOfIndividuals = 50;
  const birthdates = generateRandomBirthdates(numberOfIndividuals);
  const groupedByMonth = groupByMonth(birthdates);
  
  console.log("Individuals grouped by birth month:");
  for (const key in groupedByMonth) {
    const individuals = groupedByMonth[key];
    console.log(`Month-Year: ${key}, Count: ${individuals.length}`);
    console.log("Individuals:", individuals);
    console.log("\n");
  }
  