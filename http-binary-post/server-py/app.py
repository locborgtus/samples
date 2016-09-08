from flask import Flask
from flask import request
import hashlib

app = Flask(__name__)

@app.route("/data", methods = ['POST'])
def postDataHandler():
  # checking mime type - only accept binary stream
  if request.content_type != 'application/octet-stream':
    print('bad content-type: ' + request.content_type)
    return 'mime type must be application/octet-stream', 400

  data = request.data

  # calculate data md5 hash
  m = hashlib.md5()
  m.update(data)
  chksum = m.hexdigest()

  # formulate the return string
  str = 'POST body length: %d hash: %s' % (len(data), chksum)

  # return to client
  print(str)
  return str

if __name__ == "__main__":
  app.run(port = 3000)
