# W9_25.09.2020

###### CURRENT CODES ARE UPLOADED IN THIS WEEK'S FOLDER

## ANOTHER PIVOT

After the milestone presentation, a few thoughts came to me through conversations I've had to refocus the direction of my project. I think playing around with the basics of text input and p5js was a good starting point but what I realised was that the outcomes fell short to really present any sort of communication towards the project concept. An idea then occured to me over the weekend.
- What if instead of directly exploring the act of reading and the meaning of human languages.. by a human, there was the intervention of a foreign entity. In this instance, a computer disguised as an alien form?
- What if our language was 'read' by a computer, but the response by a computer isn't something that human's can understand.. it isn't useful and it isn't functioning to "make our lives convenient" like modern technology does. What if the computer responds to our language in a way that is visceral and experiencial?
- Would the effects of this disrupt our thinking towards language and its meaning?
- What would the implications be if our inherent need to respond to a question with intention, was invited by a non-human entity without context. Does that raise a strange human-machine interaction that exists without the need for purpose or meaning? But purely a visceral, and ambient experience?

**So the project would situate as a human-alien(/computer) interaction. The machine would ask a question, using the system of grammar that human's use, in order to generate a zero context question that invites a human response. The human's response in words, is read by an alien(/computer) as codes. This code is used to generate the alien(/computer)'s interpretation of the human language. Exploring an interaction that has no meaning.. and purely experiential**

As I was planning to figure out the RiTa library this week, I realised that there was a function from the library that can randomly select words based on the parameters of a part of speech (POS). So What i was able to create from this was a series of randomly generated questions that have absolutely no context but act as an invitation for a human user to 'respond'. through this response.. the data input could then be used to generate a machine interpretation of the human language. </br>

**Here are some examples of generated questions based on the following syntax**</br>

###### WORK IN PROGRESS (need to refine for more accurate question structure)
```
output = "Tell me, "random Wh-pronoun" + "random Modal" + the "random Noun, plural" "random Adjective, superlative" + "random Particle" + "random Noun" + "random Possessive Ending" + "random Foreign word" + "random Verb" + "?";
```

![Screen Shot 2020-09-29 at 1 06 25 pm](https://user-images.githubusercontent.com/68724434/94508232-d9d42700-0254-11eb-9239-1ae6582c5522.png) ![Screen Shot 2020-09-29 at 1 07 25 pm](https://user-images.githubusercontent.com/68724434/94508240-dc368100-0254-11eb-839e-6409e33a15a9.png)

As for the output from human response, two things I keep coming back to were precedents from earlier on in the semester. One of them being [Jannis Maroscheck](https://www.itsnicethat.com/articles/jannis-maroscheck-shape-grammars-graphic-design-100820) and how his work presented beauty in form as well as this idea of a cryptic language. 
- I could play with length of string as the number of anchor points and then generating a connection between the points based on the keyCode of the user input.
- I could also play with the part of speech breakdown of the input, assigning a value for different POS as JSON to use as variable to generate the connection. But this would add the human system for language to generate a computer response which seems to contradict the concept of this generative response.
- Another precedent that I kept thinking of was the film [Arrival](https://cdn.vox-cdn.com/thumbor/SI-DlR6Y4-yyL6MuuGMRFKaIw00=/0x0:1497x787/920x0/filters:focal(0x0:1497x787):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/7469305/ArrivalInk.png) and how the nature of the symbol communicates this string of human words. Also the fact that it was non-liear, I thought could be quite an interesting direction to follow. I came across the works of [Étienne Jacob, who does these phenomenal looping gif artworks](https://user-images.githubusercontent.com/68724434/94509007-a09cb680-0256-11eb-82b4-0d76bdd291bf.gif) and so I was experimenting with a base code provided by [Daniel Shiffman](https://www.youtube.com/watch?v=ZI1dmHv3MeM) to create a similar effect.

###### EXPERIMENTATIONS (Working Codes uploading in folder)

![Screen Shot 2020-09-29 at 10 38 02 am](https://user-images.githubusercontent.com/68724434/94509194-0db04c00-0257-11eb-8882-87041b8691a0.png)
![Screen Shot 2020-09-29 at 1 29 35 pm](https://user-images.githubusercontent.com/68724434/94509686-2705c800-0258-11eb-8e6f-746a708c2523.png)

- I've yet to come up with a set of code that is flexible and unique enough. And i'm wondering whether points or connected points would be best for this context. 
- Perhaps I could play with overlaying multiple sets to increase the complexity of the outcome?
- I'm also considering whether to keep it static or animated, with the possibility of sound being incorporated as an additional element.

###### POTENTIAL EXTENSIONS

Talking through my idea with Louis, he brought up an interesting point of archiving a record of these human-machine interactions. Which would be a great way to extend this into a printed matter, potentially collecting a series of a non-meaning interactions and juxtaposing them with a collection of generative art as a visual representation to the words and language that we use.
