# frontend-challenge

### Installation

- Set your Node version to 18.10.0
- `npm install`
- `npm run dev`

### To run tests:

- `npm run test`
- `npm run test-watch`

---

## Notes

### Challenges and learnings

I haven't used Vue for almost 2 years so was definitely feeling rusty doing this challenge but it felt like a great refresher and was excited to get back into Vue land as I am a huge fan.
I decided to use Vue 2 rather then Vue 3 as that is the version I have used in the past just as I would get a better outcome.

#### Checkbox styling

I found this a bit tricky to style it with the exact colour and tick in the design.
I am not 100% happy with how this turned out but from a few solutions this is the closest to the design I could get.
The solutions I did try before this one were:

- Using clip path polygons for the checkbox tick (I was unable to get a solid background on checkbox checked)
- The relatively new accent-color css property (With this colour of purple the tick defaults to gray)

I also saw solutions of using svgs and if I had more time I would be interested in exploring this idea further.

#### Vue test utils

I really wanted to set up jest-axe for accessibility testing but I found this problematic with Vue test utils.
I used Vue test utils as that is what I have used in the past with Vue and I also wanted to be able to test for emitted events which is quite straight forward with this library.
If I could start over I would try testing library instead.

---

### What I would work on next if I was continuing on this project

What is missing from this project is:

##### e2e tests

The big thing that's missing here is e2e tests to test the page as a whole. If I would still be working on this I would consider cypress or even playwright which I am yet to try out.
I also could have used testing library to do integration style tests for the main page.

#### error handling and user error notifications

What I have here currently is super basic and doesn't notifiy the user of any errors if they occur.
I ran out of time to put this in but wanted to flag that I am aware of this and wouldn't release anything in production without this done properly.
What I would do next is proper error handling and a toast or alert component to notify the user of any problems.

#### SVG Icons

Even though not mentioned on the design, the SVG buttons could really do with a hover state to enhance the user experience. This would take an overhaul of the SVG Icon component and allow colours to be altered.

#### Test updates

I tried to be thorough but some of the tests are not complete.

One big TODO is the Transcription view folder which I hadn't completed.
