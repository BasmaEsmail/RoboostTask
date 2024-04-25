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
### 3.Start development server
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

## Code Structure
This project follows a standard Angular project structure. Here's an overview of the key directories:
### 1.src:
#### 1.1 app: Contains the core application code.
##### 1.1.1 modules: Contains the main modules that includes the components .
##### 1.1.2 shared: contains shared service, guards and models between the modules.
##### 1.1.3 layout: contains navbar and loader components.
#### 1.2 assets: Stores static assets like translation files.
#### 1.3 environments: Contains environment-specific configuration files like apiURL.

## Dependencies
This project uses these dependencies:
#### ng-bootstrap: A set of components and directives that wrap the latest version of Bootstrap.
#### ngx-translate: A library for internationalization and localization.
#### bootstrap-icons: A collection of icons from Bootstrap.
#### ngx-toastr: A library that provides various kinds of options that can be used to customize the notifications
