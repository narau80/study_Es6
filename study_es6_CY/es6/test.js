"use strict";

const sentences = [
	{subject: "JavaScript", verb: "is", object: "great"},
	{subject: "Elephants", verb: "are", object: "great"}
];

const say = ([subject, verb, object]) => {
	console.log(`${subject}${verb}${object}`);
};

for (let s of sentences){
	say(s);
}
