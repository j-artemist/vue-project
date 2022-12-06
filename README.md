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
I decided to use Vue 2 rather then 3 as this is the version I've used previously and with the time I had, would make it a better option. 
In addition I used Vuex for state management and Vue test utils for testing.

---

<br>

### Challenges and learnings

<br>

#### Checkbox styling

<br>
This is the part that I am not 100% happy with.
I found the checkbox a challenge to style in the exact colour and with the exact tick shape as in the design.
From a few solutions I tried this is the closest to the design I could get.
The alternate solutions I also tried were:

- Using clip path polygons for the checkbox tick (I was unable to get a solid background on checkbox checked)
- accent-color css property (With this colour of purple the tick defaults to gray)

I found solutions using svgs and if I had more time I would explore this idea further.

<br>

#### Vue test utils

<br>
I used Vue test utils as this is what I've paired previously with Vue. I wanted to test for emitted events which is quite straight forward using this library.
I attempted to set up jest-axe for accessibility testing but found it to be problematic with Vue test utils. If I could start over I would try testing library instead.

---

<br>

### What I would work on next if I was continuing with the project

<br>

### e2e tests

<br>

The big thing missing here is e2e tests or integration tests. If I were still working on the project I would consider Cypress or Playwright to do this.
In retrospect I could have used testing library to do integration style tests for the main page.

<br>

### User error notifications

<br>
What I would do next is proper error handling that notifies the user via a toast or alert component

<br>

### Greater flexibility with the SVG icon component

<br>

Though not mentioned on the design, the SVG buttons could really do with a hover state to enhance the user experience. This would require an overhaul of the SVG icon component to allow colours to be altered. I would also add sizing tokens so that the SVG icons could be used at different sizes if needed in the future.

### Test updates

<br>
The next test I would complete would be for the components in the Transcription view folder.
