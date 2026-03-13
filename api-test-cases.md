API TEST CASES — JSONPlaceholder

TC001 | GET single post
URL: GET /posts/1
Expected Status : 200 OK
Expected Body   : JSON object with id, userId, title, body
Actual Status   : 200 OK
Actual Body     : Correct JSON returned
Status          : PASS ✅

TC002 | GET all posts
URL: GET /posts
Expected Status : 200 OK
Expected Body   : Array of 100 posts
Actual Status   : 200 OK
Actual Body     : 100 posts returned
Status          : PASS ✅

TC003 | POST create new post
URL: POST /posts
Body: { title, body, userId }
Expected Status : 201 Created
Expected Body   : New post object with id: 101
Actual Status   : 201 Created
Actual Body     : Correct object returned
Status          : PASS ✅

TC004 | PUT update existing post
URL: PUT /posts/1
Body: { title, body, userId }
Expected Status : 200 OK
Expected Body   : Updated post object
Actual Status   : 200 OK
Actual Body     : Updated object returned
Status          : PASS ✅

TC005 | DELETE post
URL: DELETE /posts/1
Expected Status : 200 OK
Expected Body   : Empty object {}
Actual Status   : 200 OK
Actual Body     : {} returned
Status          : PASS ✅

TC006 | GET post that doesn't exist
URL: GET /posts/9999
Expected Status : 404 Not Found
Expected Body   : Empty object {}
Actual Status   : 404 Not Found
Actual Body     : {} returned
Status          : PASS ✅