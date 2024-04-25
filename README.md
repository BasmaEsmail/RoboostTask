# Student Management System
It's a project that deals with student data; view, create, add and update each student data; with a process for authenticating users.
## How to run locally
### 1. Clone the repository 
```
git clone https://github.com/BasmaEsmail/RoboostTask
```
###  2.Install dependencies
```
npm install
```
### 2.Start development server
```
ng serve
```
## Project Structure
### In the src folder there is 2 modules:
#### 1.User Module:
handles authentication functionalities for users. It includes components for:
##### - Login
##### - Register

#### 2.Student Module 
provides CRUD operations (Create, Read, Update, Delete) for student data. It Includes components for:
##### - Student List ( for view, search and delete students)
##### - Edit Student 
##### - Add Student ( a popup for adding a new student)

## Dependencies
This project uses these dependencies:
#### ng-bootstrap: A set of components and directives that wrap the latest version of Bootstrap.
#### ngx-translate: A library for internationalization and localization.
#### bootstrap-icons: A collection of icons from Bootstrap.
#### ngx-toastr: A library that provides various kinds of options that can be used to customize the notifications
