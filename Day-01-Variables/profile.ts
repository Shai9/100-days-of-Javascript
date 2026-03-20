// Explicitly defining types (The TypeScript Way)
const studentName: string = "YourName"; 
let daysCompleted: number = 1;
let codingStatus: boolean = true;

// Big O Thought: Accessing a variable by name is O(1) 
// It takes the same amount of time regardless of how much data is in memory.
console.log(`${studentName} is on day ${daysCompleted}.`);