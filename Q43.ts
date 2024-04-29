let mAgicians: string[] = ["Alice", "David", "Chris"];

function make_great(mAgicians: string[]): string[] {
  let greatMAgicians: string[] = [];
  mAgicians.forEach((mAgician) => {
    greatMAgicians.push(`${mAgician} the Great`);
});
return greatMAgicians;
}

function show_mAgicians(mAgicians: string[]) {
  mAgicians.forEach((mAgician) => {
    console.log(mAgician);
  });
}

let greatMAgicians = make_great(mAgicians.slice()); // Creates a new modified array
console.log("Original magicians:");
show_mAgicians(mAgicians); // Shows original names
console.log("Great magicians:");
show_mAgicians(greatMAgicians); // Shows modified names