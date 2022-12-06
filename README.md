# frontend-challenge

### Installation

- Set your Node version to 18.10.0
- `npm install`
- `npm run dev`

### To run tests:

- `npm run test`
- `npm run test-watch`

---

### Notes

<br>
I decided to use Vue 2 rather then Vue 3 as that is the version I have used in the past as I would get a better outcome then learning all the new changes in Vue 3 while doing this challenge.
In addition to this I used Vuex for state management and for the tests Vue test utils.

<br>

### Challenges and learnings

<br>

#### Checkbox styling

<br>
This is the part that I am not 100% happy with.
I found the checkbox tricky to style in the exact colour and with the exact tick shape as in the design.
From a few solutions I tried this is the closest to the design I could get.
The alternate solutions I also tried were:

- Using clip path polygons for the checkbox tick (I was unable to get a solid background on checkbox checked)
- accent-color css property (With this colour of purple the tick defaults to gray)

I also saw solutions of using svgs and if I had more time I would be interested in exploring this idea further.

<br>

#### Vue test utils

<br>
I really wanted to set up jest-axe for accessibility testing but I found this problematic with Vue test utils.
I used Vue test utils as that is what I have used in the past with Vue and I also wanted to be able to test for emitted events which is quite straight forward with this library.
If I could start over I would try testing library instead.

---

<br>

### What I would work on next if I was continuing on this project

<br>

### e2e tests

<br>

The big thing that's missing here is e2e tests or integration tests. If I would still be working on this I would consider cypress or playwright to do this.
In retrospect I could have used testing library to do integration style tests for the main page.

<br>

### User error notifications

<br>
What I would do next is proper error handling that notifies the user via a toast or an alert component

<br>

### Greater flexibility with the SVG Icon component

<br>

Even though not mentioned on the design, the SVG buttons could really do with a hover state to enhance the user experience. This would take an overhaul of the SVG Icon component and allow colours to be altered. I would also add sizing tokens so that the SVG icons could be used at different sizes if needed in the future.

### Test updates

<br>
I wanted to be thorough but some of the tests are not complete.

One big TODO is the Transcription view folder which I hadn't completed.
