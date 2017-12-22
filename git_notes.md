
Overwrite local branch with remote
----------------------------------
`git reset --hard origin/master`


Diff changed files for current commit
-------------------------------------
`git diff-tree --no-commit-id --name-only -r <commit id>`

Create a branch
---------------
`git branch <name>`

Switch to the new branch
------------------------
`git checkout <branch name>`

Add changes
-----------
`git add --all`

Commit
------
`git commit -m "comments"`

Switch branches back to master
------------------------------
`git checkout master`

// ---------
// merge branch into master and delete dev branch
// switch to master... then merge into the master
`git checkout master`
`git merge <branch name>`


Remove dev branch
-----------------
`git branch -D <branch name>`


================================================


// push branch to remote
git branch new-branch

git add --all
git commit -m "added changes"

git push origin new-branch
// there are now 2 branches new-branch and master

// merge the changes
git checkout master
git merge new-branch

git push origin master

// remove remote branch
git push <remote url> --delete <branch>
