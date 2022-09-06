# 2048
(Developer: Zack Owen)

![Mockup Image](docs/2048-responsive-design.png)

[Live webpage](https://deadenigma13.github.io/CI_PP2_2048/)

## Table Of Content

1. [Project Goals](#project-goals)
    1. [User Goals](#user-goals)
    2. [Site Owner Goals](#site-owner-goals)
2. [User Experience](#user-experience)
    1. [Target Audience](#target-audience)
    2. [User Requirements and Expectations](#user-expectations)
    3. [User Stories](#user-stories)
3. [Design](#design)
    1. [Design Choices](#design-choices)
    2. [Colour](#colours)
    3. [Fonts](#fonts)
    4. [Structure](#structure)
    5. [Wireframes](#wireframes)
4. [Technologies Used](#technologies-used)
    1. [Languages](#languages)
    2. [Frameworks & Tools](#frameworks-&-tools)
5. [Features](#features)
6. [Testing](#validation)
    1. [HTML Validation](#HTML-validation)
    2. [CSS Validation](#CSS-validation)
    3. [Accessibility](#accessibility)
    4. [Performance](#performance)
    5. [Device Testing](#performing-tests-on-various-devices)
    6. [Browser Compatibility](#browser-compatability)
    7. [Testing User Stories](#testing-user-stories)
8. [Bugs](#bugs)
9. [Deployment](#deployment)
10. [Credits](#credits)
11. [Acknowledgements](#acknowledgements)

## Project Goals

### User Goals
- Be able to understand the rules of the game and how to play
- Understand when the game has been won or lost
- Be able to restart the game easily without refreshing the website

### Site Owner Goals
- Deliver rules and information of the game
- Provide an easy but fun game
- Let users email to inform about potential bugs or improvements to the game
## User Experience

### Target Audience
- All ages of people
- Anyone who is looking for fun new game to play on the go or at home

### User Requirements and Expectations
- Allow users to indentify rules easily
- Quick easy way for users to contact the game owner
- Accessibility
- All provided information is easily readable on all screen sizes

### User Stories

#### First-time User
1. As a first-time user, I want to have an easy way of accessing the rules.
2. As a first-time user, I want to be able to restart the game without refreshing the website.
3. As a first-time user, I want to know if I have won or lost the game.
#### Returning User
4. As a returning user, I want to easily contact the game owner in case of any issues.
5. As a returning user, I want to find social media links to the site owners previous work.
6. As a returning user, I want to know my current score.
#### Site Owner
7. As the site owner, I want users to contact about issues and bugs.
8. As the site owner, I want users to find all relative information easily.
9. As the site owner, I want users to find their way back to the game from the error 404 page.
## Design

### Design Choices
The webiste has been designed with accessibility in mind. Users with poor vision and for those who are colour blinded can still view and play the game without struggling to see the numbers on screen.

### Colour
The colours picked with accessibility for poor sighted users in mind, all colours picked are light with the text being mostly black so it stands out for all users.
![Colour Scheme](docs/features/colour-picker.png)

### Fonts
Lato with sans serif as a fallback was used for headers and paragraphs on the page as the font complimented the colours well.

### Structure
The page is structured in a user friendly, easy to learn way so users who arrive on the site know exactly how to play the game and what buttons to press on both mobile and desktop.
The website contains only 2 pages:
- The main page in which the users play the game.
- Contact Us page with an email API.

### Wireframes


## Technologies Used

### Languages
- HTML
- CSS
- JavaScript

### Frameworks & Tools
- Git
- GitHub
- Gitpod
- Balsamiq
- Google Fonts
- Adobe Color
- Font Awesome
- Favicon<span>.</span>io

## Features
The webpage consists of 2 pages and 7 features

### Title & Score
- The title and score can be seen at the top of the page
- The score is updated when a new tile is connected or entered the game board
- User stories covered: 6

![Title and Score](docs/features/title-score.png)

### Gameboard
- Displays in the middle of the screen
- Shows current numbers in play
- User stories covered: 8

![Gameboard](docs/features/gameboard.png)

### Rules
- Rules are shown with the i button displayed above the gameboard
- Shown under the scoreboard
- User stories covered: 1

![Rules](docs/features/rules.png)

### Footer
- Shown at the bottom of every page
- Includes links to social media pages and email api
- User stories covered: 4, 5, 8

![Footer](docs/features/footer.png)

### Email enquiries
- Displayed at the bottom of the screen in the footer
- Sends user to a form screen, allows user to send enquiries about the game
- User stories covered: 4, 7, 8

![Email](docs/features/email.jpg)

### Result
- Result displays when the game decides if the user wins or loses
- Result shows above the gameboard after the game has been decided
- User stories covered: 3

![Result](docs/features/result.png)

### Restart
- Restart icon allows users to restart the game easily without refreshing the page
- Icon is displayed next to the rules icon below the score
- User stories covered: 6

![Restart](docs/features/restart.jpg)

## Validation
The W3C Markup Validation Service was used to validate the HTML of the website. All pages pass with no errors and only 1 error.
<details><summary>2048</summary>
<img src="docs/validation/2048-validation.png">
</details>
<details><summary>Contact</summary>
<img src="docs/validation/contact-validation.png">
</details>

### CSS Validation
The W3C Jigsaw CSS Validation Service was used to validate the CSS style of the website. When validating just my own custom CSS it passes with no errors and no warnings.
<details><summary>style.css</summary>
<img src="docs/validation/2048-css-validation.png">
</details>

### JavaScript Validation
The JShint Validation Service was used to validate the JavaScript of the website. When validating it passes with no errors but 64 warnings which ES6/Mozilla JS extension warnings.
<details><summary>game.js</summary>
<img src="docs/validation/2048-js-validation.png">
</details>
<details><summary>contact.js</summary>
<img src="docs/validation/2048-contact-validation.png">
</details>

### Accessibility

### Performance

### Performing tests on various devices
The website was tested on the following devices
- Lenovo ThinkPad Pro Laptop
- Google Pixel 6 Pro
- Oppo Find X5 Pro
- Samsung Tablet

In addition, the website was tested using the Google Chrome Developer Device Toggling option for all available device options.

### Brower compatibility
The website was tested on the following browsers.
- Google Chrome
- Duck Duck Go
- Microsoft Edge

### Testing user stories

1. As a first-time user, I want to have an easy way of accessing the rules.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Information icon | Navigate to the i icon | Opens up the rules for the game | Works as expected |

<details><summary>Screenshot</summary>
<img src="docs/user-stories-testing/rules-user-story.png">
</details>

2. As a first-time user, I want to be able to restart the game without refreshing the website.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Restart icon | Navigate to the refresh icon | Restarts the game and score | Works as expected |

<details><summary>Screenshot</summary>
<img src="docs/user-stories-testing/restart-user-story.png">
</details>

3. As a first-time user, I want to know if I have won or lost the game.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Game result | Play the game until win or loss | Depending on the game result, result shows outcome above the gameboard | Works as expected |

<details><summary>Screenshot</summary>
<img src="docs/user-stories-testing/result-user-story.png">
</details>

4. As a returning user, I want to easily contact the game owner in case of any issues.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Email | Locate the footer, click on the email icon | Takes user to the email form screen | Works as expected |

<details><summary>Screenshot</summary>
<img src="docs/user-stories-testing/email-user-story.png">
</details>

5. As a returning user, I want to find social media links to the site owners previous work.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Social Media Links | Locate the footer, click on the social media icons | Takes users to the site owners social media accounts | Works as expected |

<details><summary>Screenshot</summary>
<img src="docs/user-stories-testing/social-media-user-story.png">
</details>

6. As a returning user, I want to know my current score.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Score | Score is shown at the top of the screen | Shows users their current score | Works as expected |

<details><summary>Screenshot</summary>
<img src="docs/user-stories-testing/score-user-story.png">
</details>

7. As the site owner, I want users to contact about issues and bugs.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Email | Locate the footer, click on the email icon | Takes user to the email form screen | Works as expected |

<details><summary>Screenshot</summary>
<img src="docs/user-stories-testing/email-user-story.png">
</details>

8. As the site owner, I want users to find all relative information easily.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Relative Information | All relative information is easily visible on the screen | Users can find all information easily | Works as expected |

<details><summary>Screenshot</summary>
<img src="docs/user-stories-testing/ri-user-story.png">
</details>

9. As the site owner, I want users to find their way back to the game from the error 404 page.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Error 404 | Click on the return home button to navigate back to the game | Users return back to the main game | Works as expected |

<details><summary>Screenshot</summary>
<img src="docs/user-stories-testing/">
</details>