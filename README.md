# Subscription Tracker

`subscription-tracker` is a backend service built with Node.js, Express, Arcjet, Upstash, and MongoDB. The application helps users keep track of their subscription plans and sends them timely notifications before their plans are set to expire. It also allows users to decide whether they want to cancel or renew their subscriptions.

## Features

- **Track Subscriptions**: Stores and tracks user subscription details such as plan type, start date, and expiration date.
- **Expiration Notifications**: Sends reminders to users about upcoming expiration dates, encouraging them to decide whether to cancel or renew their subscription.
- **User Preferences**: Allows users to set preferences for how early they want to receive expiration notifications.
- **Scalable**: Uses Arcjet for cloud serverless functions and Upstash for Redis-based caching to ensure scalability.
- **Database Integration**: MongoDB is used to store user and subscription data in a structured format.

## Technologies Used

- **Node.js**: JavaScript runtime for building the backend application.
- **Express**: Web framework for building RESTful APIs.
- **Arcjet**: Serverless function platform used for handling background tasks, such as sending notifications.
- **Upstash**: Redis database for caching and managing temporary data efficiently.
- **MongoDB**: NoSQL database to persist user subscription details.

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/Amakhali/subscription-tracker.git
   cd subscription-tracker
   npm install
Set up environment variables: Create a .env file in the root of your project and add the following environment variables:

.env
MONGODB_URI=your_mongo_connection_string
ARCJET_API_KEY=your_arcjet_api_key
UPSHASH_URL=your_upstash_url
NOTIFY_EMAIL_SERVICE_API_KEY=your_email_service_api_key
Run npm run dev to start the project

Acknowledgements
Arcjet for cloud serverless functions.
Upstash for Redis-based caching.
MongoDB for NoSQL database management.
Express for simplifying REST API development.




