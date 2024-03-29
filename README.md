# ceredentialGeneratorCypress

## Overview

A key feature of this project is the use of custom fixtures located in cypress/fixtures/functions.js, which allow for the generation of unique credentials for comprehensive testing scenarios.

## Installation and Setup
### Prerequisites
Node.js (version 12 or higher)
npm (usually comes with Node.js)
## Step-by-Step Guide
1. Clone the Repository

Clone this repository to your local machine using the following command:

```bash
git clone https://github.com/petarQAcyjs/emailGeneratorCypress
```

2. Install Dependencies

Navigate to the project directory and install the required dependencies:

```bash
cd <project-name>
npm install
```

3. Install Cypress

Install Cypress via npm:

```bash
npm install cypress --save-dev
```

4. Open Cypress Test Runner

Launch the Cypress Test Runner:

```bash
npx cypress open
```

## Testing the Dummy Test Site
This project aims to automate the testing of various functionalities of the Lambdatest dummy test site. The tests are designed to cover multiple aspects of the site.

## Custom Fixtures for Unique Credentials
A standout feature of this project is the custom fixtures located in cypress/fixtures/functions.js. These fixtures are designed to generate unique credentials, enabling testers to simulate different user scenarios effectively. This approach enhances the testing process by providing a diverse range of test cases.

### Usage
To utilize these custom fixtures in your tests, you can import them into your test files as follows:

```bash
import { generateEmail, generatePhoneNumber } from "../fixtures/functions";
```
You can then use these functions to generate unique credentials or data needed for your tests.

## Contact Information
For any queries or feedback regarding this project, please contact us at femicpetar@gmail.com.

## Acknowledgments
 Lambdatest for providing the dummy test site.
 Cypress for their excellent automation framework.
