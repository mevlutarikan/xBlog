# xBlog Application

## Table of Contents

1. [General Info](#1.-general-info)
2. [Technologies](#2.-technologies)
3. [Installation](#3.-installation)
4. [Collaboration](#4.-collaboration)
5. [FAQs](#5.-faqs)

## 1. General Info

---

This project is for creating and listing blog posts. Backend application and API service is developed by Node.js Express, [Clean Blog](https://startbootstrap.com/theme/clean-blog) template is used for HTML, CSS startup template. MongoDB Atlas is chosen as a database cloud provider.

## 2. Technologies

---

A list of technologies used within the project:

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [React](https://reactjs.org/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [Clean Blog](https://startbootstrap.com/theme/clean-blog)

## 3. Installation

---

#### Sign up to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and get database connection url

Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas), sign up with your email, choose one free plan and create a cluster and a database. After adding a database user to access, you can get an access API URL like this:

```sh
mongodb+srv://<username>:<password>@cluster.vt6tb.mongodb.net/<dbname>?retryWrites=true&w=majority
```

Keep this URL for using in the .env file explained below.

#### Clone the project on your local drive

```sh
$ git clone https://github.com/mevlutarikan/xBlog.git
$ cd xBlog/
```

### 3.1 Installation and configuration of Express server

#### Install npm dependencies

```sh
$ npm install
```

#### Copy .env.sample file to create the .env file for your environment variables

```sh
$ cp .env.sample .env
```

## database/API connection information

#### Open the .env file in your editor and change the values as described below

- **DB_URL** MongoDB atlas connection URL you get above

- Replace `username`, `<password>` and ` myfirstdatabase` with your credentials.

#### Start express server

```sh
$ npm start
```

## 4. Collaboration

---

Any help and suggestion will be appreciated.

## 5. FAQs

---

A list of frequently asked questions

## Author

---

👤 **Mevlut Arikan**

Computer Engineer, Backend Developer

- Twitter: [@mevlutarikan](https://twitter.com/mevlutarikan)
- Github: [@mevlutarikan](https://github.com/mevlutarikan)

## Show your support

---

Give a ⭐️ if this project helped you!
