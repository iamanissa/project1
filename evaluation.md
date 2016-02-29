# Project Evaluation

See below for my project evaluation. Feel free to hit me up via Slack or GitHub with additional questions and comments!

## Project Workflow

> Did you complete the user stories, wireframes, task tracking, and/or ERDs, as specified above? Did you use source control as expected for the phase of the program you’re in (detailed above)?

**Exceeds Expectations:** Props on creating an informative and detailed readme. You'd be surprised how much it helps in learning not only about your app but the process that went into creating it. Like how you used your bronze/silver/gold section as a personal checklist too! (There are some formatting issues towards the bottom that probably have to do with markdown formatting.)

## Technical Requirements

> Did you deliver a project that met all the technical requirements? Given what the class has covered so far, did you build something that was reasonably complex?  

**Meets Expectations:** You met all the technical requirements and did a good job of creating a concentration game that dynamically generates all of the content. +1 on using CSS classes and Javascript methods to represent stylistic changes in the game. I indicated a few refactoring opportunities in my inline code comments should you choose to revisit this.

## Code Quality

> Did you follow code style guidance and best practices covered in class, such as spacing, modularity, and semantic naming? Did you comment your code as your instructors have in class?  

**Meets Expectations:** Good job keeping your code clean, indicated and well-commented. It was clear what each section was responsible for. Again, I indicated a few refactoring opportunities that could contribute to code readability.

Make sure to take a look at the inline code comments I made in this [pull request]().

## In Response To Your Questions...

These are my responses to the questions you left in your project submission. Let me know if I can elaborate or if you have any follow-up questions on the below.

#### Winning Text

If you're referring to the block of code that begins on Line 110, I would say you could probably find a way to append winning text to the page without having to create/append so many elements to the page. I left some questions to think about in my inline code comments. I personally like the more JS-centric way of doing things, but either of the two methods you mentioned is fine. There are many different ways to go about doing this -- happy to talk about this more during our next 1:1.

#### Remove `data-color` Attribute

If you wanted to use images, you could store the location of them (e.g., `img/cat.jpg`) in Javascript and then reference it either in your HTML as the `src` for an `<img>` or as the value for the CSS `background-image` property. Let me know if you want some help implementing this!
