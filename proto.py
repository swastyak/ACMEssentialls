import requests
from slack import WebClient
#insert token below
TOKEN = ""
client = WebClient(TOKEN)
request = client.api_call("users.list")
if request["ok"]:
  for item in request["members"]:
    print(item["name"])

