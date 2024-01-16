const obj = { one: 1, two: 2 };

for (const key in obj) {
  console.log('value', obj[key]);
}

// Object.keys(), Object.values(), Object.entries()