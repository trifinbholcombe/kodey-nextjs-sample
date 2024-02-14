# kodey-nextjs-sample

This repository is an example Kodey.ai Coding Agent Workflow

## Objectives

In this sample, we will explore how Kodey.ai can create react code for a nextjs application.

## Project Setup & Steps 

1. Signup for a new Kodey.ai account or login to your existing Kodey.ai environmenty (link-here)
2. Configure your Kodey.ai integrations to the desired issue tracker and cloud git provider.
3. Fork this repository, and clone it to the cloud git provider of your choosing (Github, Azure DevOps, Bitbucket)
4. Create the sample issue / work item in your issue tracker. Copy and Paste from below
5. Execute the below prompt in the Kodey.ai chat UI
6. Validate the commits and pull requests in your cloud git provider

### SAMPLE PROMPT - Github Tools
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

### SAMPLE PROMPT - Azure DevOps Tools
```
branch name to create: feature/AI-848-github-tool-v4

tool_name_to_create : github_tools

Information to agent: Do as the steps below are defined one by one. You are working in bitbucket  repo so make sure to use tools related to bitbucket repo.

Steps: 

 FYI: Use the tool_creator_template tool , get the template on how to make tools first and then do the steps below. NOTE: Template provides an outline for writing code but you should write the actual implementation of code not just comments. 

NOTE: Using BitBucketCreateNewBranch tool, Create a new branch with name <branch name to create> first and then do the steps below.

from https://pygithub.readthedocs.io/en/latest/examples/Authentication.html  understand about the authentication for this PyGithub SDK using web crawler tool.

step 1. You will be working for following categories:

<category>

How to get a branch, list all branches and  create a branch from 

  How to get a pull request, create a new pull request from  

How to get the content of a file, make commits to a file in a branch from  

</category>

step 2. Using the format given by tool_creator_template tool , get the format on which you should be writing code. NOTE: Template provides an outline for writing code but you should write the actual implementation of code not just comments. 

step 3. for each one of categories mentioned  above, execute the steps in <child-steps>

 <child-steps>

step 1. for functions mentioned in each category , Using web crawler tool, get sample python code on how can we implement those functions . Just understand how to call the methods. Later you have to create tools for each category based on the sample code.

step 2. Following the format given by tool_creator_template tool and sample code above , create tool for each function in category.

NOTE: You have to put tools in the following structure. Code should be written to agentserverless/custom/<tool_name_to_create>/<tool_name>.py . For example: If you are creating tool for ‘get a branch and create a branch’ of branches categories , you should create two tools and store  the code in agentserverless/custom/<tool_name_to_create>/<tool_name_to_create>_branches.py. Similarly you have to do for all the other categories. You have to write actual code implementation function. functions inside each categories should be an individual tool stored inside same file. For example, tool for getting a branch and creating a branch should be inside agentserverless/custom/<tool_name_to_create>/<tool_name_to_create>_branches>.py

step 3. Evalutate each categories and start adding to agentserverless/custom/<tool_name_to_create>/<tool_class_name.py using BitBucketWriteCode tool. All the tools related to branches categories should go to agentserverless/custom/<tool_name_to_create>/<tool_name_to_create>_branches.py

 </child-steps>



 step 4. After creating tools by following steps in <child-steps> tag, create a agentserverless/<tool_name_to_create>/__init__.py file inside the same directory and import the every tool classes you made for each endpoints there.

step 5. using BitBucketGetFileContent tool , Get the content of “”agentserverless/lambda_function.py”" file from same branch which is present in agentserverless directory and update the “”agentserverless/lambda_function.py”" with new tools details and make the changes and return the complete code.

step 6. using BitBucketCreateNewPullRequest tool , create a pull request with the changed code with title Github Tool Created

step 7. Transition this Jira issue to Done status
```

### SAMPLE PROMPT - Jira / Bitbucket
```
branch name to create: feature/AI-848-github-tool-v4

tool_name_to_create : github_tools

Information to agent: Do as the steps below are defined one by one. You are working in bitbucket  repo so make sure to use tools related to bitbucket repo.

Steps: 

 FYI: Use the tool_creator_template tool , get the template on how to make tools first and then do the steps below. NOTE: Template provides an outline for writing code but you should write the actual implementation of code not just comments. 

NOTE: Using BitBucketCreateNewBranch tool, Create a new branch with name <branch name to create> first and then do the steps below.

from https://pygithub.readthedocs.io/en/latest/examples/Authentication.html  understand about the authentication for this PyGithub SDK using web crawler tool.

step 1. You will be working for following categories:

<category>

How to get a branch, list all branches and  create a branch from 

  How to get a pull request, create a new pull request from  

How to get the content of a file, make commits to a file in a branch from  

</category>

step 2. Using the format given by tool_creator_template tool , get the format on which you should be writing code. NOTE: Template provides an outline for writing code but you should write the actual implementation of code not just comments. 

step 3. for each one of categories mentioned  above, execute the steps in <child-steps>

 <child-steps>

step 1. for functions mentioned in each category , Using web crawler tool, get sample python code on how can we implement those functions . Just understand how to call the methods. Later you have to create tools for each category based on the sample code.

step 2. Following the format given by tool_creator_template tool and sample code above , create tool for each function in category.

NOTE: You have to put tools in the following structure. Code should be written to agentserverless/custom/<tool_name_to_create>/<tool_name>.py . For example: If you are creating tool for ‘get a branch and create a branch’ of branches categories , you should create two tools and store  the code in agentserverless/custom/<tool_name_to_create>/<tool_name_to_create>_branches.py. Similarly you have to do for all the other categories. You have to write actual code implementation function. functions inside each categories should be an individual tool stored inside same file. For example, tool for getting a branch and creating a branch should be inside agentserverless/custom/<tool_name_to_create>/<tool_name_to_create>_branches>.py

step 3. Evalutate each categories and start adding to agentserverless/custom/<tool_name_to_create>/<tool_class_name.py using BitBucketWriteCode tool. All the tools related to branches categories should go to agentserverless/custom/<tool_name_to_create>/<tool_name_to_create>_branches.py

 </child-steps>



 step 4. After creating tools by following steps in <child-steps> tag, create a agentserverless/<tool_name_to_create>/__init__.py file inside the same directory and import the every tool classes you made for each endpoints there.

step 5. using BitBucketGetFileContent tool , Get the content of “”agentserverless/lambda_function.py”" file from same branch which is present in agentserverless directory and update the “”agentserverless/lambda_function.py”" with new tools details and make the changes and return the complete code.

step 6. using BitBucketCreateNewPullRequest tool , create a pull request with the changed code with title Github Tool Created

step 7. Transition this Jira issue to Done status
```


## Confirming Successful Sample Outputs

1. Confirm that the branch was created on the issue / work item
2. Confirm that the code created in the associated pull request contains the following
3. 
