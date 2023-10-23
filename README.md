Web Application Deployment with DevOps

Welcome to my DevOps project which showcases how to deploy a simple web application using Git, GitHub, Docker, AWS S3, and AWS EC2.

What Is This Project About?

This project is a step-by-step guide to create a DevOps pipeline, which is essentially a set of tools and practices that make it easier to develop, deploy, and maintain applications. In this case, it's all about taking a basic web application and getting it up and running in the cloud. The tools we'll use include Git for version control, Docker to package our application, GitHub for hosting our code, AWS S3 for storing files, and AWS EC2 for hosting the application itself.

How Is the Project Organized?

The project is organized in a structured manner:

app.js: This is where you put your simple web application code, which could be written in Node.js.
Dockerfile: This is a set of instructions that tells Docker how to package your application.
.gitignore: It's a list of files and folders that Git should ignore.
README.md: You're currently reading this project documentation.
.github/workflows/: This is where you'd put GitHub Actions workflow files if you were automating the project.
static-asset.jpg: This is a sample image file, but you should replace it with your own static assets if needed.

How to Get Started

To deploy the web application, follow these steps:

1. Create a simple web application (e.g., Node.js) and place the code in `app.js`.
2. Set up Git and GitHub:
   - Initialize a Git repository in your project folder.
   - Create a GitHub repository to host your project.

3. Create a Dockerfile for containerizing your web application.
4. Build and push the Docker image to a container registry (e.g., Docker Hub).
5. Set up an AWS S3 bucket to store static assets and configure public access.
6. Update your application code to serve static assets from the S3 bucket.
7. Create an AWS EC2 instance for hosting the Docker container.
8. SSH into your EC2 instance, pull the Docker image, and run the container.
9. Access your web application using your EC2 instance's public IP address.



