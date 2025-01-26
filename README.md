# Unhandled Promise Rejection in Async Express.js Route

This repository demonstrates a common error in Node.js applications: unhandled promise rejections within asynchronous functions.  Specifically, it focuses on an Express.js route handler where an error might occur within a `setTimeout` callback simulating an asynchronous database operation.  The error isn't handled properly and results in a silent failure.

The `bug.js` file showcases the problematic code.  The `bugSolution.js` file presents a corrected version with proper error handling.

## Problem

The issue lies in the asynchronous nature of the code.  An error thrown inside the `setTimeout` callback isn't directly caught by the route handler.  Without proper error handling (try...catch within promises), this will lead to an unhandled promise rejection and your application might silently fail without providing a clear indication of the error.

## Solution

The solution involves using a `try...catch` block and proper promise handling to gracefully manage potential errors within the asynchronous operation.  This ensures that errors are caught and logged (or handled appropriately) preventing a silent failure.