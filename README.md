# Next.js 15: 'process' is not defined Error

This repository demonstrates a common error in Next.js 15 applications when accessing environment variables within client-side components.  The error, "ReferenceError: process is not defined", arises because the `process` global object is not available in browser environments.

## Problem

The `about.js` file attempts to access an environment variable using `process.env.MY_VARIABLE`. This works correctly on the server-side but will throw an error when rendered in the browser.

## Solution

The `aboutSolution.js` file demonstrates the solution using the `NEXT_PUBLIC_` prefix for environment variables that need to be accessed on the client-side.  Alternatively, conditional rendering or server-side props could be used to avoid accessing the variable in client-side code.