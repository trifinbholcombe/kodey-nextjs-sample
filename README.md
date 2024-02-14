# kodey-nextjs-sample

This repository is an example Kodey.ai Coding Agent Workflow

## Objectives

In this sample, we will explore how Kodey.ai can create react code for a nextjs application.

## Project Setup & Steps 

1. Signup for a new Kodey.ai account or login to your existing Kodey.ai environmenty (link-here)
2. Configure your Kodey.ai integrations to the desired issue tracker and cloud git provider.
3. Fork this repository, and clone it to the cloud git provider of your choosing (Github, Azure DevOps, Bitbucket)
4. Create the sample issue / work item in your issue tracker. Copy and Paste the issue description from below.
5. Execute the below prompt in the Kodey.ai chat UI
6. Validate the commits and pull requests in your cloud git provider

### SAMPLE PROMPT - Github Tools (Adding Login Page)
```
   branch name to create: feature/login-component

   Information to agent: Do as the steps below are defined one by one. You are working in github repo so make sure to use tools related to github repo.
   NOTE: You should write the actual implementation of code not just comments. 
   
   Steps:

   step 1: Using GithubCreateNewBranch tool, Create a new branch with name <branch name to create> first and then do the steps below.

   step 2: using GithubCreateNewFile tool, Create a new file app/login/page.tsx, the file should have a next js component with tailwind css used for a login page. 
      It should have a image on left side and form on right side.
      The component should provide a login form with forget password option and login button.
      There should be a image of computer in left side of form. Use the image from /static/images/google.png.
      The form should be beautifully styled with tailwind css classes, background should be white and not distinctive.
      At the top of login from , it should have a company Name called ENLYT. The component should be dark mode compatible.
   
   step 3: using GithubGetFileContents tool, get the content of file data/headerNavLinks.ts from same branch,
      then update the content of the file to use the newly created component above using GithubUpdateExistingFile.
   
   step 4: using GithubCreatePullRequest tool, create a new Pull Request from the above created branch with title "Added Login Component" and body "Component for login page is added".

   step 5: using GithubUpdateIssue tool, update the issue status to closed
```

### SAMPLE PROMPT - Azure DevOps Tools (Adding Login page)
```
   branch name to create: feature/login-component

   Information to agent: Do as the steps below are defined one by one. You are working in azure repo so make sure to use tools related to azure repo.
   NOTE: You should write the actual implementation of code not just comments. 
   
   Steps:

   step 1: Using AzureDevopsBranchesCreateBranch tool, Create a new branch with name <branch name to create> first and then do the steps below.

   step 2: using AzureDevopsRepositoryCreateNewFile tool, Create a new file app/login/page.tsx, the file should have a next js component with tailwind css used for a login page. 
   It should have a image on left side and form on right side.
   The component should provide a login form with forget password option and login button.
   There should be a image of computer in left side of form. Use the image from /static/images/google.png.
   The form should be beautifully styled with tailwind css classes, background should be white and not distinctive.
   At the top of login from , it should have a company Name called ENLYT. The component should be dark mode compatible.
   
   step 3: using AzureDevopsRepositoryGetFile tool, get the content of file data/headerNavLinks.ts from same branch,
   then update the content of the file to use the newly created component above using AzureDevopsRepositoryUpdateExistingFile.
   
   step 4: using AzureDevopsPullRequestsCreatePullRequest tool, create a new Pull Request from the above created branch with title "Added Login Component".

   step 5: using AzureDevopsIssuesUpdateIssue tool, update the issue status to done.
```

### SAMPLE PROMPT - Jira / Bitbucket
```
   branch name to create: feature/login-component

   Information to agent: Do as the steps below are defined one by one. You are working in bitbucket repo so make sure to use tools related to azure repo.
   NOTE: You should write the actual implementation of code not just comments. 
   
   Steps:

   step 1: Using BitBucketCreateNewBranch tool, Create a new branch with name <branch name to create> first and then do the steps below.

   step 2: using BitBucketWriteCode tool, Create a new file app/login/page.tsx, the file should have a next js component with tailwind css used for a login page. 
   It should have a image on left side and form on right side.
   The component should provide a login form with forget password option and login button.
   There should be a image of computer in left side of form. Use the image from /static/images/google.png.
   The form should be beautifully styled with tailwind css classes, background should be white and not distinctive.
   At the top of login from , it should have a company Name called ENLYT. The component should be dark mode compatible.
   
   step 3: using BitBucketGetFileContent tool, get the content of file data/headerNavLinks.ts from same branch,
   then update the content of the file to use the newly created component above using BitBucketWriteCode.
   
   step 4: using BitBucketCreateNewPullRequest tool, create a new Pull Request from the above created branch with title "Added Login Component".

   step 5: Update this jira issue status to done.
```

## Once you have set the description of the issue in your relavant system. You need to use kodey UI Chat and execute below statement to get the work done. 

### Github Issue and Github Repo
```
   Get the issue with id <issue_id> from github repo and do as the description of the issue says.
```

### Azure Repo Issue and Azure Repo
```
   Get the issue with id <issue_id> from azure repo and do as the description of the issue says.
```

### Jira Issue and Bitbucket Repo
```
   Get the issue with id <issue_id> from bitbucket repo and do as the description of the issue says.
```

## Confirming Successful Sample Outputs

1. Confirm that the branch was created on the issue / work item
2. Confirm that the code created in the associated pull request contains the following
3. Confirm that the work item/issue/ticket in your relevant issue tracking platform is updated.
