# la_technical_quiz

Please clone or pull this repo first,

• Question 01 - Power Sum

	open the terminal and hit: "npm run start01"
	
	
	
• Question 02 - Time Conversion

	open the terminal and hit: "npm run start02"
	
	
	
• Question 03 - CamelCase Count

	open the terminal and hit: "npm run start03"
	
	
	
• Question 04 - Architectural Analysis

	1. Demand Management and Cost Efficiency: Use AWS auto-scaling to adjust resources according to demand. Use AWS Cost Explorer to track costs.

	2. Scalability: Use Amazon ECS or EKS to run and scale the web application and API services.

	3. Load Distribution: Use Amazon Route 53 for DNS and Amazon CloudFront for distributing load. Use AWS API Gateway to manage API traffic.

	4. Database Performance: Use Amazon RDS for the database. It's scalable, reliable, and supports read replicas to handle high read traffic.

	5. User Experience: Use Amazon CloudFront to deliver content quickly to users worldwide.

	6. Security for Mobile Users: Use AWS Cognito for user authentication and data synchronization across devices.

	7. Self-healing Infrastructure: Use AWS Auto Scaling Groups and Multi-AZ deployments for automatic recovery from failures.

	8. Data Analysis and Archival: Use AWS Kinesis for data capture, AWS Glue for ETL, and Amazon S3 for data storage. Use Amazon Redshift or Athena for analysis and QuickSight for visualization. Store archived data in S3 Glacier.

	9. Data Security: Use AWS KMS for encryption at rest and Amazon Certificate Manager for encryption in transit.

	10. Access Management: Use AWS IAM for managing user access and permissions.

	11. CI/CD: Use AWS CodePipeline for source code management and automated deployment.

	12. Environment Management: Use AWS CloudFormation to manage and replicate cloud environments easily.
	
	

• Question 05 - Node.js API

	For this part I know I should select on of three technical problems above (Question 01 / 02 / 03), but because the function is already there, I think why not just put all of them together?!
	
	Ah btw, I also put it in heroku, so you can access the API from the cloud. Also I provide a postman collection there ('LA_Tech_Quiz.postman_collection.json'), so you can import it and just run the endpoint API from postman.
	
	Alright, here is the detail:
	
		If you want to run it in local, open the terminal and hit "npm run start", then go to postman and create new request, all of them using POST method.
	
		1. Question 01 	-> localhost:4000/powersum
						or
						-> https://lunchactuallyquiz.herokuapp.com/powersum
						
				Body:	{
							"x" : 100,
							"n" : 3
						}
						
						
		2. Question 02 	-> localhost:4000/timeconversion
						or
						-> https://lunchactuallyquiz.herokuapp.com/timeconversion
						
				Body:	{
							"time" : "07:05:45PM"
						}
						
						
		3. Question 03 	-> localhost:4000/camelcasecount
						or
						-> https://lunchactuallyquiz.herokuapp.com/camelcasecount
						
				Body:	{
							"words" : "saveChangesInTheEditor"
						}