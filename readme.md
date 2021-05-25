```
[ Base URL: https://workflows.marche.com.br ]

GET /webhook/informaStatus

Headers: 
{
  "Content-Type": "application/json",
  "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IndlYmhvb2stbWFyY2hlIiwiaWF0Ijo5ODE3MzQ3OTN9.OPMxrlo3nr9R27o0XDpdTYrs9SK8z2ldIrBV4MG30_E"
}

Body: 
{
	"filename": "FILENAME",
	"status": "STATUS"
}

Responses: 

{ "code": "200", "status": "OK" }

{ "code": "400", "error": "status field is missing" }

{ "code": "400", "error": "status field is missing" }

{ "code": "400", "error": "filename field is missing" }

```