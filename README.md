This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts
To run the application, you should have npm and create-react-app installed.<br>
Also, you should be registered on portis and have atleast two ethereum address. One will represent the admin and the other will be the manufacturer.<br><br>
To run this program, follow these instructions:<br>
**1.** Clone the repository by running ### 'git clone https://github.com/hackinhub19/Shatter-New.git'. <br>
**2.** Now, move into the cloned directory and run ### 'sudo npm install'. This will install all the required dependencies.<br>
**3.** The app functionality starts with the admin registering a company. There can be only one admin. To set the admin, go to Contract folder inside src and in login.sol 16th line, remove the previous address and paste the new address.<br>
**4.** Run ### 'sudo npm start' to start the development server.<br>
(There are two users of this application along with the admin- Manufacturer and the Customer)<br>
**5.** Typing ### 'localhost:3000/admin' will take you to the admin page. Only admin has the right to register a new manufacturer.<br>
  Typing ### 'localhost:3000/login' will take you to the Login page of the manufacturer. The manufacturer only needs to login     into portis and his page will automatically be displayed.<br>
  Typing ### 'localhost:3000/mainpage' will take you to the consumer's page. The customer needs to enter the serial number of     the product and he will get a portis popup to login.<br>
**6.** Now, admin should copy the address of manufacturer and and fill the form in ### 'localhost:3000/admin'.<br>
**7.** Now, the manufacturer's address should be selected from portis and he can login in 'localhost:3000/login'.<br>
**8.** Download the application=barcode to pc on your mobile.Also download the server file for your specific OS.
Run the executable file.There is a QR CODE displayed on your computer screen ,which has to be scanned from mobile app to connect to server and set the QR serial number.
Once connected you can place the curser on the input field of the browser.Thats all!!! Now start scanning the code and you can see the value in the screen.
LINK :### 'https://www.youtube.com/watch?v=J2WPjZ-RhfE'

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
