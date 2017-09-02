---
layout: post
title: Multiple orphan/master branches in git.
---

Recently We got a requirement to start investigation on three front independently but have to magnaged all this in one repo. So in short we need three independent master or orphan branches to keep pushing our code seprately, though these branchs are not inter-related. 

To have orphan branches or multiple master branch and maintain separate history in same repository. 

# master branch - 1 : some code
>>git push origin master:master-1
# master branch - 2 : another code
>>git push origin master:master-2 

While pushing it will keep track the branch you are working on. Different team can keep working on their repective master branch.

in case we need we can clone any of the branch in seprate folder and work completely in independent environment.
>>git clone -b <branch> <remote_repo>
