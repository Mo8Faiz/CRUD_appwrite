# CRUD_appwrite
## Setup
Clone the repo
## Installation
```bash
npm install
```
## Create a `.env` file with:
         APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
         APPWRITE_PROJECT_ID=xxxxxxx
         APPWRITE_API_KEY=xxxxxxxx
##Usage
```bash
npm index.js
```
## Use API Tools like Postmen to:
POST: http://localhost:3000/notes    //create
*use json body format:
         {
                  "title":"something",
                  "Author":"something"
         }
GET: http://localhost:3000/notes    //read
PUT: http://localhost:3000/notes/:id //update
        *use json body format:
                  1. For title:
                         {"title":"updated_title"}
                  2. Same for author.
DELETE: http://localhost:3000/notes/:id //delete

## Test imagaes: 
1. POST
<img width="1880" height="1042" alt="Image" src="https://github.com/user-attachments/assets/00ede854-3e87-4bdd-b304-bf8d16c6ae8b" />
2. GET
<img width="1902" height="1071" alt="Image" src="https://github.com/user-attachments/assets/44629859-700f-4cbd-a1b2-c7098789e4c3" />
3. PUT
<img width="1891" height="1046" alt="Image" src="https://github.com/user-attachments/assets/bc43c6e9-e6af-482f-957e-0fb0d5ed3524" />
4. DELETE
<img width="1889" height="1026" alt="Image" src="https://github.com/user-attachments/assets/93334d17-8e6c-4c3d-a12f-8a708519a3da" />
