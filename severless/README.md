ensure that requirement.txt is in the same folder

then run this in cmd prompt to deploy it to google cloud functions:
gcloud functions deploy python-http-function --gen2 --runtime=python310 --source=. --entry-point=severless --trigger-http --allow-unauthenticated

url of severless function is here: https://python-http-function-yilw3np2zq-as.a.run.app