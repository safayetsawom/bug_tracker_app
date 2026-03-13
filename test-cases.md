TEST CASES — Bug Tracker App

TC001 | Add bug with empty title
Steps: Leave title blank → fill description → click Add Bug
Expected: Alert shown, bug not added
Actual: Alert shown, bug not added
Status: PASS ✅

TC002 | Add bug with empty description
Steps: Fill title → leave description blank → click Add Bug
Expected: Alert shown, bug not added
Actual: Bug was added with no description (FIXED)
Status: PASS ✅ (after fix)

TC003 | Add multiple bugs
Steps: Add 10 bugs in a row
Expected: All bugs appear in list
Actual: All bugs added successfully
Status: PASS ✅

TC004 | Mark bug as fixed
Steps: Add a bug → click Mark Fixed
Expected: Bug fades with strikethrough
Actual: Works as expected
Status: PASS ✅

TC005 | Reopen a fixed bug
Steps: Mark a bug fixed → click Reopen
Expected: Bug returns to normal state
Actual: Works as expected
Status: PASS ✅

TC006 | Delete all bugs
Steps: Add 3 bugs → delete one by one
Expected: Each bug removed, empty message shown
Actual: Works as expected
Status: PASS ✅

TC007 | Data persists after refresh
Steps: Add bugs → refresh page
Expected: Bugs still visible
Actual: Bugs still visible
Status: PASS ✅

TC008 | Data persists after tab close
Steps: Add bugs → close tab → reopen
Expected: Bugs still visible
Actual: Bugs still visible
Status: PASS ✅

TC009 | Data in different browser
Steps: Add bugs in Chrome → open Firefox
Expected: Bugs not visible (localStorage is browser-specific)
Actual: Bugs not visible
Status: PASS ✅