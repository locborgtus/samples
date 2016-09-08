# HTTP binary POST samples #

This sample code demonstrates how to upload and receive binary data over HTTP POST, in different languages.

There is a 1M sample data file created via `dd bs=1m count=1 if=/dev/random of=random`, and has a md5sum of `6adc17fa44d0a7fd54e625b4a96559dc`.

## Instruction ##

Run a server, then run a client.

Verify the data length and checksum are correct on the server, and is replied correctly to the client.

## server-js ##

Run `npm install`, then `node .`.

## server-py ##

Run `pip install flask`, then `python app.py`.

## client-js ##

Run `npm install`, then `node .`.

## client-bash ##

Run `./curl.sh`.
