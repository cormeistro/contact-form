# contact-form-fe

Thank you for giving me the opportunity to work on an interview projects. I find that this is a crucial learning tool that will help me understand exactly what companies like yours look for.

Here are my notes on how I chose to accomplish this task.

# STYLING DIFFERENCES

The style guide did not include height for the Message input, so I set this to 5 rows. I also added some padding to the left-right of the input fields for text to look better inside.

I also wrapped the Contact form in a div so it would be centered on the page with an off-white background so you can easily see the area.

Also- for data validation- I added absolutely positioned <p> tags for errors.

I hope that this is not considered deviating outside of the parameters of the test- I did include all of the style guide requirements.

# FRONT-END

Firstly, I took all of your styling colors and put them in a :root tag so that I could reference them as variables later on. Yes- I included white although it is tedious- because I wanted to be consistent in case colors change in the future.

Then- I created the Contact Form component & the modular css for it.
I plugged in all of the style guide options into the modular CSS.

It's now time to create the TSX elements.
I layed out the elements in order and I typically like to use Grid or Flex for alignment- so I went with several flex properties for this. Once styling was complete, it's time for the data validation.

I chose to use react-hook-forms where I used their { register } function to spread the html attributes into their respective elemets. Combining this with ZOD let me create a schema where I could use Zods proper email validation.

Using the Hookform resolver, I connected zod with react-hook forms to use the schema I created. Based on the errors, the TSX renders <p> tags with the corresponding errors.

I then created a function called onSubmit to handle the back-end. You will notice that react-hook-forms handleSubmit function hijacks the default submit. So I just passed in my onSubmit function to this handleSubmit function and I didn't have to use event.preventDefault().

# BACK-END

I was going to createe a second repository for the back end, but opted ultimately for a monolithic approach. I understand that it would not be typical in a larger project, but I felt that this project was sufficiently small.

In the server.js you will see that I'm:

- Allowing CORS traffic from port 5173 (my react app)
- Using express to monitor for a PUT request at /api
- Using the path package to allow \_\_dirname to access the root directory
- Using the fs package to write to the file

# CONCLUSION

All in all, this was a great experience, and I really appreciate the opportunity to complete a task like this which tests my ability to follow directions, code well, and ultimately provide a working solution.

I hope that you can review this code and find it decent. I'm very excited to learn how I can improve upon this and make things even simpler.

I definitely have questions I would love to ask, but generally had a good time making this.
